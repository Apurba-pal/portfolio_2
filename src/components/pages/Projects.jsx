import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaVideo } from 'react-icons/fa'; // Updated to use FaVideo for demo video icon

const projects = [
  { 
    title: 'this Portfolio Website',
    description: 'this portfolio website itself can be considered as a project of mine, it is fully responsive',
    github: 'https://github.com/username/portfolio',
    liveDemo: '#',
    technologies: ['React', 'tailwind', 'Framer Motion', 'Firebase'],
  },
  {
    title: '3D Pokemon Website',
    description: "A browser-based 3D Pokémon world built with Three.js! Explore with WASD controls, interact with 3D Pokémon models, and view their stats. Features include collision detection, terrain movement, and a third-person character controller. More updates coming soon! 🚀",
    github: 'https://github.com/Apurba-pal/3d_pokemon_website.git',
    liveDemo: 'https://www.linkedin.com/posts/apurba-pal-642729265_threejs-web3d-gamedevelopment-activity-7304490671468421121-5fv0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEERxlIBVWCpBvDpP3TJIIZX_ZnFfmvz3B8',
    technologies: ['HTML', 'Three JS'],
  },
  {
    title: 'Chat Application',
    description: "A real-time chat application with signup/login, JWT authentication, instant text and image sharing, active chat tracking, and dynamic user status updates. Users can update profile pictures and customize themes. Currently focused on building the backend! 🚀(sorry there isn't any demo video for this 😅)",
    github: 'https://github.com/Apurba-pal/MERN_chat_app.git',
    liveDemo: '',
    technologies: ['React', 'Tailwind','Node', 'Socket.IO', 'Express', 'MongoDB'],
  },
  {
    title: '3D portfolio',
    description: 'A sleek portfolio with a custom THREE.js-powered parallax effect synced to scroll. Featuring just three sections, the focus is on smooth, interactive visuals for a dynamic user experience. Excited to refine it further—feedback is welcome! 🎨✨',
    github: 'https://github.com/Apurba-pal/3D_portfolio.git',
    liveDemo: 'https://www.linkedin.com/posts/apurba-pal-642729265_webdevelopment-threejs-javascript-activity-7281265706342477824--Nu8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEERxlIBVWCpBvDpP3TJIIZX_ZnFfmvz3B8',
    technologies: ['HTML','Three JS'],
  },
  {
    title: '3D shirt customizer',
    description: 'A fully interactive 3D Shirt Customizer built with React.js, Three.js, and React Three Fiber. Users can personalize shirts by selecting colors, uploading logos/images, and applying designs seamlessly. The backend is ready for AI-generated designs, pending a DALL·E subscription. Excited to push the boundaries of interactive customization! 🚀✨',
    github: 'https://github.com/Apurba-pal/shirt_website.git',
    liveDemo: 'https://www.linkedin.com/posts/apurba-pal-642729265_reactjs-threejs-webdevelopment-activity-7247881470487191553-u7C6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEERxlIBVWCpBvDpP3TJIIZX_ZnFfmvz3B8',
    technologies: ['React', 'Three JS', 'React Three Fiber'],
  },
];

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // Track hovered project

  return (
    <div className="p-6 min-h-screen flex flex-col justify-evenly items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
        Projects
      </h1>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-5xl"
        style={{
          gridAutoRows: 'minmax(200px, auto)', // Ensure consistent row heights
        }}
      >
        {projects.map((project, index) => {
          const isHovered = hoverIndex === index;

          return (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.5, type: 'spring' } }}
              className={`shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex ${isHovered ? 'flex-col justify-between' : 'justify-center items-center'
                } ${isHovered ? 'border-4 border-yellow-500 bg-black text-yellow-500' : 'bg-yellow-500 text-black'}`}
              onMouseEnter={() => setHoverIndex(index)} // Set hover index on mouse enter
              onMouseLeave={() => setHoverIndex(null)} // Reset hover index on mouse leave
              style={{
                gridColumn: isHovered ? 'span 2' : 'auto', // Open card spans 2 columns
                gridRow: isHovered ? 'span 2' : 'auto', // Open card spans 2 rows
                minHeight: '125px', // Increased height for small cards
                minWidth: '250px', // Increased width for small cards
              }}
            >
              <motion.h2
                layout="position"
                className={`text-xl font-bold ${!isHovered ? 'text-center' : 'mb-4'}`} // Center heading for smaller cards
              >
                {project.title}
              </motion.h2>
              {isHovered && (
                <motion.div
                  className="flex flex-col justify-between h-full"
                >
                  <motion.p className="mb-4">{project.description}</motion.p>
                  <div className="flex justify-between items-end mt-auto">
                    {/* Technologies aligned to bottom-left */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-yellow-500 text-black text-sm px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Buttons aligned to bottom-right */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold px-4 py-2 rounded hover:bg-gray-800 transition ${isHovered ? 'bg-yellow-500 text-black' : 'bg-black text-yellow-500'
                          }`}
                      >
                        <FaGithub size={20} /> {/* GitHub icon */}
                      </a>
                      <a
                        href={project.liveDemo} // Updated to point to demo video
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold px-4 py-2 rounded hover:bg-gray-800 transition ${isHovered ? 'bg-yellow-500 text-black' : 'bg-black text-yellow-500'
                          }`}
                      >
                        <FaVideo size={20} /> {/* Demo Video icon */}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
