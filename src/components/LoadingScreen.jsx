import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { X } from "lucide-react";

const LoadingScreen = ({ onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    // Auto-complete after 3.5 seconds or when progress reaches 100%
    if (loadingProgress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [loadingProgress, onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${loadingProgress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#050816] via-[#100d25] to-[#050816] overflow-hidden"
        >
          {/* Skip Button */}
          <motion.button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <X className="w-5 h-5 text-white group-hover:text-purple-300" />
          </motion.button>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            {showContent && (
              <>
                {/* Hello Text with Animation */}
                <motion.div variants={textVariants} className="text-center">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                      Hello
                    </span>
                  </h1>
                  
                  {/* Typewriter Effect */}
                  <motion.div
                    variants={textVariants}
                    className="mt-6 text-xl md:text-2xl text-gray-300"
                  >
                    <TypeAnimation
                      sequence={[
                        "Welcome to my Portfolio",
                        1500,
                        "I'm Kaosar Ahmed",
                        1500,
                        "Software Engineer & Developer",
                        1500,
                        "Let's build something amazing",
                        1500,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={0}
                      className="text-center block"
                    />
                  </motion.div>
                </motion.div>

                {/* Loading Progress Bar */}
                <motion.div
                  variants={textVariants}
                  className="w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden shadow-lg"
                >
                  <motion.div
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                  />
                </motion.div>

                {/* Loading Percentage */}
                <motion.p
                  variants={textVariants}
                  className="text-gray-400 text-sm font-semibold"
                >
                  {loadingProgress}%
                </motion.p>
              </>
            )}
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

