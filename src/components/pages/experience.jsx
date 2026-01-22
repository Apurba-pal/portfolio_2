import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion";

/* =======================
   ANIMATION VARIANTS
======================= */
const leftSectionAnimation = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
  transition: { duration: 1.2 },
};

const rightSectionAnimation = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
  transition: { duration: 1.2 },
};

/* =======================
   EXPERIENCE DATA
======================= */
const experiences = [
  {
    role: "Frontend Developer",
    duration: "Aug 2024 - Present",
    company: "AZMTH",
    points: [
      <>
        Crafted the landing page for{" "}
        <a
          href="https://home.globaltfn.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 underline hover:text-orange-500"
        >
          AZMTH
        </a>{" "}
        with a focus on usability and visual appeal.
      </>,
      <>
        Developed a 3D audio player using Rhubarb Lip Sync and FFmpeg to
        synchronize audio with a 3D character (
        <a
          href="https://github.com/Apurba-pal/3d_lipSync"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 underline hover:text-orange-500"
        >
          Github
        </a>
        )
      </>,
      "Employed advanced design techniques to integrate multimedia elements effectively.",
    ],
  },
  {
    role: "Intern",
    duration: "Aug 2024 - Nov 2024",
    company: "Jindal Steel and Power Limited",
    points: [
      "Developed Python scripts for web scraping to efficiently compile and manage data.",
      "Automated record-keeping and data updates in Google Sheets using Google Apps Script.",
      "Streamlined backend integration and data management processes through effective scripting.",
    ],
  },
  {
    role: "Software Developer",
    duration: "Sep 2023 - Aug 2024",
    company: "The Future Network",
    points: [
      "Designed and implemented the landing page for the AI website AZMTH, ensuring a modern, responsive interface.",
      "Collaborated on full-stack projects by integrating APIs and delivering seamless user experiences.",
      "Contributed innovative ideas to create interactive web elements and dynamic content modules.",
    ],
  },
  {
    role: "Experience Title",
    duration: "Duration",
    company: "Company Name",
    points: [
      "Add your experience details here.",
      "This entry is ready for future use.",
    ],
  },
];

/* =======================
   MAIN COMPONENT
======================= */
const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-opacity-10 backdrop-blur-sm text-white px-4 sm:px-8 py-10"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-yellow-500">
        Experience
      </h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="
              shadow-lg
              grid grid-cols-1 md:grid-cols-10
              max-w-[95%] mx-auto
              bg-transparent
            "
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            exit="exit"
          >
            {/* Left Section */}
            <motion.div
              className="
                md:col-span-2
                flex flex-col justify-center
                bg-yellow-500 text-black
                p-4
                text-center
              "
              variants={leftSectionAnimation}
            >
              <h2 className="text-xl sm:text-2xl font-semibold">
                {exp.role}
              </h2>
              <p className="text-sm sm:text-md">{exp.duration}</p>
              <h3 className="text-md sm:text-lg">{exp.company}</h3>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="
                md:col-span-8
                p-4
                border border-yellow-500
                flex flex-col justify-center
              "
              variants={rightSectionAnimation}
            >
              <ul className="space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCaretRight className="text-yellow-500 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
