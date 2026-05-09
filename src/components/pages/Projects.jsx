import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { MdWeb, MdPsychology, MdSportsEsports } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tabs,
  TabsContent,
} from "../ui/tabs.jsx";

/* =======================
   PROJECT DATA
======================= */
const projects = {
  web: [
    {
      title: "PMS",
      description:
        "A web application with role-based access for players and organizers, supporting tournament creation and registrations via REST APIs. ",
      // github: "https://github.com/username/portfolio",
      github: "",
      liveDemo: "https://pms.apurbapal.site/",
      technologies: ["Next.js", "Tailwind", "JWT","Node.js","Express","MongoDB","Cloudinary"],
    },
    {
      title: "Pokemon",
      description:
        "A browser-based 3D Pokémon world with WASD movement, collision detection, and stats viewer.",
      // github: "https://github.com/Apurba-pal/3d_pokemon_website.git",
      github:"",
      liveDemo:
        "https://pokemon.apurbapal.site/",
      technologies: ["Three.js", "HTML"],
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat app with JWT auth, image sharing, online status, and theme customization.",
      github: "",
      liveDemo: "chat.apurbapal.site",
      technologies: ["React", "Node","Express", "Socket.IO", "MongoDB"],
    },
    {
      title: "3D Shirt Customizer",
      description:
        "Interactive 3D shirt customizer with React, Three.js & React Three Fiber.",
      github: "",
      liveDemo: "https://stylein3d.apurbapal.site/",
      technologies: ["React", "Three.js", "R3F"],
    },
  ],

  ml: [
        {
      title: "AI asistant - 'Open'",
      description:
        "Voice-controlled desktop assistant using Python, SpeechRecognition and Groq.",
      github: "https://github.com/Apurba-pal/AI_asistant_Open",
      liveDemo: "",
      technologies: ["Python","pyttsx3", "requests","Groq"],
    },
    {
      title: "Gesture Volume Control",
      description:
        "Real-time hand tracked volume control system using MediaPipe and OpenCV.",
      github: "https://github.com/Apurba-pal/gesture_controlled_volume",
      liveDemo: "",
      technologies: ["Python","MediaPipe", "OpenCV","Numpy"],
    },
    {
      title: "Handwritten Digit Classifier",
      description:
        "Neural network built from scratch using Python and NumPy, achieving 92% accuracy",
      github: "https://github.com/Apurba-pal/Digits-recognition-using-neural-network",
      liveDemo: "",
      technologies: ["Python", "Numpy", "matplotlib","Neural Network"],
    },
    {
      title: "Cat/Dog Classifier",
      description:
        "CNN model built with TensorFlow and Keras to classify cats and dogs",
      github: "https://github.com/Apurba-pal/Cats-Dog-classification-using-CNN-Deep-Learning",
      liveDemo: "",
      technologies: ["Python", "NumPy", "Matplotlib", "tensorflow","keras"],
    },
  ],

  games: [
    {
      title: "Still They Stand",
      description:
        "Unity based first-person 3D survival horror game.",
      github: "",
      liveDemo: "https://apurba-10.itch.io/still-they-stand",
      technologies: ["Unity", "C#", "Enemy AI"],
    },
    {
      title: "Night of the PumpkinHead",
      description:
        "Unity based first-person 3D survival horror game.",
      github: "",
      liveDemo: "https://apurba-10.itch.io/night-of-the-pumpkinhead",
      technologies: ["Unity", "C#", "Enemy AI"],
    },
  ],
};

/* =======================
   TABS CONFIG
======================= */
const TAB_LIST = [
  { key: "web",   label: "Web & 3D",        icon: MdWeb           },
  { key: "ml",    label: "Machine Learning", icon: MdPsychology    },
  { key: "games", label: "Games",            icon: MdSportsEsports },
];

/* =======================
   ANIMATION VARIANTS
======================= */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* =======================
   PROJECT CARD
======================= */
const ProjectCard = ({ project, index }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ duration: 0.28 }}
    className="
      relative group flex flex-col
      bg-white/[0.03] border border-white/10
      hover:border-yellow-500/50
      backdrop-blur-sm rounded-2xl
      p-6 sm:p-7
      shadow-lg
      hover:shadow-[0_8px_40px_-8px_rgba(234,179,8,0.22)]
      transition-all duration-300
      overflow-hidden
    "
  >
    {/* Top-right corner glow */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Index number watermark */}
    <span className="absolute top-5 right-6 text-5xl font-black text-white/[0.04] select-none pointer-events-none leading-none">
      {String(index + 1).padStart(2, "0")}
    </span>

    {/* Icon + title */}
    <div className="flex items-start gap-3 mb-3">
      <div className="mt-1 w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0 group-hover:bg-yellow-500/20 transition-colors duration-300">
        <FaCode className="text-yellow-400 text-sm" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
        {project.title}
      </h3>
    </div>

    {/* Divider */}
    <div className="h-px w-full bg-gradient-to-r from-yellow-500/30 via-orange-500/20 to-transparent mb-4" />

    {/* Description */}
    <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
      {project.description}
    </p>

    {/* Tech badges */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.technologies.map((tech, i) => (
        <span
          key={i}
          className="
            text-[11px] font-semibold px-2.5 py-1 rounded-full
            bg-yellow-500/10 text-yellow-400
            border border-yellow-500/20
            tracking-wide
          "
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Action buttons */}
    <div className="mt-auto flex gap-3">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 flex justify-center items-center gap-2
            px-4 py-2.5 rounded-xl text-sm font-semibold
            bg-yellow-500 text-black
            hover:bg-yellow-400
            shadow-[0_2px_12px_rgba(234,179,8,0.30)]
            hover:shadow-[0_4px_20px_rgba(234,179,8,0.45)]
            transition-all duration-250
          "
        >
          <FaGithub className="text-base" />
          Code
        </a>
      )}

      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-1 flex justify-center items-center gap-2
            px-4 py-2.5 rounded-xl text-sm font-semibold
            border border-yellow-500/50 text-yellow-400
            hover:bg-yellow-500/10
            transition-all duration-250
          "
        >
          <FaExternalLinkAlt className="text-xs" />
          Demo
        </a>
      )}
    </div>
  </motion.div>
);

/* =======================
   ANIMATED GRID
======================= */
const AnimatedGrid = ({ data }) => (
  <motion.div
    key={data[0]?.title}
    variants={gridVariants}
    initial="hidden"
    animate="visible"
    className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2"
  >
    {data.map((project, index) => (
      <ProjectCard key={index} project={project} index={index} />
    ))}
  </motion.div>
);

/* =======================
   MAIN COMPONENT
======================= */
const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");
  return (
    <section
      id="projects"
      className="relative min-h-screen text-white px-4 sm:px-8 py-5 sm:py-10 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[300px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">
            <HiSparkles />
            <span>What I've Built</span>
            <HiSparkles />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Projects
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-md mx-auto">
            A curated collection of things I've designed, built, and shipped.
          </p>
        </motion.div>

        {/* ── Tabs ── */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col items-center">

          {/* ── Sliding pill tab switcher ── */}
          <div
            className="
              relative flex items-center gap-3
              bg-[#111] border border-white/[0.08]
              rounded-2xl p-1.5 mb-10
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
            "
          >
            {TAB_LIST.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative z-10 flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 select-none"
                  style={{ color: isActive ? "#000" : "#9ca3af" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-xl bg-yellow-400"
                      style={{
                        boxShadow: "0 0 18px 3px rgba(234,179,8,0.50), 0 2px 8px rgba(234,179,8,0.30)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className="relative z-10 text-sm shrink-0" />
                  <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab content panels */}
          {TAB_LIST.map((tab) => (
            <TabsContent key={tab.key} value={tab.key} className="w-full min-h-[500px]">
              <AnimatedGrid data={projects[tab.key]} />
            </TabsContent>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="https://github.com/Apurba-pal"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2.5
                px-7 py-3.5
                text-sm sm:text-base font-semibold
                text-black
                bg-gradient-to-r from-yellow-400 to-orange-500
                rounded-full
                shadow-[0_4px_24px_rgba(234,179,8,0.35)]
                hover:shadow-[0_6px_32px_rgba(234,179,8,0.55)]
                hover:scale-105
                transition-all duration-300
              "
            >
              <FaGithub className="text-lg" />
              View All Projects on GitHub
            </a>
          </motion.div>

        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
