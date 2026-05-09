import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

/* =======================
   EXPERIENCE DATA
======================= */
const experiences = [
    {
    role: "Frontend Developer Intern",
    duration: "May 2025 – Aug 2025",
    company: "Vigilantia Praesidium Pvt. Ltd.",
    tag: "Internship",
    points: [
      "Developed main landing page, user panel, and admin panel improving performance across desktop and mobile devices. ",

      "Led full-site development for surveillance solution showcase integrating API endpoints and ensuring stable user interaction.",
      
      "Implemented modular UI components and animations, enhancing maintainability and overall user engagement "
    ],
  },
  {
    role: "Frontend Developer",
    duration: "Aug 2024 – Aug 2025",
    company: "AZMTH",
    tag: "Internship",
    points: [
      <>
        Crafted the landing page for{" "}
        <a
          href="https://home.globaltfn.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 font-semibold hover:text-orange-400 transition-colors duration-200 inline-flex items-center gap-1"
        >
          AZMTH <FaExternalLinkAlt className="text-xs" />
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
          className="text-yellow-400 font-semibold hover:text-orange-400 transition-colors duration-200 inline-flex items-center gap-1"
        >
          GitHub <FaGithub className="text-xs" />
        </a>
        )
      </>,
      "Employed advanced design techniques to integrate multimedia elements effectively.",
    ],
  },
  {
    role: "Intern",
    duration: "Aug 2024 – Nov 2024",
    company: "Jindal Steel & Power",
    tag: "Internship",
    points: [
      "Developed Python scripts for web scraping to efficiently compile and manage data.",
      "Automated record-keeping and data updates in Google Sheets using Google Apps Script.",
      "Streamlined backend integration and data management processes through effective scripting.",
    ],
  },
  {
    role: "Software Developer",
    duration: "Sep 2023 – Aug 2024",
    company: "The Future Network",
    tag: "Internship",
    points: [
      "Designed and implemented the landing page for the AI website AZMTH, ensuring a modern, responsive interface.",
      "Collaborated on full-stack projects by integrating APIs and delivering seamless user experiences.",
      "Contributed innovative ideas to create interactive web elements and dynamic content modules.",
    ],
  },
];

/* =======================
   ANIMATION VARIANTS
======================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

/* =======================
   TAG BADGE
======================= */
const TagBadge = ({ tag }) => {
  const isLive = tag === "Current";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest
        ${
          isLive
            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
            : "bg-white/5 text-gray-400 border border-white/10"
        }`}
    >
      {isLive && (
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
      )}
      {tag}
    </span>
  );
};

/* =======================
   EXPERIENCE CARD
======================= */
const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex items-start gap-0 md:gap-0 group"
    >
      {/* ── Timeline connector (visible md+) ── */}
      <div className="hidden md:flex flex-col items-center w-16 shrink-0">
        {/* Dot */}
        <motion.div
          variants={dotVariants}
          className="w-5 h-5 rounded-full bg-yellow-500 border-4 border-black z-10 shadow-[0_0_14px_2px_rgba(234,179,8,0.55)] group-hover:shadow-[0_0_22px_4px_rgba(234,179,8,0.75)] transition-shadow duration-300"
        />
      </div>

      {/* ── Card ── */}
      <div
        className="
          flex-1
          ml-4 md:ml-0
          bg-white/[0.03] border border-white/10
          hover:border-yellow-500/50
          backdrop-blur-sm
          rounded-2xl
          p-6 sm:p-8
          transition-all duration-400
          hover:bg-white/[0.06]
          hover:shadow-[0_8px_40px_-8px_rgba(234,179,8,0.18)]
          group/card
        "
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <TagBadge tag={exp.tag} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {exp.role}
            </h2>
            <p className="text-yellow-500 font-semibold text-sm sm:text-base">
              {exp.company}
            </p>
          </div>

          {/* Duration chip */}
          <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-2 w-fit">
            <FaBriefcase className="text-yellow-500 text-xs shrink-0" />
            <span className="text-yellow-300 text-xs sm:text-sm font-medium whitespace-nowrap">
              {exp.duration}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-yellow-500/30 via-orange-500/20 to-transparent mb-5" />

        {/* Bullet points */}
        <ul className="space-y-3">
          {exp.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
              className="flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed"
            >
              {/* Custom bullet */}
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen text-white px-4 sm:px-8 py-5 sm:py-10 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[300px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-14 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">
          <HiSparkles />
          <span>Career Journey</span>
          <HiSparkles />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Experience
          </span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-md mx-auto">
          A timeline of roles where I've built, shipped, and grown as a developer.
        </p>
      </motion.div>

      {/* Timeline wrapper */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="hidden md:block absolute left-8 top-3 bottom-3 w-px bg-gradient-to-b from-yellow-500/60 via-orange-500/30 to-transparent"
          style={{ transformOrigin: "top" }}
        />

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col gap-10"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
