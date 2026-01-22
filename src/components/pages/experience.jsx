import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const leftSectionAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0},
    transition: { duration: 1.5 },
  };

  const rightSectionAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 1.5 },
  };

  return (
    <div id="experience" className="min-h-screen bg-opacity-10 backdrop-blur-sm text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-500">Experience</h1>
      <div className="space-y-5">
        {/* First Experience */}
        <motion.div
          className="shadow-lg grid grid-cols-1 md:grid-cols-10 hover:shadow-yellowGlow hover:bg-black hover:scale-105 transition-all duration-300 max-w-[95%] mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
        >
          <motion.div
            className="md:col-span-2 flex flex-col justify-center bg-yellow-500 text-black p-4"
            variants={leftSectionAnimation}
          >
            <h2 className="text-2xl font-semibold text-center">Frontend Developer</h2>
            <p className="text-md text-center">Aug 2024 - Present</p>
            <h3 className="text-lg text-center">AZMTH</h3>
          </motion.div>
          <motion.div
            className="md:col-span-8 p-4 border border-yellow-500 flex flex-col justify-center"
            variants={rightSectionAnimation}
          >
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Crafted the landing page for 
                <a 
                  href="https://home.globaltfn.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-500 underline hover:text-orange-500"
                >
                  AZMTH
                </a> 
                with a focus on usability and visual appeal.
              </li>
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Developed a 3D audio player using Rhubarb Lip Sync and FFmpeg to synchronize audio with a 3D character (
                <a 
                  href="https://github.com/Apurba-pal/3d_lipSync" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-500 underline hover:text-orange-500"
                >Github</a>
                )
              </li>
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Employed advanced design techniques to integrate multimedia elements effectively.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Second Experience */}
        <motion.div
          className="shadow-lg grid grid-cols-1 md:grid-cols-10 hover:shadow-yellowGlow hover:bg-black hover:scale-105 transition-all duration-300 max-w-[95%] mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
        >
          <motion.div
            className="md:col-span-2 flex flex-col justify-center bg-yellow-500 text-black p-4"
            variants={leftSectionAnimation}
          >
            <h2 className="text-2xl font-semibold text-center">Intern</h2>
            <p className="text-md text-center">Aug 2024 - Nov 2024</p>
            <h3 className="text-lg text-center">Jindal Steel and Power Limited</h3>
          </motion.div>
          <motion.div
            className="md:col-span-8 p-4 border border-yellow-500 flex flex-col justify-center"
            variants={rightSectionAnimation}
          >
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Developed Python scripts for web scraping to efficiently compile and manage data.
              </li>
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Automated record-keeping and data updates in Google Sheets using Google Apps Script.
              </li>
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Streamlined backend integration and data management processes through effective scripting.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Third Experience */}
        <motion.div
          className="shadow-lg grid grid-cols-1 md:grid-cols-10 hover:shadow-yellowGlow hover:bg-black hover:scale-105 transition-all duration-300 max-w-[95%] mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
        >
          <motion.div
            className="md:col-span-2 flex flex-col justify-center bg-yellow-500 text-black p-4"
            variants={leftSectionAnimation}
          >
            <h2 className="text-2xl font-semibold text-center">Software Developer</h2>
            <p className="text-md text-center">Sep 2023 - Aug 2024</p>
            <h3 className="text-lg text-center">The Future Network</h3>
          </motion.div>
          <motion.div
            className="md:col-span-8 p-4 border border-yellow-500 flex flex-col justify-center"
            variants={rightSectionAnimation}
          >
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Designed and implemented the landing page for the AI website AZMTH, ensuring a modern, responsive interface.
              </li>
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Collaborated on full-stack projects by integrating APIs and delivering seamless user experiences.
              </li>
              <li className="flex items-start gap-2">
                <FaCaretRight className="text-yellow-500 mt-1" />
                Contributed innovative ideas to create interactive web elements and dynamic content modules.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
