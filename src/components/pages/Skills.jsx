import React from "react";
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
   SKILLS DATA
======================= */
const skillSections = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    title: "3D & Graphics",
    skills: [
      { name: "Three.js", icon: <SiThreedotjs /> },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "OpenCV", icon: <SiOpencv /> },
    ],
  },
];

/* =======================
   COMPONENT
======================= */
const Skills = () => {
  return (
    <section className="min-h-screen px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-12">
        Skills
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2">
        {skillSections.map((section, index) => (
          <div
            key={index}
            className="
              bg-black
              border border-yellow-500/40
              rounded-xl
              p-6
              shadow-md
            "
          >
            <h2 className="text-xl font-semibold text-yellow-500 mb-6 text-center">
              {section.title}
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
              {section.skills.map((skill, i) => (
                <div
                  key={i}
                  className="
                    flex flex-col items-center
                    text-yellow-500
                    transition-transform duration-300
                    hover:scale-110
                  "
                >
                  <div className="text-4xl sm:text-5xl mb-2">
                    {skill.icon}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
