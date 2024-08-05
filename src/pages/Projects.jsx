import React from 'react'
import Tilt from 'react-parallax-tilt';
// Data
import projects from "../data/projects";

function Projects({id}) {
  return (
    <div id={id} className='mt-28 mr-28 mb-20 ml-28 pt-20'>
        <h2 className='font-inter text-4xl text-white font-medium mb-10'>Projects</h2>
        <div className='grid grid-cols-2 gap-8'>
            {projects.map((project, index) => (
                <div key={index} className='flex flex-col gap-2.5 items-start'>
                    {/* <Tilt tiltReverse={true}>
                        <img src={project.image} alt="" className='w-[550px] h-[350px] object-cover rounded-lg' />
                    </Tilt> */}
                    <span className='font-inconsolata text-white text-3xl'>{project.name}</span>
                    <p className='font-inconsolata text-white text-xl'>{project.description}</p>
                    <div className='flex flex-wrap gap-2'>
                        {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className='font-inconsolata text-white text-xl px-2 py-1 border rounded-full'>{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects