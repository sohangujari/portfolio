import React from 'react'
import { TypeAnimation } from 'react-type-animation';

// Icons
import faceIcon from "../assets/FaceIcon.svg";

// Data
const Expertise = ['Full-Stack Web Developer', 500, 'Data Analyst', 500, 'Machine Learning Engineer', 500];

function Intro({ id }) {
  return (
    <div id={id} className="flex flex-col items-center pt-48 gap-9">
        <img src={faceIcon} alt="Face Icon" className='w-64 h-64' />
        <h1 className='font-inconsolata text-5xl text-center text-white'>Hi, I,m Sohan Gujari <br /> A {" "}
        {/* <TypeAnimation
          sequence={Expertise}
          repeat={Infinity}
        /> */}Full-Stack Web Developer
        </h1>
        <a href="#" className='font-inconsolata text-3xl bg-white text-[#050F21] p-3.5 rounded-lg'>Connect with me</a>
    </div>
  )
}

export default Intro