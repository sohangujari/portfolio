import React from 'react'
import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";

const Navbar = () => {
  return (
    <div className='fixed w-full flex justify-between items-center px-10 py-5 border-b border-white z-10 bg-gray-800 bg-opacity-40 backdrop-blur-lg'>
      {/* <div class="logo-icon"></div> */}
      <span className='font-inconsolata text-neutral-200 text-3xl'>[Sohan]</span>
      <nav className='flex gap-10 font-inconsolata text-white text-2xl'>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#">Contact</a>
      </nav>
      {/* <a href="#" class="cv-button">Download CV</a> */}
      <button><img src={Light} alt="Mode" /></button>
    </div>
  )
}

export default Navbar