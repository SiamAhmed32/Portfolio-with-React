import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles";
import { services } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { FaPython, FaReact } from "react-icons/fa";
import { FiGitMerge } from "react-icons/fi";

const TechVisual = () => {
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { 
      opacity: [0, 1, 1, 0], 
      scale: 1,
      transition: { duration: 2, repeat: Infinity, ease: "linear" } 
    },
  };

  const nodes = [
    { cx: 150, cy: 50 }, { cx: 250, cy: 100 }, { cx: 200, cy: 180 },
    { cx: 80, cy: 250 }, { cx: 320, cy: 250 }, { cx: 150, cy: 350 },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 2], [1, 4], [2, 3], [2, 4], [3, 5], [4, 5]
  ];

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

      {connections.map(([start, end], i) => (
        <motion.circle key={`particle-${i}`} r="3" fill="#00f5ff" variants={particleVariants}>
          <animateMotion
            dur={`${(i % 3) + 2}s`}
            repeatCount="indefinite"
            path={`M ${nodes[start].cx} ${nodes[start].cy} L ${nodes[end].cx} ${nodes[end].cy}`}
          />
        </motion.circle>
      ))}
    </motion.svg>
  );
};

const strengths = [
  {
    title: "Front-End Development",
    icon: FaReact,
    description: "Expertise in creating dynamic and responsive user interfaces using modern technologies like React.js, JavaScript, and Tailwind CSS."
  },
  {
    title: "Python & Logic",
    icon: FaPython,
    description: "Strong foundation in Python and core programming concepts like OOP and Data Structures for effective problem-solving."
  },
  {
    title: "API & Functionality",
    icon: FiGitMerge,
    description: "Proven ability in integrating RESTful APIs for seamless functionality, with foundational knowledge of databases like MySQL and SQLite."
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
            With a strong foundation in Python-driven logic and problem-solving, I discovered my passion for creating tangible, interactive experiences on the web. This journey led me to specialize as a Front-End Developer, where I now leverage my expertise in JavaScript, React.js, and Tailwind CSS to build high-performance, responsive web applications. I am passionate about bridging the gap between complex functionality and exceptional user experience, focusing on writing clean, maintainable code and seamlessly integrating RESTful APIs.
          </p>
          <a href='/Kaosar Ahmed.pdf (8).pdf' download>
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