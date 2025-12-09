import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "@/styles";
import { github, live } from "@/assets";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: "-50px" }}
      className="w-full sm:w-[360px] mb-6"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={450}
        tiltEnable={true}
        glareEnable={false}
        className='bg-tertiary p-5 rounded-2xl h-full flex flex-col w-full'
      >
        <div className='relative w-full h-[230px] flex-shrink-0 bg-gray-800 rounded-2xl overflow-hidden'>
          {image ? (
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl'
              onError={(e) => {
                console.error(`Failed to load image for ${name}:`, image);
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-white text-sm' style={{ display: image ? 'none' : 'flex' }}>
            {name}
          </div>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={live}
                  alt='live demo'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex-grow flex flex-col'>
          <h3 className='text-white font-bold text-[24px] mb-2'>{name}</h3>
          <p className='text-secondary text-[14px] leading-relaxed flex-grow'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Debug: Log projects count
  console.log('Total projects:', projects.length);
  console.log('Projects:', projects.map(p => p.name));

  return (
    <>
      <motion.div 
        variants={textVariant()} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="px-4 sm:px-0"
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className='mt-3 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px] px-4 sm:px-0'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-4 sm:gap-7 justify-center px-4 sm:px-0 w-full overflow-visible'>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => {
            if (!project || !project.image) {
              console.warn(`Project ${index} is missing data:`, project);
              return null;
            }
            return (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            );
          })
        ) : (
          <p className='text-white px-4'>No projects found</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");