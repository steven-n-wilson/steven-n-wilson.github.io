import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mobile Motion Analysis',
    description: 'A cross-platform research app that leverages smartphone sensors and advanced pose estimation to analyze and assess pediatric movement disorders.',
    tech: ['Flutter (Android/iOS)', 'OpenPose', 'Hive', 'sensors_plus', ],
    image: 'https://i.redd.it/ofraxg1pum1d1.png',
    github: '',
    isResearch: true,
  },
  {
    title: 'Reproducibility & Rigor in mRNA Localization Prediction via Machine Learning',
    description: 'This project reconstructs and preprocesses k-mer feature matrices from raw mRNA sequences, then trains CatBoost, XGBoost, and LightGBM classifiers to replicate and evaluate subcellular localization predictions based on the study by Musleh et al. (2024).',
    tech: [
      'Python',
      'scikit-learn',
      'LightGBM',
      'XGBoost',
      'CatBoost',
      'BioPython',
      'SHAP'
    ],
    image: 'mrna-card.png',
    colab: 'https://colab.research.google.com/drive/1oD_m3qJ-rz2D0Q5fq9tUJXyJRKN5bY_Z?usp=sharing',
    isResearch: false,
  },
  {
    title: 'Melanoma Skin Cancer Detection via Dermoscopic Images',
    description: 'This project proposes the development of an automated diagnostic tool utilizing a Convolutional Neural Network (CNN) to enhance the early detection of melanoma through image analysis.',
    tech: ['Python', 'TensorFlow', 'CNN', 'Image Processing'],
    image: 'melanoma-card.png',
    colab: 'https://colab.research.google.com/drive/1Fm51xvmFatgeusmvvyakeZ_PIjB7hm8K?usp=sharing',
    presentation: 'https://www.canva.com/design/DAGgU5YeCos/DxSzx7bArIYeszDqpjZgZw/edit?utm_content=DAGgU5YeCos&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    paper: '',
  },
  {
    title: 'Recognition of Prokaryotic and Eukaryotic Promoters Using Machine Learning',
    description: 'This project focuses on loading, encoding, and visualizing a promoter dataset, followed by training a linear regression model to analyze and predict key patterns within the data.',
    tech: [
      'Python',
      'scikit-learn',
      'BioPython',
      'TSNE',
      'Logistic Regression'
    ],
    image: 'prokaryotic-card.png',
    colab: 'https://colab.research.google.com/drive/1yfW3riQM7L7gRTf4LxE-99l4e-YCpURf?usp=sharing',
    isResearch: false,
  },
  {
    title: 'Fatigue Detection from EMG Signals: Feature-Based Analysis',
    description: 'This project investigates fatigue detection using electromyography (EMG) signals. The three key EMG features used were RMS, MAV, and MDF, which were recorded during dynamic dumbbell curls.',
    tech: [
      'Arduino',
      'MyoWare EMG Sensors',
      'Signal Processing',
      'Feature Extraction'
    ],
    image: 'emg-card.png',
    colab: 'https://colab.research.google.com/drive/15I4wP8utva32rfZc6A8m01n8uQ3A965U?usp=sharing',
    presentation: '',
    paper: '',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardGray = '#f3f4f6';
const accentColor = '#3b82f6';
const textColor = '#1f2937';

// Helper for Colab icon
const ColabIcon = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/977px-Google_Colaboratory_SVG_Logo.svg.png" 
    alt="Google Colab" 
    className="w-5 h-5 object-contain"
  />
);

const Projects = () => {
  const [showPaper, setShowPaper] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showMrnaPaper, setShowMrnaPaper] = useState(false);
  const [showMrnaOriginalPaper, setShowMrnaOriginalPaper] = useState(false);
  const [showEmgPaper, setShowEmgPaper] = useState(false);
  const [showEmgPresentation, setShowEmgPresentation] = useState(false);

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* Paper Preview Modal */}
      {showPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] max-w-5xl relative"
          >
            <button
              onClick={() => setShowPaper(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="/papers/melanoma-paper.pdf"
              className="w-full h-full rounded-lg"
              title="Paper Preview"
            />
          </motion.div>
        </div>
      )}

      {/* Presentation Preview Modal */}
      {showPresentation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] max-w-5xl relative"
          >
            <button
              onClick={() => setShowPresentation(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="/presentations/melanoma-presentation.pdf"
              className="w-full h-full rounded-lg"
              title="Presentation Preview"
            />
          </motion.div>
        </div>
      )}

      {/* mRNA Paper Preview Modal */}
      {showMrnaPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] max-w-5xl relative"
          >
            <button
              onClick={() => setShowMrnaPaper(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="/papers/mrna-original-paper.pdf"
              className="w-full h-full rounded-lg"
              title="mRNA Paper Preview"
            />
          </motion.div>
        </div>
      )}

      {/* mRNA Original Paper Preview Modal */}
      {showMrnaOriginalPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] max-w-5xl relative"
          >
            <button
              onClick={() => setShowMrnaOriginalPaper(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="/papers/mrna-paper.pdf"
              className="w-full h-full rounded-lg"
              title="mRNA Original Paper Preview"
            />
          </motion.div>
        </div>
      )}

      {/* EMG Paper Preview Modal */}
      {showEmgPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] max-w-5xl relative"
          >
            <button
              onClick={() => setShowEmgPaper(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="/papers/emg-paper.pdf"
              className="w-full h-full rounded-lg"
              title="EMG Paper Preview"
            />
          </motion.div>
        </div>
      )}

      {/* EMG Presentation Preview Modal */}
      {showEmgPresentation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] max-w-5xl relative"
          >
            <button
              onClick={() => setShowEmgPresentation(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="/presentations/emg-presentation.pdf"
              className="w-full h-full rounded-lg"
              title="EMG Presentation Preview"
            />
          </motion.div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block w-1.5 h-8 rounded bg-[#3b82f6] mr-4"></span>
          <h2 className="text-3xl font-bold text-center" style={{ color: textColor }}>Selected Research & Projects</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl p-6 flex flex-col bg-white/60 backdrop-blur-md border border-white/40 shadow-lg relative"
              style={{ 
                backgroundColor: 'transparent',
                borderTop: `4px solid ${accentColor}`,
              }}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.04, 
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
                borderTop: `4px solid ${accentColor}`
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {project.isResearch && (
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-300 shadow-sm z-10">Research</span>
              )}
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-white border border-gray-200">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold" style={{ color: textColor }}>{project.title}</h3>
                {project.github && project.title !== 'Recognition of Prokaryotic and Eukaryotic Promoters Using Machine Learning' && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 group relative"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">View on GitHub</span>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white group-hover:bg-blue-500 shadow group-hover:shadow-lg transition-colors duration-200 border border-gray-200 group-hover:border-blue-500">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.237 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.373-12-12-12z"/>
                      </svg>
                    </span>
                  </motion.a>
                )}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.title === 'Melanoma Skin Cancer Detection via Dermoscopic Images' && (
                <div className="flex flex-col gap-2 mb-3 min-w-0 w-full">
                  {project.colab && (
                    <div className="flex justify-start">
                      <a href={project.colab} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold hover:bg-yellow-200 transition-colors min-w-[120px] w-auto">
                        <ColabIcon />
                        Google Colab
                      </a>
                    </div>
                  )}
                  <div className="flex flex-row gap-2 justify-start">
                    {project.presentation && (
                      <button 
                        onClick={() => setShowPresentation(true)}
                        className="flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold hover:bg-blue-200 transition-colors min-w-[64px] w-auto"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                        Project Slides
                      </button>
                    )}
                    <button 
                      onClick={() => setShowPaper(true)} 
                      className="flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold hover:bg-green-200 transition-colors min-w-[64px] w-auto"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                      Project Report
                    </button>
                  </div>
                </div>
              )}
              {project.title === 'Recognition of Prokaryotic and Eukaryotic Promoters Using Machine Learning' && project.colab && (
                <div className="flex flex-col gap-2 mb-3 min-w-0 w-full">
                  <div className="flex justify-start">
                    <a href={project.colab} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold hover:bg-yellow-200 transition-colors min-w-[120px] w-auto">
                      <ColabIcon />
                      Google Colab
                    </a>
                  </div>
                </div>
              )}
              {project.title === 'Reproducibility & Rigor in mRNA Localization Prediction via Machine Learning' && (
                <div className="flex flex-col gap-2 mb-3 min-w-0 w-full">
                  {project.colab && (
                    <div className="flex justify-start">
                      <a href={project.colab} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold hover:bg-yellow-200 transition-colors min-w-[120px] w-auto">
                        <ColabIcon />
                        Google Colab
                      </a>
                    </div>
                  )}
                  <div className="flex flex-row gap-2 justify-start">
                    <button
                      onClick={() => setShowMrnaOriginalPaper(true)}
                      className="flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold hover:bg-blue-200 transition-colors min-w-[64px] w-auto"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Reference
                    </button>
                    <button
                      onClick={() => setShowMrnaPaper(true)}
                      className="flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold hover:bg-green-200 transition-colors min-w-[64px] w-auto"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                      Project Report
                    </button>
                  </div>
                </div>
              )}
              {project.title === 'Fatigue Detection from EMG Signals: Feature-Based Analysis' && (
                <div className="flex flex-col gap-2 mb-3 min-w-0 w-full">
                  {project.colab && (
                    <div className="flex justify-start">
                      <a href={project.colab} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold hover:bg-yellow-200 transition-colors min-w-[120px] w-auto">
                        <ColabIcon />
                        Google Colab
                      </a>
                    </div>
                  )}
                  <div className="flex flex-row gap-2 justify-start">
                    <button
                      onClick={() => setShowEmgPresentation(true)}
                      className="flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold hover:bg-blue-200 transition-colors min-w-[64px] w-auto"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                      Project Slides
                    </button>
                    <button
                      onClick={() => setShowEmgPaper(true)}
                      className="flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold hover:bg-green-200 transition-colors min-w-[64px] w-auto"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                      Project Report
                    </button>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-1 mt-auto mb-2">
                <span className="text-xs text-gray-400 font-medium mb-0.5">Tech Stack:</span>
                <div className="flex flex-row flex-wrap gap-2">
                  {Array.isArray(project.tech)
                    ? project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {tech}
                        </span>
                      ))
                    : <span className="text-sm font-medium" style={{ color: accentColor }}>{project.tech}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects; 