import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { FaPython, FaReact } from "react-icons/fa";
import { FiGitMerge } from "react-icons/fi";
import Experience3DCanvas from "./canvas/Experience3D";


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

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <p className='text-gray-300 text-[17px] max-w-2xl leading-[30px]'>
            With a strong foundation in Python-driven logic and problem-solving, I discovered my passion for creating tangible, interactive experiences on the web. This journey led me to specialize as a Front-End Developer, where I now leverage my expertise in JavaScript, React.js, and Tailwind CSS to build high-performance, responsive web applications. I am passionate about bridging the gap between complex functionality and exceptional user experience, focusing on writing clean, maintainable code and seamlessly integrating RESTful APIs.
          </p>
          <a href='/kaosar-ahmed-cv.pdf' download>
            <button className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/50 transition-all duration-300">
              Download CV
            </button>
          </a>
        </motion.div>
        
        {/* 3D Model - Clearly Visible */}
        <motion.div 
          variants={fadeIn("", "", 0.2, 1)} 
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative"
        >
          <div className="absolute inset-0 w-full h-full">
            <Experience3DCanvas modelType="computer" position={[0, 0, 0]} />
          </div>
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