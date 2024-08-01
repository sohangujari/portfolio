import React from 'react'

function Experience({id}) {
  return (
    <div id={id} className='mt-28 mr-28 mb-20 ml-28 pt-20'>
        <h2 className='font-inter text-4xl text-white font-medium mb-10'>Experience</h2>
        <div className='flex p-5'>
            <p className='font-inconsolata text-3xl text-neutral-200 text-nowrap mr-10'>Jan 2024 - Jul 2024</p>
            <div>
                <h3 className='font-inter text-3xl text-white font-medium mr-10 mb-5'>Full Stack Developer · K3Y Technology Services PVT LTD</h3>
                <p className='font-inconsolata text-3xl text-neutral-200 mb-5'>With expertise in Django, React.js, and Tailwind CSS, I created RESTful APIs, handled PostgreSQL, used Figma and Miro to streamline UI/UX, and created scalable, responsive websites with excellent code quality and seamless integration.</p>
            </div>
        </div>

    <div className='flex p-5'>
        <p className='font-inconsolata text-3xl text-neutral-200 text-nowrap mr-10'>Dec 2022 - Jul 2023</p>
        <div>
            <h3 className='font-inter text-3xl text-white font-medium mr-10 mb-5'>Web Developer · Shrimali Media</h3>
            <p className='font-inconsolata text-3xl text-neutral-200 mb-5'>Worked at Shrimali Media on various client projects including building an artist portfolio website, a jewellery e-commerce site, and other websites.</p>
        </div>
    </div>

    <div className='flex p-5'>
        <p className='font-inconsolata text-3xl text-neutral-200 text-nowrap mr-10'>Dec 2022 - Mar 2023</p>
        <div>
            <h3 className='font-inter text-3xl text-white font-medium mr-10 mb-5'>Web Developer · Koverify/Besick</h3>
            <p className='font-inconsolata text-3xl text-neutral-200 mb-5'>Designed, built, and optimized responsive ecommerce website for Koverify/Besick Clothing, including front-end architecture, UI/UX, integrated payments, and 3x faster load times through caching, image optimization, and CDN.</p>
        </div>
    </div>
    </div>
  )
}

export default Experience