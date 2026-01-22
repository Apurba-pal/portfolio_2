import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50">
      <button
        onClick={toggleMenu}
        className="p-2 sm:p-4 text-white bg-yellow-500 rounded-md m-2"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-12 sm:top-14 left-0 w-full bg-gray-800 text-white shadow-lg">
          <ul className="flex flex-col items-start p-2 sm:p-4 space-y-2">
            <li>
              <Link to="/" onClick={toggleMenu} className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/experience" onClick={toggleMenu} className="hover:text-yellow-500">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={toggleMenu} className="hover:text-yellow-500">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu} className="hover:text-yellow-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-yellow-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
