import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  const hasIcon = experience.icon !== null && experience.icon !== undefined;
  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, rgba(29, 24, 54, 0.95) 0%, rgba(30, 27, 50, 0.95) 100%)",
        color: "#fff",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(99, 102, 241, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(99, 102, 241, 0.3)" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 30px rgba(99, 102, 241, 0.6), inset 0 0 20px rgba(99, 102, 241, 0.2)",
        border: "2px solid rgba(99, 102, 241, 0.5)",
      }}
      icon={
        hasIcon ? (
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        ) : (
          <motion.div
            className='flex justify-center items-center w-full h-full'
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className='relative'>
              <motion.h3 
                className='text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-2 text-center'
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.1em",
                  fontWeight: "800",
                }}
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {experience.company_name}
              </motion.h3>
              <motion.div
                className='absolute inset-0 -z-10'
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  filter: "blur(12px)",
                  borderRadius: "50%",
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className='text-white text-[24px] font-bold mb-2'>{experience.title}</h3>
        <motion.p
          className='text-[#a78bfa] text-[16px] font-semibold mb-4'
          style={{ margin: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {experience.company_name}
        </motion.p>
      </motion.div>

      <motion.ul 
        className='mt-5 list-disc ml-5 space-y-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className='text-[#e0e7ff] text-[14px] pl-1 tracking-wider leading-relaxed'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ x: 5, color: "#fff" }}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;