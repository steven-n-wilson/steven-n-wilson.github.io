import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Hero.css';

const navLinkClass =
  "nav-underline text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200";

const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 relative"
  >
    {/* Interactive Logo */}
    <motion.div
      className="mb-6 cursor-pointer w-[160px] h-[160px] overflow-visible flex items-center justify-center"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Logo size={140} />
    </motion.div>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center">Steven Wilson</h1>
    <p className="text-lg md:text-xl text-gray-600 mb-6 text-center">
      MASc Biomedical Engineering @ uOttawa | BSc Computer Science
    </p>
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-30 flex gap-6 mt-4 px-8 py-3 rounded-full bg-white/70 backdrop-blur-md shadow-lg w-max border border-gray-200">
      <a href="#about" className={navLinkClass}>About</a>
      <a href="#projects" className={navLinkClass}>Projects</a>
      <a href="#skills" className={navLinkClass}>Skills</a>
      <a href="#education" className={navLinkClass}>Education</a>
      <a href="#contact" className={navLinkClass}>Contact</a>
    </nav>
  </motion.section>
);

export default Hero;