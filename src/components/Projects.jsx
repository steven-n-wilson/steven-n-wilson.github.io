import React, { useState, useEffect } from 'react';
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
    title: 'mRNA Localization Prediction with Machine Learning',
    description: 'Rebuilt mRNA k-mer features to replicate Musleh et al. (2024) subcellular localization predictions using CatBoost, XGBoost, and LightGBM.',
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
    description: 'This project develops an automated diagnostic tool using a Convolutional Neural Network (CNN) to enhance the early detection of melanoma through image analysis.',
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderPdfViewer = (pdfPath, title) => {
    if (isMobile) {
      return (
        <div className="flex flex-col p-6">
          <p className="text-gray-600 mb-4">The PDF will open in a new tab for better viewing experience.</p>
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => {
              if (title === 'Paper') setShowPaper(false);
              else if (title === 'Presentation') setShowPresentation(false);
              else if (title === 'mRNA Paper') setShowMrnaPaper(false);
              else if (title === 'mRNA Original Paper') setShowMrnaOriginalPaper(false);
              else if (title === 'EMG Paper') setShowEmgPaper(false);
              else if (title === 'EMG Presentation') setShowEmgPresentation(false);
            }}
          >
            Open {title}
          </a>
        </div>
      );
    }

    return (
      <div className="flex-1 overflow-auto">
        <iframe
          src={pdfPath}
          className="w-full h-full min-h-[500px]"
          title={`${title} Preview`}
          frameBorder="0"
          scrolling="yes"
        />
      </div>
    );
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      {/* Paper Preview Modal */}
      {showPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`bg-white rounded-lg shadow-xl w-full ${isMobile ? 'max-w-md' : 'h-[90vh] max-w-5xl'} relative flex flex-col`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Project Report</h3>
              <button
                onClick={() => setShowPaper(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderPdfViewer('/papers/melanoma-paper.pdf', 'Paper')}
          </motion.div>
        </div>
      )}

      {/* Presentation Preview Modal */}
      {showPresentation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`bg-white rounded-lg shadow-xl w-full ${isMobile ? 'max-w-md' : 'h-[90vh] max-w-5xl'} relative flex flex-col`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Project Slides</h3>
              <button
                onClick={() => setShowPresentation(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderPdfViewer('/presentations/melanoma-presentation.pdf', 'Presentation')}
          </motion.div>
        </div>
      )}

      {/* mRNA Paper Preview Modal */}
      {showMrnaPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`bg-white rounded-lg shadow-xl w-full ${isMobile ? 'max-w-md' : 'h-[90vh] max-w-5xl'} relative flex flex-col`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Project Report</h3>
              <button
                onClick={() => setShowMrnaPaper(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderPdfViewer('/papers/mrna-original-paper.pdf', 'mRNA Paper')}
          </motion.div>
        </div>
      )}

      {/* mRNA Original Paper Preview Modal */}
      {showMrnaOriginalPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`bg-white rounded-lg shadow-xl w-full ${isMobile ? 'max-w-md' : 'h-[90vh] max-w-5xl'} relative flex flex-col`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Reference Paper</h3>
              <button
                onClick={() => setShowMrnaOriginalPaper(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderPdfViewer('/papers/mrna-paper.pdf', 'mRNA Original Paper')}
          </motion.div>
        </div>
      )}

      {/* EMG Paper Preview Modal */}
      {showEmgPaper && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`bg-white rounded-lg shadow-xl w-full ${isMobile ? 'max-w-md' : 'h-[90vh] max-w-5xl'} relative flex flex-col`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Project Report</h3>
              <button
                onClick={() => setShowEmgPaper(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderPdfViewer('/papers/emg-paper.pdf', 'EMG Paper')}
          </motion.div>
        </div>
      )}

      {/* EMG Presentation Preview Modal */}
      {showEmgPresentation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`bg-white rounded-lg shadow-xl w-full ${isMobile ? 'max-w-md' : 'h-[90vh] max-w-5xl'} relative flex flex-col`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Project Slides</h3>
              <button
                onClick={() => setShowEmgPresentation(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {renderPdfViewer('/presentations/emg-presentation.pdf', 'EMG Presentation')}
          </motion.div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block w-1.5 h-8 rounded bg-[#3b82f6] mr-4"></span>
          <h2 className="text-2xl md:text-3xl font-bold text-center" style={{ color: textColor }}>Selected Research & Projects</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl p-4 md:p-6 flex flex-col bg-white/60 backdrop-blur-md border border-white/40 shadow-lg relative w-full"
              style={{ 
                backgroundColor: 'transparent',
                borderTop: `4px solid ${accentColor}`,
              }}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
                borderTop: `4px solid ${accentColor}`
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {project.isResearch && (
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-300 shadow-sm z-10">Research</span>
              )}
              <div className="w-full h-32 md:h-40 mb-4 rounded-lg overflow-hidden bg-white border border-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <h3 className="text-lg md:text-xl font-semibold line-clamp-4" style={{ color: textColor }}>{project.title}</h3>
                <p className="text-sm md:text-base text-gray-600 line-clamp-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.colab && (
                    <a 
                      href={project.colab} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-all cursor-pointer shadow-sm hover:shadow-md active:bg-gray-100 border border-gray-200"
                    >
                      <ColabIcon />
                      Google Colab
                    </a>
                  )}
                  {project.title === 'Melanoma Skin Cancer Detection via Dermoscopic Images' && (
                    <>
                      <button 
                        onClick={() => setShowPresentation(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition-all cursor-pointer shadow-sm hover:shadow-md active:bg-blue-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        Project Slides
                      </button>
                      <button 
                        onClick={() => setShowPaper(true)} 
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700 text-xs font-semibold hover:bg-green-200 transition-all cursor-pointer shadow-sm hover:shadow-md active:bg-green-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Project Report
                      </button>
                    </>
                  )}
                  {project.title === 'mRNA Localization Prediction with Machine Learning' && (
                    <>
                      <button
                        onClick={() => setShowMrnaOriginalPaper(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition-all cursor-pointer shadow-sm hover:shadow-md active:bg-blue-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Reference Paper
                      </button>
                      <button
                        onClick={() => setShowMrnaPaper(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700 text-xs font-semibold hover:bg-green-200 transition-all cursor-pointer shadow-sm hover:shadow-md active:bg-green-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Project Report
                      </button>
                    </>
                  )}
                  {project.title === 'Fatigue Detection from EMG Signals: Feature-Based Analysis' && (
                    <>
                      <button
                        onClick={() => setShowEmgPresentation(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition-all cursor-pointer shadow-sm hover:shadow-md active:bg-blue-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                        Project Slides
                      </button>
                      <button
                        onClick={() => setShowEmgPaper(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700 text-xs font-semibold hover:bg-green-200 transition-all cursor-pointer shadow-sm hover:shadow-md active:bg-green-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Project Report
                      </button>
                    </>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
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