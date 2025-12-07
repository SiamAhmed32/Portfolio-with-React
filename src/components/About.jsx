import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { FaPython, FaReact, FaCode, FaRocket, FaLightbulb, FaChartLine } from "react-icons/fa";
import { FiGitMerge } from "react-icons/fi";
import { Code2, Zap, Target, TrendingUp } from "lucide-react";

// Animated Code Snippet Component
const AnimatedCode = () => {
  const codeLines = [
    { text: "const developer = {", delay: 0 },
    { text: "  name: 'Kaosar Ahmed',", delay: 0.2 },
    { text: "  role: 'Front-End Developer',", delay: 0.4 },
    { text: "  skills: [", delay: 0.6 },
    { text: "    'React.js',", delay: 0.8 },
    { text: "    'TypeScript',", delay: 1.0 },
    { text: "    'Next.js'", delay: 1.2 },
    { text: "  ],", delay: 1.4 },
    { text: "  passion: 'Building amazing UIs'", delay: 1.6 },
    { text: "};", delay: 1.8 },
  ];

  return (
    <div className="relative bg-[#0d1117] rounded-xl p-6 border border-purple-500/20 overflow-hidden">
      <div className="absolute top-3 left-3 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="mt-8 font-mono text-sm">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.3 }}
            className="text-gray-300 mb-1"
          >
            <span className="text-purple-400">{i < 3 ? '  ' : ''}</span>
            <span className={i === 0 || i === 3 || i === 8 ? 'text-blue-400' : i === 9 ? '' : 'text-green-400'}>
              {line.text}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </div>
  );
};

// Interactive Stat Card
const StatCard = ({ icon: Icon, value, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const spring = useSpring(count, { duration: 2000 });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="bg-gradient-to-br from-[#1d1836] to-[#151030] p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform">
          <Icon className="text-2xl text-purple-400" />
        </div>
        <div>
          <motion.div className="text-3xl font-bold text-white">
            {rounded}
            {label.includes('%') ? '%' : label.includes('+') ? '+' : ''}
          </motion.div>
          <div className="text-sm text-gray-400">{label.replace(/[%+]/g, '')}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Magnetic Card Component
const MagneticCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) / rect.width;
    const distanceY = (e.clientY - centerY) / rect.height;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
      whileHover={{ scale: 1.05, z: 50 }}
    >
      {children}
    </motion.div>
  );
};

const strengths = [
  {
    title: "Front-End Development",
    icon: FaReact,
    description: "Expertise in creating dynamic UIs with a focus on UI/UX design principles. Proficient in React.js, Tailwind CSS, and advanced state management with Redux.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Python & Logic",
    icon: FaPython,
    description: "Strong foundation in Python and core programming concepts like OOP and Data Structures for effective problem-solving.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "API & Functionality",
    icon: FiGitMerge,
    description: "Proven ability in integrating RESTful APIs and Firebase Authentication. Experienced in implementing robust client-side validation for seamless functionality.",
    color: "from-pink-500 to-orange-500"
  }
];

const StrengthCard = ({ index, title, icon: Icon, description, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <MagneticCard className="w-full md:w-[30%]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        className="relative h-full bg-gradient-to-br from-[#1d1836] to-[#151030] p-8 rounded-2xl border border-purple-500/20 backdrop-blur-xl shadow-2xl overflow-hidden group"
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="text-5xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text" />
          </motion.div>
          <h3 className="text-white text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </MagneticCard>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Animated Background */}
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

      <div className="relative z-10">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent`}>
            Overview.
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Story & Code */}
          <div className="space-y-6">
            <motion.div
              variants={fadeIn("right", "spring", 0.1, 0.75)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="bg-gradient-to-br from-[#1d1836] to-[#151030] p-8 rounded-2xl border border-purple-500/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-2xl text-yellow-400" />
                <h3 className="text-xl font-bold text-white">My Journey</h3>
              </div>
              <p className='text-gray-300 text-[16px] leading-[28px]'>
                With a strong foundation in Python-driven logic and problem-solving, I discovered my passion for creating tangible, interactive experiences on the web. This journey led me to specialize as a Front-End Developer, where I now leverage my expertise in JavaScript, React.js, and Tailwind CSS to build high-performance, responsive web applications.
              </p>
              <a href='/kaosar-ahmed-cv.pdf' download>
                <motion.button
                  className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 px-8 rounded-xl text-white font-bold shadow-lg shadow-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.button>
              </a>
            </motion.div>

            {/* Animated Code */}
            <motion.div
              variants={fadeIn("right", "spring", 0.3, 0.75)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <AnimatedCode />
            </motion.div>
          </div>

          {/* Right: Stats Grid */}
          <div className="space-y-6">
            <motion.div
              variants={fadeIn("left", "spring", 0.2, 0.75)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid grid-cols-2 gap-4"
            >
              <StatCard icon={FaCode} value={20} label="Components" delay={0.1} />
              <StatCard icon={FaRocket} value={8} label="Projects" delay={0.2} />
              <StatCard icon={TrendingUp} value={10000} label="Users+" delay={0.3} />
              <StatCard icon={Zap} value={30} label="% Faster" delay={0.4} />
            </motion.div>

            <motion.div
              variants={fadeIn("left", "spring", 0.4, 0.75)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="bg-gradient-to-br from-[#1d1836] to-[#151030] p-8 rounded-2xl border border-purple-500/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-2xl text-purple-400" />
                <h3 className="text-xl font-bold text-white">My Focus</h3>
              </div>
              <p className='text-gray-300 text-[16px] leading-[28px]'>
                I am passionate about bridging the gap between complex functionality and exceptional user experience, focusing on writing clean, maintainable code and seamlessly integrating RESTful APIs.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Strength Cards */}
        <div className='mt-16 flex flex-wrap justify-center gap-8'>
          {strengths.map((strength, index) => (
            <StrengthCard key={strength.title} index={index} {...strength} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");