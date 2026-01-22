import React from "react";
import { FaHome, FaBriefcase, FaProjectDiagram, FaEnvelope, FaTools } from "react-icons/fa";

const SideNav = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 right-2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50 overflow-hidden sm:right-1">
      <button
        onClick={() => handleScroll("home")}
        className="p-3 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-full shadow-lg transform scale-75 hover:scale-100 transition-transform duration-300 ease-in-out sm:scale-50"
        title="Home"
      >
        <FaHome size={16} />
      </button>
      <button
        onClick={() => handleScroll("experience")}
        className="p-3 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-full shadow-lg transform scale-50 hover:scale-100 transition-transform duration-300 ease-in-out"
        title="Experience"
      >
        <FaBriefcase size={16} />
      </button>
      <button
        onClick={() => handleScroll("skills")}
        className="p-3 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-full shadow-lg transform scale-50 hover:scale-100 transition-transform duration-300 ease-in-out"
        title="Skills"
      >
        <FaTools size={16} />
      </button>
      <button
        onClick={() => handleScroll("projects")}
        className="p-3 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-full shadow-lg transform scale-50 hover:scale-100 transition-transform duration-300 ease-in-out"
        title="Projects"
      >
        <FaProjectDiagram size={16} />
      </button>
      <button
        onClick={() => handleScroll("contact")}
        className="p-3 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-full shadow-lg transform scale-50 hover:scale-100 transition-transform duration-300 ease-in-out"
        title="Contact"
      >
        <FaEnvelope size={16} />
      </button>
    </div>
  );
};

export default SideNav;
