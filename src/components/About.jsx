import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    id="about"
    className="py-20 flex flex-col items-center bg-white"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <motion.div
      className="flex items-center justify-center mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-block w-1.5 h-8 rounded bg-[#3b82f6] mr-4"></span>
      <h2 className="text-3xl font-bold text-center">About Me</h2>
    </motion.div>
    <p className="max-w-2xl text-center text-gray-700 text-lg">
      I am currently pursuing a Master's in Biomedical Engineering at uOttawa, with a background in Computer Science. I am passionate about leveraging technology to solve real-world problems in healthcare.<br /><br />
      My research focuses on developing a Flutter-based app to collect IMU and video data for pose estimation in children with mobility impairments.
    </p>
    {/* My interests include medical imaging, data science, and building impactful projects at the intersection of engineering and medicine. */}
  </motion.section>
);

export default About; 