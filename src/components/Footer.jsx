import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (


    <footer className="bg-transparent text-yellow-500 py-4 w-full">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10">
        {/* Left Section: Name */}
        <div className="text-sm font-semibold mb-2 sm:mb-0">
          Apurba Pal
        </div>

        {/* Center Section: Copyright */}
        <div className="text-sm text-gray-400 text-center mb-2 sm:mb-0">
          Developed By Apurba Pal || © {new Date().getFullYear()}
        </div>

        {/* Right Section: Up Arrow */}
        <button
          onClick={scrollToTop}
          className="text-yellow-500 hover:text-orange-500 text-xl bg-transparent border-none outline-none"
          title="Go to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
