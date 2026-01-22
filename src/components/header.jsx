import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between items-center text-white w-full p-4 sm:p-5">
      <h3 className="text-lg sm:text-xl cursor-pointer">
        <span className="text-yellow-500">Ap</span>urba
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-base sm:text-lg">
        <a
          href="https://www.linkedin.com/in/apurba-pal-642729265/"
          className="text-yellow-500 hover:text-orange-500"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/apurba-pal"
          className="text-yellow-500 hover:text-orange-500"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/apurba__pal/"
          className="text-yellow-500 hover:text-orange-500"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:palapurba2004@gmail.com"
          className="text-yellow-500 hover:text-orange-500"
          target="_blank"
        >
          <SiGmail />
        </a>
      </div>
    </div>
  )
}

export default Header
