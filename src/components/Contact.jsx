import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import { styles } from "@/styles";
import { EarthCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";

const AnimatedText = ({ text, el: Wrapper = "p", className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="overflow-hidden"
    >
      <Wrapper className={className}>
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={childVariants} style={{ display: 'inline-block' }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Wrapper>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kaosar Ahmed",
          from_email: form.email,
          to_email: "siamahmedgotthis@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      }, (error) => {
        setLoading(false);
        console.error(error);
        toast.error("Ahh, something went wrong. Please try again.");
      });
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='relative xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
          <div className="text-center">
            <AnimatedText text="Get in touch" el="p" className={styles.sectionSubText} />
            <AnimatedText text="Contact." el="h3" className={styles.sectionHeadText} />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <Toaster position="bottom-center" />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8'
        >
          <div className="relative">
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              required
              className='peer block w-full bg-tertiary py-4 px-6 text-white rounded-lg border-none outline-none font-medium contact-input'
            />
            <label className='absolute pointer-events-none left-6 top-4 text-secondary duration-300 transform origin-[0] transition-all peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#915EFF] peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:scale-75'>
              Your Name
            </label>
          </div>
          
          <div className="relative">
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              required
              className='peer block w-full bg-tertiary py-4 px-6 text-white rounded-lg border-none outline-none font-medium contact-input'
            />
             <label className='absolute pointer-events-none left-6 top-4 text-secondary duration-300 transform origin-[0] transition-all peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#915EFF] peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:scale-75'>
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder=' '
              required
              className='peer block w-full bg-tertiary py-4 px-6 text-white rounded-lg border-none outline-none font-medium resize-none contact-input'
            />
            <label className='absolute pointer-events-none left-6 top-4 text-secondary duration-300 transform origin-[0] transition-all peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-[#915EFF] peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:scale-75'>
              Your Message
            </label>
          </div>

          <div className="flex justify-between items-center">
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#1d1836] transition-colors duration-300'
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <div className="flex flex-row gap-5">
              <a href="mailto:siamahmedgotthis@gmail.com" aria-label="Email" className="text-secondary hover:text-white transition-colors duration-300">
                <FaEnvelope size={24} />
              </a>
              <a href="https://github.com/SiamAhmed32" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-white transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://wa.me/8801813494196" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-secondary hover:text-white transition-colors duration-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");