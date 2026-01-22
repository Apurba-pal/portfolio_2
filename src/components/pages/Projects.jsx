import React from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs.jsx";

/* =======================
   PROJECT DATA
======================= */
const projects = {
  web: [
    {
      title: "Portfolio Website",
      description:
        "A fully responsive personal portfolio showcasing projects, skills, and animations.",
      github: "https://github.com/username/portfolio",
      liveDemo: "#",
      technologies: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "3D Pokémon Website",
      description:
        "A browser-based 3D Pokémon world with WASD movement, collision detection, and stats viewer.",
      github: "https://github.com/Apurba-pal/3d_pokemon_website.git",
      liveDemo:
        "https://www.linkedin.com/posts/apurba-pal-642729265_threejs-web3d-gamedevelopment-activity-7304490671468421121-5fv0",
      technologies: ["Three.js", "HTML"],
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat app with JWT auth, image sharing, online status, and theme customization.",
      github: "https://github.com/Apurba-pal/MERN_chat_app.git",
      liveDemo: "",
      technologies: ["React", "Node", "Socket.IO", "MongoDB"],
    },
    {
      title: "3D Shirt Customizer",
      description:
        "Interactive 3D shirt customizer with React, Three.js & React Three Fiber.",
      github: "https://github.com/Apurba-pal/shirt_website.git",
      liveDemo: "",
      technologies: ["React", "Three.js", "R3F"],
    },
  ],

  ml: [
    {
      title: "ML Classification Model",
      description:
        "Machine learning classification project with preprocessing and evaluation.",
      github: "#",
      liveDemo: "",
      technologies: ["Python", "Scikit-Learn", "Pandas"],
    },
    {
      title: "ML Regression Model",
      description:
        "Regression model with feature engineering and performance metrics.",
      github: "#",
      liveDemo: "",
      technologies: ["Python", "NumPy", "Matplotlib"],
    },
  ],

  games: [
    {
      title: "Unity Platformer Game",
      description:
        "Unity-based platformer with physics, player movement, and level design.",
      github: "#",
      liveDemo: "",
      technologies: ["Unity", "C#", "Game Physics"],
    },
    {
      title: "Unity Shooter Game",
      description:
        "Shooter game with AI enemies, scoring system, and combat mechanics.",
      github: "#",
      liveDemo: "",
      technologies: ["Unity", "C#", "AI"],
    },
  ],
};

/* =======================
   MAIN COMPONENT
======================= */
const Projects = () => {
  return (
    <section className="min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-5">
          Projects
        </h2>

        <Tabs defaultValue="web" className="w-full flex flex-col items-center">
          {/* Tabs Header */}
          <TabsList
            className="
    relative flex items-center gap-2 sm:gap-3
    bg-transparent
    rounded-full p-1
    mb-8 sm:mb-5
    backdrop-blur-0
  "
          >
            {[
              { key: "web", label: "Web & 3D" },
              { key: "ml", label: "Machine Learning" },
              { key: "games", label: "Games" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="
  relative z-10
  px-5 sm:px-6 py-2 sm:py-2.5
  rounded-full
  text-xs sm:text-sm font-semibold

  bg-black
  text-yellow-500
  border border-yellow-500

  data-[state=active]:bg-yellow-500
  data-[state=active]:text-black
  data-[state=active]:border-transparent
  data-[state=active]:shadow-md
  data-[state=active]:shadow-yellow-500/40

  hover:bg-yellow-500
  hover:text-black

  transition-all duration-300 ease-out
"

              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>


          {/* Web */}
          <TabsContent value="web" className="w-full min-h-[500px]">
            <AnimatedGrid data={projects.web} />
          </TabsContent>

          {/* ML */}
          <TabsContent value="ml" className="w-full min-h-[500px]">
            <AnimatedGrid data={projects.ml} />
          </TabsContent>

          {/* Games */}
          <TabsContent value="games" className="w-full min-h-[500px]">
            <AnimatedGrid data={projects.games} />
          </TabsContent>
          {/* CTA: View All Projects */}
<div className="mt-10 flex justify-center">
  <a
    href="https://github.com/Apurba-pal"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-2
      px-6 py-3
      text-sm sm:text-base font-semibold
      text-yellow-500
      border border-yellow-500
      rounded-full
      hover:bg-yellow-500 hover:text-black
      transition-all duration-300
    "
  >
    <FaGithub className="text-lg" />
    View all projects
  </a>
</div>

        </Tabs>
      </div>
    </section>
  );
};

/* =======================
   GRID + ANIMATION
======================= */
const AnimatedGrid = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2"
    >
      {data.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
          className="bg-black border border-yellow-500/60 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-yellow-500/20 flex flex-col"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-500 mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-yellow-500 text-black font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex w-full gap-3 sm:gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center gap-2 px-4 py-2 text-sm font-semibold bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition"
            >
              <FaGithub /> Code
            </a>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 px-4 py-2 text-sm font-semibold border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-black transition"
              >
                <FaVideo /> Demo
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
