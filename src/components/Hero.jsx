// src/components/Hero.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import HeroAnimation from "./HeroAnimation";
import ComputersCanvas from "./canvas/Computers";
import ErrorBoundary from "./ErrorBoundary";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex flex-col text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            variants={itemVariants}
          >
            I'm <span className="text-[#915EFF]">Kaosar Ahmed</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg lg:text-xl text-gray-300"
            variants={itemVariants}
          >
            A&nbsp;
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Front-End Developer",
                2000,
                "React.js Specialist",
                2000,
                "Creative Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#00f5ff] font-semibold"
            />
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            variants={itemVariants}
          >
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#00f5ff] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#915EFF]/40 text-center"
            >
              View My Work
            </a>

            <div className="flex flex-row gap-5">
              <a
                href="https://github.com/SiamAhmed32"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={28} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a href="mailto:siamahmedgotthis@gmail.com" aria-label="Email">
                <FaEnvelope size={28} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://wa.me/8801813494196"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} className="text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full h-full hidden lg:flex justify-center items-center">
          <ErrorBoundary fallback={<HeroAnimation />}>
            <ComputersCanvas />
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default Hero;