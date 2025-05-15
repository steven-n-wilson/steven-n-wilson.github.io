import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'MASc Biomedical Engineering',
    school: 'University of Ottawa',
    years: '2024 - Present',
    details: 'Research focused on developing mobile-based motion analysis tools for pediatric mobility assessment, combining computer vision, IMU sensors, and machine learning for clinical applications.',
  },
  {
    degree: 'BSc with Honours in Computer Science',
    school: 'University of Ottawa',
    years: '2021 - 2024',
    grade: 'Cum Laude',
    details: 'Focus on software engineering, data science, and machine learning fundamentals.',
    relevantCourses: [
      'Python',
      'Introduction to AI',
      'Android Development',
    ],
  }
];

const accentColor = '#3b82f6';
const textColor = '#1f2937';
const bgColor = '#f3f4f6';

const Education = () => (
  <motion.section
    id="education"
    className="py-20"
    style={{ backgroundColor: bgColor }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-3xl mx-auto px-4">
      <motion.div
        className="flex items-center justify-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block w-1.5 h-8 rounded bg-[#3b82f6] mr-4"></span>
        <h2 className="text-2xl md:text-3xl font-bold text-center" style={{ color: textColor }}>Education</h2>
      </motion.div>
      <div className="space-y-4 md:space-y-6">
        {education.map((edu, idx) => (
          <motion.div 
            key={idx} 
            className="rounded-xl p-4 md:p-6 flex flex-col md:flex-row md:items-start md:justify-between bg-white/60 backdrop-blur-md border border-white/40 shadow-lg"
            style={{ borderLeft: `4px solid ${accentColor}` }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
              borderLeft: `4px solid #10b981`
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold" style={{ color: accentColor }}>{edu.degree}</h3>
              <p className="text-gray-700">{edu.school}</p>
              {edu.grade && (
                <p className="text-emerald-600 font-medium mt-1">
                  Grade: {edu.grade}
                </p>
              )}
              <p className="text-sm md:text-base text-gray-600 mt-2">{edu.details}</p>
              {edu.relevantCourses && (
                <div className="mt-3">
                  <p className="text-gray-700 font-medium mb-2">Relevant Courses:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <span className="font-medium mt-2 md:mt-0 text-right whitespace-nowrap ml-0 md:ml-4" style={{ color: accentColor }}>
              {edu.years}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Education; 