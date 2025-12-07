import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { FaPython, FaReact } from "react-icons/fa";
import { FiGitMerge } from "react-icons/fi";

const TechVisual = () => {
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const nodes = [ { cx: 150, cy: 50 }, { cx: 250, cy: 100 }, { cx: 200, cy: 180 }, { cx: 80, cy: 250 }, { cx: 320, cy: 250 }, { cx: 150, cy: 350 }, ];
  const connections = [ [0, 1], [0, 2], [1, 2], [1, 4], [2, 3], [2, 4], [3, 5], [4, 5] ];

  return (
    <motion.svg viewBox="0 0 400 400" className="w-full h-full" initial="initial" animate="animate" variants={containerVariants}>
      <defs>
        <radialGradient id="node-gradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#915EFF" />
          <stop offset="100%" stopColor="#5a29b0" />
        </radialGradient>
      </defs>
      
      {connections.map(([start, end], i) => (
        <motion.path
          key={`line-${i}`}
          d={`M ${nodes[start].cx} ${nodes[start].cy} L ${nodes[end].cx} ${nodes[end].cy}`}
          stroke="#aaa6c3"
          strokeOpacity="0.3"
          strokeWidth="1"
          variants={{ initial: { pathLength: 0 }, animate: { pathLength: 1, transition: { duration: 1.5, delay: i * 0.1 } } }}
        />
      ))}

      {nodes.map((node, i) => (
        <motion.g key={`node-group-${i}`}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="8"
            fill="url(#node-gradient)"
            variants={{ initial: { scale: 0 }, animate: { scale: 1, transition: { duration: 0.5, delay: i * 0.1 } } }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="8"
            fill="transparent"
            stroke="#915EFF"
            strokeWidth="2"
            variants={{ 
              initial: { scale: 1, opacity: 0 }, 
              animate: { 
                scale: [1, 2.5, 1], 
                opacity: [0, 0.5, 0],
                transition: { duration: 3, repeat: Infinity, delay: i * 0.3 }
              } 
            }}
          />
        </motion.g>
      ))}
    </motion.svg>
  );
};

const strengths = [
  {
    title: "Front-End Development",
    icon: FaReact,
    description: "Expertise in creating dynamic UIs with a focus on UI/UX design principles. Proficient in React.js, Tailwind CSS, and advanced state management with Redux."
  },
  {
    title: "Python & Logic",
    icon: FaPython,
    description: "Strong foundation in Python and core programming concepts like OOP and Data Structures for effective problem-solving."
  },
  {
    title: "API & Functionality",
    icon: FiGitMerge,
    description: "Proven ability in integrating RESTful APIs and Firebase Authentication. Experienced in implementing robust client-side validation for seamless functionality."
  }
];

const StrengthCard = ({ index, title, icon: Icon, description }) => (
  <motion.div 
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="w-full md:w-[30%] bg-tertiary p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
  >
    <div className="text-5xl text-[#915EFF] mb-4">
      <Icon />
    </div>
    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
    <p className="text-secondary text-sm">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <p className='text-secondary text-[17px] max-w-2xl leading-[30px]'>
            As a Software Engineer at ThinkCrypt, I specialize in building scalable, production-ready web applications that serve 10,000+ daily active users. My expertise lies in modern frontend development using Next.js 14+, React 18+, and TypeScript to create high-performance, responsive applications. I've engineered full-scale platforms including Shohoz (Bangladesh's largest travel booking platform), multiple e-commerce solutions, and data-driven dashboards. By developing 20+ reusable UI components with Shadcn UI and implementing optimized data layers with RTK Query, I've reduced development time by 40% while improving user engagement by 25% and page load times by 30%. I'm passionate about writing clean, maintainable code, implementing secure authentication systems, and collaborating in Agile teams to deliver exceptional user experiences.
          </p>
          <a href='/kaosar-ahmed-cv.pdf' download>
            <button className="mt-8 bg-tertiary hover:bg-[#1d1836] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-colors duration-300">
              Download CV
            </button>
          </a>
        </motion.div>
        
        <motion.div variants={fadeIn("", "", 0.2, 1)} className="w-full h-[300px] md:h-full">
          <TechVisual />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {strengths.map((strength, index) => (
          <StrengthCard key={strength.title} index={index} {...strength} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");