import React, { useState, useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";

const IconHtml = (props) => (<svg viewBox="0 0 128 128" {...props}><path fill="#E34F26" d="M20.4 112.8h87.2L99.3 12.8H28.7z"/><path fill="#F16529" d="M64 105.8V20.1h32.2l-7.4 85.7z"/><path fill="#EBEBEB" d="M64 43.6v-15h20.5l1.5 15zm0 46.5v15.1l20-5.3l1.8-21.6h-21.8v11.8zm0-23.2v-15h23.2l1.5 15z"/><path fill="#FFF" d="m64 43.6-22-1.5v15h22zm0 34.7-22-11.8v11.8l22 5.4zm0-23.1-22-1.5v15h22z"/></svg>);
const IconCss = (props) => (<svg viewBox="0 0 128 128" {...props}><path fill="#1572B6" d="M20.4 112.8h87.2L99.3 12.8H28.7z"/><path fill="#33A9DC" d="M64 105.8V20.1h32.2l-7.4 85.7z"/><path fill="#FFF" d="M80.2 49.5H64v12.2h10.9l-1 11.2-9.9 2.8v12.7l17.2-4.8.2-.1 2-22z"/><path fill="#EBEBEB" d="M47.8 49.5h16.2v12.2H46.8l-1 11.2h18.2v-12.2H52.7l.4-4.8h10.9V37.3H35.6l.3 4.8.8 9.4z"/></svg>);
const IconJavascript = (props) => (<svg viewBox="0 0 128 128" {...props}><path fill="#F7DF1E" d="M0 0h128v128H0z"/><path d="M110.3 93.8c-2.4-5.3-7.5-8.8-15.6-12.3-7.8-3.4-12.8-6.1-12.8-10.7 0-4.1 3.3-7.2 8.8-7.2 5.1 0 8.1 2.4 9.9 6.2l13-7.7c-4.4-9.3-13-14.8-23.6-14.8-12.8 0-21.4 7.8-21.4 18.3 0 12.7 10.8 16.8 19.9 20.8 9.3 4.1 12.7 6.5 12.7 10.3 0 5-4.2 8.2-10.3 8.2-7.2 0-11.7-3.6-13.8-8l-13.3 7.6c4.6 10.4 14.6 16.5 27.6 16.5 15.3 0 24-9.2 24-19.5.1-11-7-17-15.9-21zM42.2 98.4c-8.8 0-14.4-5-14.4-11.7 0-6.7 5.6-11.7 14.4-11.7s14.4 5 14.4 11.7c0 6.7-5.6 11.7-14.4-11.7zm0-28.9c-8.3 0-15.2 6.8-15.2 17.2 0 10.5 6.8 17.2 15.2 17.2s15.2-6.8 15.2-17.2c.1-10.4-6.8-17.2-15.2-17.2z"/></svg>);
const IconReactjs = (props) => (<svg viewBox="-11.5 -10.23174 23 20.46348" {...props}><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>);
const IconRedux = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#764ABC" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.178 12.316l-4.25 2.5a.6.6 0 01-.895-.52V7.704a.6.6 0 01.895-.52l4.25 2.5a.6.6 0 010 1.04zm-6.356 0l-4.25 2.5a.6.6 0 01-.895-.52V7.704a.6.6 0 01.895-.52l4.25 2.5a.6.6 0 010 1.04z"/></svg>);
const IconTailwind = (props) => (<svg viewBox="0 0 32 32" {...props}><path fill="#38BDF8" d="M16 4.25c-6.479 0-11.75 5.271-11.75 11.75S9.521 27.75 16 27.75 27.75 22.479 27.75 16 22.479 4.25 16 4.25zm0 18A6.25 6.25 0 019.75 16c0-2.933 2.02-5.424 4.781-6.094a.75.75 0 01.895.641.75.75 0 01-.641.895A4.752 4.752 0 0011.25 16a4.75 4.75 0 009.022 2.478.75.75 0 011.373.593A6.246 6.246 0 0116 22.25zm6.25-11.75a6.25 6.25 0 01-11.39-3.728.75.75 0 011.372-.593A4.752 4.752 0 0011.25 10.5a4.75 4.75 0 004.781 4.594.75.75 0 01.641.895.75.75 0 01-.895.641A6.246 6.246 0 019.75 10.5c0-.98.225-1.906.634-2.731a.75.75 0 011.294.758A4.753 4.753 0 0011.25 10.5a4.75 4.75 0 004.75 4.75c2.933 0 5.424-2.02 6.094-4.781a.75.75 0 01.895-.641.75.75 0 01.641.895A6.246 6.246 0 0122.25 10.5z"/></svg>);
const IconNodejs = (props) => (<svg viewBox="0 0 256 256" {...props}><path fill="#68A063" d="M128.15 0L0 73.65v109.3L128.15 256l127.85-73.05V73.65z"/><path fill="#393" d="M127.97 25.13l-92.4 53.05v106.35l92.4 52.88l92.4-52.88V78.18z"/><path fill="#8CC84B" d="M127.97 32.53v201.2l84.5-48.5V81.18z"/><path fill="#FFF" d="M117.37 167.33l-45-79.65h24.8l20.1 38.33l19.55-38.33h25.25l-44.8 79.65z"/></svg>);
const IconGit = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#F05033" d="M22.5 10.85a1.2 1.2 0 0 0-1.2-1.2h-3.47a1.2 1.2 0 0 0-1.2 1.2v1.44a1.2 1.2 0 0 0 1.2 1.2h2.27v1.13h-2.27a1.2 1.2 0 0 0-1.2 1.2v1.44a1.2 1.2 0 0 0 1.2 1.2h3.47a1.2 1.2 0 0 0 1.2-1.2v-1.44a1.2 1.2 0 0 0-1.2-1.2h-2.27v-1.13h2.27a1.2 1.2 0 0 0 1.2-1.2V10.85zM13.15 17.15a3.37 3.37 0 1 1-4.78-4.76 3.38 3.38 0 0 1 4.78 4.76zM7.14 8a1.14 1.14 0 0 0-.81.33 1.14 1.14 0 0 0-.33.81v6.86a1.16 1.16 0 0 0 1.14 1.14h3.18a3.35 3.35 0 0 1-1.28-2.61V9.75a3.36 3.36 0 0 1 1.28-2.62H8a1.14 1.14 0 0 0-.81-.33zm-.81 12.8a1.5 1.5 0 0 1-1.07-.44l-3.35-3.34a1.5 1.5 0 0 1 0-2.12l3.35-3.34a1.5 1.5 0 0 1 1.07-.44h.71a3.42 3.42 0 0 1 2.39.95 3.41 3.41 0 0 1 1 2.45v5.61a3.42 3.42 0 0 1-1 2.46 3.4 3.4 0 0 1-2.42.95z"/></svg>);
const IconPython = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#3776AB" d="M20.2 7.8V2.6H8.9v5.2H3.8V21.4h5.1v-5.2h11.3V7.8zM8.9 2.6c0-.7.5-1.2 1.2-1.2h2.5c.7 0 1.3.5 1.3 1.2v2.6h-5V2.6zm6.4 18.8c0 .7-.6 1.2-1.3 1.2h-2.5c-.7 0-1.2-.5-1.2-1.2v-2.6h5v2.6z"/><circle fill="#FFD43B" cx="7.6" cy="17.7" r="1.3"/><circle fill="#FFD43B" cx="16.4" cy="6.3" r="1.3"/></svg>);
const IconJava = (props) => (<svg viewBox="0 0 256 256" {...props}><path fill="#5382a1" d="M228.02 67.98a4.34 4.34 0 00-4.34-4.34H192v-8.67a4.34 4.34 0 00-4.34-4.34h-17.33a4.34 4.34 0 00-4.34 4.34V55h-43.33V42.33a4.34 4.34 0 00-4.34-4.34h-17.33a4.34 4.34 0 00-4.34 4.34v29.34a4.34 4.34 0 004.34 4.34H140a4.34 4.34 0 004.34-4.34v-8.67h26v8.67a4.34 4.34 0 004.34 4.34h26a4.34 4.34 0 004.34-4.34v-8.67h8.67a4.34 4.34 0 000-8.66zm-56.34-8.67a4.34 4.34 0 00-4.34-4.34H88.33a4.34 4.34 0 00-4.34 4.34v43.34h8.67v-34.67a4.34 4.34 0 014.34-4.34h17.33a4.34 4.34 0 014.34 4.34v34.67h43.33v-34.67a4.34 4.34 0 00-4.34-4.34h-17.33a4.34 4.34 0 00-4.34 4.34V90H97.33v8.67a4.34 4.34 0 004.34 4.34h43.33a4.34 4.34 0 004.34-4.34v-8.67h26v8.67a4.34 4.34 0 004.34 4.34h17.33a4.34 4.34 0 004.34-4.34v-8.67h-8.67a4.34 4.34 0 100 8.67h17.34a4.34 4.34 0 004.34-4.34V76.33a4.34 4.34 0 00-4.34-4.34z"/><path fill="#f89820" d="M219.34 163a4.34 4.34 0 00-4.34 4.34v26a4.34 4.34 0 004.34 4.34h8.67v-8.67a4.34 4.34 0 10-8.67 0v17.34h-8.67a4.34 4.34 0 00-4.34 4.34v17.33a4.34 4.34 0 004.34 4.34h43.33v-8.67h-34.66v-17.33a4.34 4.34 0 00-4.34-4.34h-4.34v-34.67a4.34 4.34 0 00-4.34-4.34h-17.33a4.34 4.34 0 00-4.34 4.34v8.67H97.33a4.34 4.34 0 00-4.34 4.34v43.33h-8.67a4.34 4.34 0 00-4.34-4.34H36.66a4.34 4.34 0 00-4.34 4.34v17.33a4.34 4.34 0 004.34 4.34h43.34v-8.67H45.33V189h26v26H45.33v8.67h-8.67a4.34 4.34 0 00-4.34-4.34H15a4.34 4.34 0 00-4.34 4.34v17.33a4.34 4.34 0 004.34 4.34h17.33a4.34 4.34 0 004.34-4.34V224h17.33a4.34 4.34 0 004.34-4.34v-17.33h8.67v17.33a4.34 4.34 0 004.34 4.34h43.33a4.34 4.34 0 004.34-4.34v-17.33h-8.67v17.33h-26v-26h26v-17.33h8.67a4.34 4.34 0 004.34-4.34v-26a4.34 4.34 0 00-4.34-4.34h-17.33a4.34 4.34 0 00-4.34 4.34v8.67h-26v-8.67a4.34 4.34 0 00-4.34-4.34h-17.33a4.34 4.34 0 00-4.34 4.34v8.67H75.33a4.34 4.34 0 00-4.34-4.34h-4.34a4.34 4.34 0 00-4.34 4.34v17.33H35a4.34 4.34 0 100 8.67H62v-17.33a4.34 4.34 0 014.34-4.34h4.34a4.34 4.34 0 014.34 4.34v34.67h17.33a4.34 4.34 0 004.34-4.34v-8.67h26v8.67a4.34 4.34 0 004.34 4.34h17.33a4.34 4.34 0 004.34-4.34v-26a4.34 4.34 0 00-4.34-4.34z"/></svg>);
const IconBootstrap = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#7952B3" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4.5 13.5h-3.25V18h-2.5V6h5.75c1.657 0 3 1.343 3 3s-1.343 3-3 3v.5c1.657 0 3 1.343 3 3s-1.343 3-3 3zm-3.25-5H15c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25h-1.75v2.5zM15 14h-1.75V11.5h1.75c.69 0 1.25-.56 1.25-1.25s-.56 1.25-1.25 1.25z"/></svg>);
const IconNextjs = (props) => (<svg viewBox="0 0 128 128" {...props}><path d="M64 0a64 64 0 100 128A64 64 0 0064 0z"/><path fill="#fff" d="M95.73 103.2V35.8h-11.1v60.1h-1.2l-30-48.4v-7.3h10.3v-5.4h-24v5.4h11.1v67.4h11.1v-60h1.2l30.1 48.3v7.4h-10.4v5.4h24v-5.4z"/></svg>);
const IconMysql = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#4479A1" d="M13 14V3.125a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V14h-1V6.125a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V14H7V8.125a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V14H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H5v3.875a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V16h1v5.875a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V16h1v3.875a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V16h2.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"/><path fill="#E48E00" d="M16 3h5.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H16zm3.5 5.5l-3 4h3.5l-3 4h2l4-6l-4-6h-2z"/></svg>);
const IconSqlite = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#003B57" d="M4 3h16v3.75L4 12V3zm0 18h16V12L4 12v9z"/><path fill="#FFFFFF" d="M5.5 4.5h13v1.5h-13zM5.5 18h13v1.5h-13z"/></svg>);
const IconVercel = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 1.36l12 21.28H0z"/></svg>);
const IconNetlify = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#00C7B7" d="M2 2h20v20H2z"/><path fill="#FFF" d="M7.6 17.5h2.5V9.4L7.6 12v5.5zm8.9-8.1L14 12v5.5h2.5V9.4zM10.1 12l2-3.1 1.9 3.1-1.9 3.2-2-3.2z"/></svg>);
const IconFirebase = (props) => (<svg viewBox="0 0 24 24" {...props}><path fill="#FFCA28" d="M4.33 20.33l7.07-17.5a.5.5 0 01.93 0l7.07 17.5a.5.5 0 01-.63.63l-7.2-2.88-7.2 2.88a.5.5 0 01-.63-.63z"/><path fill="#FFA000" d="M11.8 5.71L4.73 23.21a.5.5 0 00.63.63l6.44-2.58z"/><path fill="#F57C00" d="M20.27 19.73L12.2 4.23 4.96 20.96l7.2-2.88z"/></svg>);

const technologies = {
  "Programming Languages": [ { name: "Python", icon: IconPython }, { name: "JavaScript", icon: IconJavascript }, { name: "Java", icon: IconJava }, ],
  "Front End": [ { name: "React JS", icon: IconReactjs }, { name: "Redux", icon: IconRedux }, { name: "HTML 5", icon: IconHtml }, { name: "CSS 3", icon: IconCss }, { name: "Tailwind CSS", icon: IconTailwind }, { name: "Bootstrap", icon: IconBootstrap }, ],
  "Backend": [ { name: "Next.js", icon: IconNextjs }, { name: "Node JS", icon: IconNodejs }, { name: "Firebase", icon: IconFirebase }, ],
  "Databases": [ { name: "MySQL", icon: IconMysql }, { name: "SQLite", icon: IconSqlite }, ],
  "Developer Tools": [ { name: "Git", icon: IconGit }, { name: "Vercel", icon: IconVercel }, { name: "Netlify", icon: IconNetlify }, ],
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut", }, }),
  exit: { y: -20, opacity: 0, transition: { duration: 0.3, ease: "easeIn", }, },
};

const Tooltip = ({ name }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.2 }}
    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black-200 rounded-md text-white text-sm whitespace-nowrap shadow-lg"
  >
    {name}
  </motion.div>
);

const TechIcon = ({ icon: Icon, name, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      key={name}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); setIsHovered(false); }}
      onMouseEnter={() => setIsHovered(true)}
      className="relative w-24 h-24 p-2 cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d", }}
        className="w-full h-full bg-tertiary rounded-2xl flex justify-center items-center shadow-2xl"
      >
        <Icon className="w-16 h-16 object-contain" style={{ transform: "translateZ(20px)" }}/>
      </div>
      <AnimatePresence>
        {isHovered && <Tooltip name={name} />}
      </AnimatePresence>
    </motion.div>
  );
};

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Object.keys(technologies)];

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === "All") {
      return Object.values(technologies).flat();
    }
    return technologies[activeCategory] || [];
  }, [activeCategory]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Technical Arsenal
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="mt-12 flex justify-center items-center gap-2 md:gap-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 transform hover:scale-105 ${activeCategory === category ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg' : 'bg-tertiary text-secondary'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        style={{ perspective: "1000px" }}
        className='mt-10 flex flex-row flex-wrap justify-center gap-8'
      >
        <AnimatePresence mode="wait">
          {filteredTechnologies.map((technology, index) => (
            <TechIcon key={technology.name} index={index} {...technology} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");