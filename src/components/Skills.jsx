import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Software Development',
    skills: [
      'Flutter/Dart',
      'React',
      'Python',
      'Mobile Development',
      'Version Control',
      'Scrum/Agile'
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      'Neural Networks',
      'Feature Engineering',
      'Ensemble Methods',
      'Biomedical ML',
      'Model Evaluation'
    ],
  },
  {
    title: 'Biomedical Engineering',
    skills: [
      'Signal Processing',
      'Motion Analysis',
      'EMG Analysis',
      'Biomedical Sensors',
      'Research Methods'
    ],
  }
];

const languages = [
  { name: 'English', level: 'Native' },
  { name: 'French', level: 'Intermediate' },
  { name: 'Spanish', level: 'Native' }
];

const Skills = () => (
  <motion.section
    id="skills"
    className="py-20 bg-white"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        className="flex items-center justify-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block w-1.5 h-8 rounded bg-[#3b82f6] mr-4"></span>
        <h2 className="text-3xl font-bold text-center" style={{ color: '#1f2937' }}>Skills</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            className="bg-white/60 backdrop-blur-md border border-white/40 shadow-lg rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
              borderColor: '#3b82f6'
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#1f2937] border-b border-gray-200 pb-2">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 text-gray-700 rounded-full text-sm font-medium border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-12 pt-8 border-t border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-center items-center gap-8">
          <span className="text-gray-500 font-medium">Languages:</span>
          {languages.map((lang, idx) => (
            <span key={idx} className="text-gray-700">
              {lang.name}
              <span className="text-gray-400 ml-1">({lang.level})</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default Skills; 