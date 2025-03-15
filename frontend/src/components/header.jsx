import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <div className='flex justify-between align-middle text-white w-screen p-10'>
      <h3 className='text-xl cursor-pointer'>
        <span className="text-yellow-500">Ap</span>urba
      </h3>
      <div className='flex justify-center align-middle gap-10 text-xl'>
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
          href="https://www.instagram.com/apurba.pal/"
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
