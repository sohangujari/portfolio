import React from 'react'
import { TypeAnimation } from 'react-type-animation';

// Icons
import faceIcon from "../assets/FaceIcon.svg";

// Data
const Expertise = ['Full-Stack Web Developer', 500, 'Data Analyst', 500, 'Machine Learning Engineer', 500];

function Intro({ id }) {
  return (
    <div id={id} className="flex flex-col items-center pt-48 gap-9 px-4">
        <img src={faceIcon} alt="Face Icon" className="w-64 h-64 md:w-72 md:h-72" />
        <h1 className="font-inconsolata text-3xl text-center text-white md:text-4xl">
            Hi, I’m Sohan Gujari <br /> A {" "}
            {/* <TypeAnimation
                sequence={Expertise}
                repeat={Infinity}
            /> */}Full-Stack Web Developer
        </h1>
        <a 
          href="https://www.linkedin.com/in/sohangujari/" 
          target="_blank" 
          className="font-inconsolata text-2xl bg-white text-[#050F21] p-3.5 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-[#7839EE] hover:text-white hover:scale-105 md:text-3xl md:p-4"
        >
          Connect with me
        </a>
    </div>
  )
}

export default Intro
