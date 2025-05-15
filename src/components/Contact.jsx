import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const iconClass = "w-7 h-7 mr-3 inline-block align-middle";

const Contact = () => {
  const [showCvPreview, setShowCvPreview] = useState(false);

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block w-1.5 h-8 rounded bg-[#3b82f6] mr-4"></span>
          <h2 className="text-3xl font-bold text-center" style={{ color: '#1f2937' }}>Contact</h2>
        </motion.div>
        <p className="text-base md:text-lg text-gray-700 mb-6">Feel free to reach out for collaboration, questions, or just to connect.</p>
        
        {/* CV Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => setShowCvPreview(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white border-2 border-blue-500 text-blue-500 text-base md:text-lg font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Preview CV
            </motion.button>
            <motion.a
              href="/steven-cv.pdf"
              download
              className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-500 text-white text-base md:text-lg font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
          <motion.a 
            href="mailto:swils129@uottawa.ca" 
            className="text-blue-500 hover:text-blue-600 font-bold flex items-center text-base md:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 mr-2 md:mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            swils129@uottawa.ca
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/stevenwilsongt/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-600 font-bold flex items-center text-base md:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/steven-n-wilson" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:text-blue-600 font-bold flex items-center text-base md:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 mr-2 md:mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.373-12-12-12z"/></svg>
            GitHub
          </motion.a>
        </div>
      </div>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {showCvPreview && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg shadow-xl w-[90vw] h-[90vh] max-w-5xl relative"
            >
              <button
                onClick={() => setShowCvPreview(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src="/steven-cv.pdf"
                className="w-full h-full rounded-lg"
                title="CV Preview"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact; 