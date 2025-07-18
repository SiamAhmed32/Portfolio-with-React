import React from "react";
import { FaGithub, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full px-6 py-8 bg-primary border-t border-black-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-secondary text-sm">
        
        <div className="text-center md:text-left">
          <p>&copy; {currentYear} Kaosar Ahmed. All Rights Reserved.</p>
        </div>

        <div className="flex flex-row gap-6">
          <a href="https://github.com/SiamAhmed32" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} className="hover:text-white transition-colors duration-300" />
          </a>
          <a href="mailto:siamahmedgotthis@gmail.com" aria-label="Email">
            <FaEnvelope size={24} className="hover:text-white transition-colors duration-300" />
          </a>
          <a href="https://wa.me/8801813494196" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp size={24} className="hover:text-white transition-colors duration-300" />
          </a>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            aria-label="Scroll to top"
          >
            Back to Top
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;