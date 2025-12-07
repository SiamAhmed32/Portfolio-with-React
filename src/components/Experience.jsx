import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { styles } from "@/styles";
import { workExperiences } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { textVariant, fadeIn, staggerContainer } from "@/utils/motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Experience3DCanvas from "./canvas/Experience3D";
import { Briefcase, Code, Users, TrendingUp } from "lucide-react";

const ExperienceCard = ({ experience, index, isInView }) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  const technologies = [
    // Languages & Web Foundations
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Java",
    "HTML",
    "CSS",
    // Frameworks
    "Next.js",
    "React.js",
    "Redux",
    "Framer Motion",
    "Tailwind",
    "Bootstrap",
    "Chakra UI",
    "Swiper",
    // Databases & APIs
    "MongoDB",
    "Firebase",
    "RTK Query",
    "React Query",
    "REST API",
    "Axios",
    "Fetch",
    // Developer Tools & Methodologies
    "Git",
    "GitHub",
    "Netlify",
    "Vercel",
    "Agile (Scrum)",
    "UI/UX Principles",
  ];

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      animate={cardInView ? "show" : "hidden"}
      className="relative"
    >
      <Card className="relative overflow-hidden border-purple-500/20 bg-gradient-to-br from-[#1d1836] to-[#151030] backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
        
        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  {experience.title}
                </CardTitle>
              </div>
              
              <div className="flex items-center gap-4 flex-wrap mt-3">
                <div className="flex items-center gap-2 text-purple-300">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {experience.company_name}
                  </span>
                </div>
                <Badge variant="gradient" className="text-xs">
                  {experience.date}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6">
          {/* Key Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-xs text-gray-400">Users Served</p>
                <p className="text-sm font-bold text-white">10,000+</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Code className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-xs text-gray-400">Components</p>
                <p className="text-sm font-bold text-white">20+</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Users className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-xs text-gray-400">Team Size</p>
                <p className="text-sm font-bold text-white">5+</p>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Key Responsibilities & Achievements
            </h4>
            <ul className="space-y-3">
              {experience.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={cardInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="pt-4 border-t border-purple-500/20">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#100d25] to-[#050816]">
      {/* 3D Background Models */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 opacity-30">
          <Experience3DCanvas modelType="computer" position={[0, 0, 0]} />
        </div>
        <div className="absolute bottom-20 left-10 w-48 h-48 md:w-72 md:h-72 opacity-20">
          <Experience3DCanvas modelType="planet" position={[0, 0, 0]} />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            className={`${styles.sectionSubText} text-purple-300`}
          >
          What I have done so far
          </motion.p>
          <motion.h2
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent`}
          >
          Work Experience.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Building scalable web applications and delivering exceptional user experiences
          </motion.p>
      </motion.div>

        <motion.div
          style={{ opacity, y, scale }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-8"
          >
          {workExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
                index={index}
                isInView={isInView}
            />
          ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");