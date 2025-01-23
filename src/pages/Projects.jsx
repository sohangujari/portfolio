import React from 'react'
// import Tilt from 'react-parallax-tilt';
// Data
import projects from "../data/projects";

function Projects({ id }) {
  return (
    <div id={id} className="mt-16 mr-8 mb-12 ml-8 pt-12 sm:mt-20 sm:mr-12 sm:ml-12 sm:mb-16 sm:pt-16 md:mt-28 md:mr-28 md:ml-28 md:mb-20 md:pt-20">
        <h2 className="font-inter text-3xl sm:text-4xl md:text-4xl text-white font-medium mb-6 sm:mb-8 md:mb-10">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col gap-4 items-start">
                    {/* <Tilt tiltReverse={true}>
                        <img src={project.image} alt="" className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg" />
                    </Tilt> */}
                    <span className="font-inconsolata text-white text-2xl sm:text-3xl md:text-4xl">{project.name}</span>
                    <p className="font-inconsolata text-white text-lg sm:text-xl md:text-2xl">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="font-inconsolata text-white text-sm sm:text-base md:text-lg px-2 py-1 border rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
