import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";
import Modal from "./components/Modal";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Header from "./components/pages/Header";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Skills from "./components/pages/Skills";
import MobileNav from "./components/MobileNav";
import AboutMe from "./components/pages/AboutMe";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(null);
  const buttonRef = useRef(null);

  const handleOpenModal = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setButtonPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll"); // Apply to html as well
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll"); // Remove from html as well
    }
    return () => {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }; // Cleanup on unmount
  }, [isModalOpen]);

  const handleScrollToExperience = (e) => {
    e.preventDefault();
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="relative bg-transparent min-h-screen overflow-x-hidden"> {/* Added overflow-x-hidden */}
        <MobileNav /> {/* Added MobileNav component */}
        <ParticlesBackground />
        <div className="relative z-0" id="home"> {/* Adjusted parent container */}
          {/* Render SideNav only for larger screens */}
          <div className="hidden md:block">
            <SideNav />
          </div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-white flex flex-col items-center mt-16 w-full ">


                  <div className="min-h-screen flex flex-col pt-10 gap-10">

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-40">
                      <div className="order-2 md:order-1 text-center md:text-left">
                        <h1 className="text-lg sm:text-xl">👋 Hi, I am</h1>
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">
                          <span className="text-white">Apurba</span>{" "}
                          <span className="text-yellow-500">Pal</span>
                        </h1>
                        <div className="flex flex-col md:flex-row gap-4 mt-6"> {/* Adjusted for vertical alignment in mobile */}
                          <button
                            ref={buttonRef}
                            onClick={handleOpenModal}
                            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-black bg-yellow-500 border border-yellow-500 rounded-md flex items-center gap-2 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 transition-all duration-300"
                          >
                            About Me <FaArrowRight />
                          </button>
                          <a
                            href="/Apurba Pal web dev.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-yellow-500 border border-yellow-500 rounded-md flex items-center gap-2 bg-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                          >
                            Download Resume
                          </a>
                        </div>
                      </div>
                      <div className="order-1 md:order-2 mb-6 md:mb-0"> {/* Image moved above buttons in mobile */}
                        <img
                          src="/myImage_cropped.jpg"
                          alt="Apurba Pal"
                          className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full border-4 border-yellow-500 object-cover shadow-yellowGlow"
                        />
                      </div>
                    </div>
                    {/* Down Arrow Button */}
                    <div className="mt-10 flex justify-center z-10">
                      <button
                        onClick={() => {
                          const experienceSection = document.getElementById("experience");
                          if (experienceSection) {
                            experienceSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="flex flex-col items-center text-yellow-500 hover:text-orange-500 transition-all duration-300 bg-transparent border-none outline-none"
                      >
                        <span className="text-lg font-semibold">Experience</span>
                        <FaAngleDown className="w-6 h-6 mt-1 animate-bounce" />
                      </button>
                    </div>
                  </div>
                  {/* Experience Section */}
                  <div id="experience" className="relative z-0">
                    <Experience />
                  </div>
                  <div id="skills" className="relative z-0">
                    <Skills />
                  </div>
                  {/* Projects Section */}
                  <div id="projects" className="relative z-0">
                    <Projects />
                  </div>
                  {/* Contact Section */}
                  <div id="contact" className="relative z-0">
                    <Contact />
                  </div>
                </div>
              }
            />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} /> {/* Add Skills route */}
          </Routes>
          {/* Footer */}
          <div className="relative z-0">
            <Footer />
          </div>
        </div>
        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          buttonPosition={buttonPosition}
        >
          <div
            className="
      w-full
      max-w-6xl
      mx-auto
      max-h-[90vh]
      
      px-4 sm:px-6 md:px-10
    "
          >
            <AboutMe />
          </div>
        </Modal>


      </div>
    </Router>
  );
};

export default App;
