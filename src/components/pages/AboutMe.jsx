import React from "react";
import { FaMapMarkerAlt, FaCoffee, FaBriefcase } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="w-full max-w-5xl mx-auto bg-black rounded-2xl border border-yellow-500/30 overflow-hidden">
      
      {/* Top gradient header */}
      <div className="h-24 sm:h-28 bg-gradient-to-r from-yellow-500/80 to-orange-500/80" />

      <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center md:items-start gap-4 sm:gap-5">
          
          {/* Profile Image */}
          <img
            src="/myImage_cropped.jpg"
            alt="Apurba Pal"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl border-4 border-yellow-500 object-cover -mt-16 sm:-mt-20 bg-black"
          />

          {/* Status */}
          <span className="flex items-center gap-2 px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Open to Work
          </span>

          {/* Info */}
          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-yellow-500" />
              <span>
                <strong className="text-white">Focus:</strong> Software & AI
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span>
                <strong className="text-white">Location:</strong> India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaCoffee className="text-yellow-500" />
              <span>
                <strong className="text-white">Fuel:</strong> Coffee
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          
          {/* Name */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Apurba <span className="text-yellow-500">Pal</span>
            </h2>
            <p className="text-yellow-400 font-medium text-sm sm:text-base">
                Software Developer & Problem Solver
            </p>
          </div>

          {/* MOBILE SUMMARY */}
          <p className="sm:hidden text-gray-300 text-sm leading-relaxed">
            Software developer with experience across full-stack development,
            AI/ML, computer vision, and systems, passionate about building
            practical solutions to real-world problems.
          </p>

          {/* DESKTOP ABOUT TEXT */}
          <div className="hidden sm:block space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hello! I am Apurba Pal, a software developer with hands-on
              experience across full-stack development, AI/ML, computer vision,
              and systems engineering. I enjoy building practical solutions
              and exploring how technology can solve real-world problems.
            </p>

            <p className="text-gray-300 leading-relaxed">
              From web applications and AI-powered tools to version control
              systems and interactive 3D experiences, I enjoy working across
              different areas of software engineering while continuously
              improving my problem-solving skills.
            </p>
          </div>

          {/* VISION – DESKTOP ONLY */}
          <div className="hidden sm:block bg-black border border-yellow-500/30 rounded-xl p-5">
            <h3 className="text-yellow-500 font-semibold mb-2">
              My Vision
            </h3>
            <p className="text-gray-300 italic">
              “To engineer impactful digital experiences that merge
              functionality with aesthetics, solving real-world problems
              through innovative technology.”
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
