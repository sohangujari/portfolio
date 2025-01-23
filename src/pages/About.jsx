import React from 'react'

function About({ id }) {
  return (
    <div id={id} className="mt-16 mr-8 mb-12 ml-8 pt-12 sm:mt-20 sm:mr-12 sm:ml-12 sm:mb-16 sm:pt-16 md:mt-28 md:mr-28 md:ml-28 md:mb-20 md:pt-20">
        <h2 className="font-inter text-3xl sm:text-4xl md:text-4xl text-white font-medium mb-6 sm:mb-8 md:mb-10">About Me</h2>
        <div className="font-inconsolata text-lg sm:text-xl md:text-2xl text-neutral-200 text-justify">
            <p className="mb-4">I am a Full-stack web developer passionate about innovative and user-friendly web applications, with experience in a wide range of projects.</p>
            <p className="mb-4">Front-end: Visually appealing and interactive user interfaces with HTML, CSS, Bootstrap, JavaScript, and React. Back-end: Robust and scalable back-end systems with PHP, MySQL, Node.js, Express.js, and MongoDB. Also cloud platforms such as AWS and Azure.</p>
            <p>I am a strong communicator and team player with a passion for building complete web solutions. I am eager to take on new challenges and learn, committed to delivering high-quality products with great UX.</p>
        </div>
    </div>
  )
}

export default About
