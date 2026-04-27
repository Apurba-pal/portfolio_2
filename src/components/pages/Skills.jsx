import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiThreedotjs,
  SiOpencv,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKeras,
} from "react-icons/si";

/* =======================
   FLAT SKILLS LIST
======================= */
const allSkills = [
  { name: "HTML",         icon: <FaHtml5 />,       color: "#e34c26" },
  { name: "CSS",          icon: <FaCss3Alt />,      color: "#264de4" },
  { name: "JavaScript",   icon: <FaJsSquare />,     color: "#f7df1e" },
  { name: "React",        icon: <FaReact />,        color: "#61dafb" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />,  color: "#38bdf8" },
  { name: "Node.js",      icon: <FaNodeJs />,       color: "#83cd29" },
  { name: "Express",      icon: <SiExpress />,      color: "#ffffff" },
  { name: "MongoDB",      icon: <SiMongodb />,      color: "#4db33d" },
  { name: "GitHub",       icon: <FaGithub />,       color: "#ffffff" },
  { name: "Three.js",     icon: <SiThreedotjs />,   color: "#ffffff" },
  { name: "Python",       icon: <FaPython />,       color: "#3572A5" },
  { name: "Pandas",       icon: <SiPandas />,       color: "#150458" },
  { name: "NumPy",        icon: <SiNumpy />,        color: "#4dabcf" },
  { name: "Scikit-learn", icon: <SiScikitlearn />,  color: "#f89939" },
  { name: "TensorFlow",   icon: <SiTensorflow />,   color: "#ff6f00" },
  { name: "Keras",        icon: <SiKeras />,        color: "#d00000" },
  { name: "OpenCV",       icon: <SiOpencv />,       color: "#5c3ee8" },
];

/* =======================
   SEEDED PSEUDO-RANDOM LAYOUT
   Deterministic so it doesn't re-scatter on every render
======================= */
function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generatePositions(count) {
  const positions = [];
  const cols = 5; // more columns = wider spread
  const rows = Math.ceil(count / cols);

  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);

    // Full-width base grid (2% – 96%) + large jitter so icons reach the edges
    const jitterX = (seededRandom(i * 3 + 7) - 0.5) * 8;
    const jitterY = (seededRandom(i * 5 + 13) - 0.5) * 8;

    const x = 8 + (col / (cols - 1)) * 80 + jitterX;
    const y = 12 + (row / (rows - 1 || 1)) * 70 + jitterY;

    const size = 38 + seededRandom(i * 7 + 3) * 22; // 38–60px icon
    const delay = seededRandom(i * 11 + 1) * 1.5;
    const floatDur = 3 + seededRandom(i * 13 + 5) * 3;
    const floatAmp = 6 + seededRandom(i * 17 + 9) * 12;

    positions.push({
      x: Math.max(3, Math.min(96, x)),
      y: Math.max(3, Math.min(92, y)),
      size,
      delay,
      floatDur,
      floatAmp,
    });
  }
  return positions;
}

/* =======================
   SKILL BUBBLE
======================= */
const SkillBubble = ({ skill, pos, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{
        duration: 0.55,
        delay: pos.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      className="group flex flex-col items-center cursor-default select-none z-10"
    >
      {/* Floating wrapper */}
      <motion.div
        animate={{ y: [0, -pos.floatAmp, 0] }}
        transition={{
          duration: pos.floatDur,
          repeat: Infinity,
          ease: "easeInOut",
          delay: pos.delay,
        }}
        className="flex flex-col items-center"
      >
        {/* Icon container */}
        <div
          className="
            relative flex items-center justify-center
            rounded-2xl
            bg-white/[0.04] border border-white/10
            hover:border-yellow-500/60
            backdrop-blur-sm
            transition-all duration-300
            hover:bg-white/[0.09]
            p-3
          "
          style={{
            width: pos.size + 24,
            height: pos.size + 24,
            boxShadow: `0 0 0 0 transparent`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 20px 4px ${skill.color}33`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 0 0 transparent`;
          }}
        >
          {/* Glow ping on hover */}
          <span
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${skill.color}22 0%, transparent 70%)`,
            }}
          />

          <span
            style={{ fontSize: pos.size, color: skill.color }}
            className="relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            {skill.icon}
          </span>
        </div>

        {/* Label — always visible, subtle */}
        <span className="mt-2 text-[11px] sm:text-xs font-semibold text-gray-500 group-hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap tracking-wide">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
const Skills = () => {
  const positions = useMemo(() => generatePositions(allSkills.length), []);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 overflow-hidden w-full pr-16 md:pr-24"
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-yellow-400/4 rounded-full blur-[80px]" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-4 relative z-20"
      >
        <div className="inline-flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">
          <HiSparkles />
          <span>Tech Arsenal</span>
          <HiSparkles />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Skills
          </span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-md mx-auto">
          Technologies and tools I work with — scattered like stars, just as I use them.
        </p>
      </motion.div>

      {/* Scattered skills canvas — full viewport width */}
      <div
        className="relative w-full"
        style={{ height: "clamp(480px, 75vh, 650px)" }}
      >
        {allSkills.map((skill, i) => (
          <SkillBubble key={skill.name} skill={skill} pos={positions[i]} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
