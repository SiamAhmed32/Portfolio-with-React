import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.3,
      delay: 0.2,
      duration: 0.8,
    },
  },
};

const gearVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const reverseGearVariants = {
  animate: {
    rotate: -360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const floatVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const codeBlinkVariants = {
  animate: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const TechEngineAnimation = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="max-w-md max-h-md"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#16213e" />
          </linearGradient>
          
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f0f23" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Computer Monitor */}
        <motion.g variants={floatVariants}>
          {/* Monitor Base */}
          <rect x="120" y="280" width="160" height="8" rx="4" fill="#16213e" opacity="0.8"/>
          <rect x="180" y="270" width="40" height="18" rx="2" fill="#16213e"/>
          
          {/* Monitor Frame */}
          <rect x="80" y="120" width="240" height="160" rx="12" fill="url(#monitorGrad)" stroke="#915EFF" strokeWidth="2"/>
          
          {/* Screen */}
          <rect x="95" y="135" width="210" height="130" rx="6" fill="url(#screenGrad)"/>
          
          {/* Code Editor Interface */}
          <rect x="100" y="140" width="200" height="20" rx="2" fill="#1a1a2e"/>
          <circle cx="110" cy="150" r="3" fill="#ff5f56"/>
          <circle cx="125" cy="150" r="3" fill="#ffbd2e"/>
          <circle cx="140" cy="150" r="3" fill="#27ca3f"/>
          
          {/* Code Lines */}
          <motion.g variants={codeBlinkVariants}>
            <rect x="110" y="175" width="80" height="3" fill="#00f5ff" opacity="0.8"/>
            <rect x="110" y="185" width="120" height="3" fill="#915EFF" opacity="0.6"/>
            <rect x="110" y="195" width="90" height="3" fill="#00f5ff" opacity="0.8"/>
            <rect x="110" y="205" width="110" height="3" fill="#915EFF" opacity="0.6"/>
            <rect x="110" y="215" width="100" height="3" fill="#00f5ff" opacity="0.8"/>
            <rect x="110" y="225" width="85" height="3" fill="#915EFF" opacity="0.6"/>
            <rect x="110" y="235" width="95" height="3" fill="#00f5ff" opacity="0.8"/>
          </motion.g>
          
          {/* Cursor Blink */}
          <motion.rect
            x="205"
            y="235"
            width="2"
            height="8"
            fill="#00f5ff"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* Large Gear - Top Right */}
        <motion.g variants={gearVariants}>
          <g transform="translate(320, 80)">
            <circle cx="0" cy="0" r="35" fill="#1a1a2e" stroke="#915EFF" strokeWidth="3"/>
            <circle cx="0" cy="0" r="20" fill="#915EFF" opacity="0.2"/>
            <circle cx="0" cy="0" r="8" fill="#915EFF"/>
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
              <rect
                key={i}
                x="-3"
                y="-40"
                width="6"
                height="12"
                fill="#915EFF"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        </motion.g>

        {/* Medium Gear - Top Left */}
        <motion.g variants={reverseGearVariants}>
          <g transform="translate(70, 90)">
            <circle cx="0" cy="0" r="25" fill="#1a1a2e" stroke="#00f5ff" strokeWidth="2"/>
            <circle cx="0" cy="0" r="15" fill="#00f5ff" opacity="0.2"/>
            <circle cx="0" cy="0" r="6" fill="#00f5ff"/>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="-2"
                y="-30"
                width="4"
                height="10"
                fill="#00f5ff"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        </motion.g>

        {/* Small Gear - Bottom Right */}
        <motion.g variants={gearVariants}>
          <g transform="translate(340, 320)">
            <circle cx="0" cy="0" r="18" fill="#1a1a2e" stroke="#915EFF" strokeWidth="2"/>
            <circle cx="0" cy="0" r="10" fill="#915EFF" opacity="0.2"/>
            <circle cx="0" cy="0" r="4" fill="#915EFF"/>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <rect
                key={i}
                x="-1.5"
                y="-22"
                width="3"
                height="8"
                fill="#915EFF"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        </motion.g>

        {/* CPU/Chip Element */}
        <motion.g variants={pulseVariants}>
          <g transform="translate(60, 280)">
            <rect x="0" y="0" width="60" height="60" rx="6" fill="#1a1a2e" stroke="#00f5ff" strokeWidth="2"/>
            <rect x="10" y="10" width="40" height="40" rx="3" fill="#00f5ff" opacity="0.1"/>
            
            {/* CPU Pins */}
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x="-5" y={10 + i * 10} width="10" height="2" fill="#00f5ff"/>
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x="55" y={10 + i * 10} width="10" height="2" fill="#00f5ff"/>
            ))}
            
            {/* Internal Grid */}
            <motion.g
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <rect x="20" y="20" width="20" height="2" fill="#915EFF"/>
              <rect x="20" y="30" width="20" height="2" fill="#915EFF"/>
              <rect x="20" y="40" width="20" height="2" fill="#915EFF"/>
            </motion.g>
          </g>
        </motion.g>

        {/* Connecting Lines/Circuits */}
        <motion.path
          d="M 120 110 Q 150 90 180 110"
          stroke="#915EFF"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M 300 120 Q 330 100 360 120"
          stroke="#00f5ff"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Code Symbols */}
        <motion.text
          x="50"
          y="200"
          fill="#915EFF"
          fontSize="16"
          fontFamily="monospace"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"</>"}
        </motion.text>
        
        <motion.text
          x="350"
          y="250"
          fill="#00f5ff"
          fontSize="12"
          fontFamily="monospace"
          animate={{
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          {"{ }"}
        </motion.text>

        {/* Data Flow Particles */}
        <motion.circle
          cx="200"
          cy="100"
          r="3"
          fill="#915EFF"
          animate={{
            x: [0, 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.circle
          cx="150"
          cy="350"
          r="2"
          fill="#00f5ff"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Network/WiFi Indicator */}
        <motion.g transform="translate(30, 50)">
          <motion.path
            d="M 0 20 Q 10 10 20 20"
            stroke="#915EFF"
            strokeWidth="2"
            fill="none"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M -5 25 Q 10 5 25 25"
            stroke="#915EFF"
            strokeWidth="2"
            fill="none"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.path
            d="M -10 30 Q 10 0 30 30"
            stroke="#915EFF"
            strokeWidth="2"
            fill="none"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default TechEngineAnimation;