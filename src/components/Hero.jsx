import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import './Hero.css';

const navLinkClass =
  "nav-underline text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center px-4">Steven Wilson</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6 text-center px-4">
        MASc Biomedical Engineering @ uOttawa | BSc Computer Science
      </p>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-30 gap-6 mt-4 px-8 py-3 rounded-full bg-white/70 backdrop-blur-md shadow-lg w-max border border-gray-200">
        <a href="#about" className={navLinkClass}>About</a>
        <a href="#projects" className={navLinkClass}>Projects</a>
        <a href="#skills" className={navLinkClass}>Skills</a>
        <a href="#education" className={navLinkClass}>Education</a>
        <a href="#contact" className={navLinkClass}>Contact</a>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-40 p-2 rounded-lg bg-white/70 backdrop-blur-md shadow-lg border border-gray-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-20 right-6 z-30 flex flex-col gap-4 p-4 rounded-lg bg-white/90 backdrop-blur-md shadow-lg border border-gray-200"
          >
            <a
              href="#about"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#education"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#contact"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Hero;