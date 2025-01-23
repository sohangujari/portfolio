import React from 'react'

function Experience({ id }) {
  return (
    <div id={id} className="mt-16 mr-8 mb-12 ml-8 pt-12 sm:mt-20 sm:mr-12 sm:ml-12 sm:mb-16 sm:pt-16 md:mt-28 md:mr-28 md:ml-28 md:mb-20 md:pt-20">
        <h2 className="font-inter text-3xl sm:text-4xl md:text-4xl text-white font-medium mb-6 sm:mb-8 md:mb-10">Experience</h2>
        
        <div className="flex flex-col sm:flex-row p-4 sm:p-5 mb-6">
            <p className="font-inconsolata text-xl sm:text-2xl md:text-3xl text-neutral-200 text-nowrap sm:mr-8 md:mr-10 mb-4 sm:mb-0">Jan 2024 - Jul 2024</p>
            <div>
                <h3 className="font-inter text-2xl sm:text-3xl md:text-3xl text-white font-medium mb-4 sm:mb-5">Full Stack Developer · K3Y Technology Services PVT LTD</h3>
                <p className="font-inconsolata text-lg sm:text-xl md:text-2xl text-neutral-200 mb-4 sm:mb-5">With expertise in Django, React.js, and Tailwind CSS, I created RESTful APIs, handled PostgreSQL, used Figma and Miro to streamline UI/UX, and created scalable, responsive websites with excellent code quality and seamless integration.</p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row p-4 sm:p-5">
            <p className="font-inconsolata text-xl sm:text-2xl md:text-3xl text-neutral-200 text-nowrap sm:mr-8 md:mr-10 mb-4 sm:mb-0">Dec 2022 - Mar 2023</p>
            <div>
                <h3 className="font-inter text-2xl sm:text-3xl md:text-3xl text-white font-medium mb-4 sm:mb-5">Web Developer · Koverify/Besick</h3>
                <p className="font-inconsolata text-lg sm:text-xl md:text-2xl text-neutral-200 mb-4 sm:mb-5">Designed, built, and optimized responsive ecommerce website for Koverify/Besick Clothing, including front-end architecture, UI/UX, integrated payments, and 3x faster load times through caching, image optimization, and CDN.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
