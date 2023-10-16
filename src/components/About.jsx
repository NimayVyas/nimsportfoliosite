import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-blue-600'>
        <div className='flex flex-col justify-center items-center w-full h- h-full'>
            <div className='max-w-[1000px] w-full px-4 gap-8'>
                <div className='text-4xl sm:text-6xl sm:text-center pb-8'>
                    <p className='font-bold inline border-b-4 border-gray-700 hover:border-green-300'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='text-3xl sm:text-5xl font-bold'>
                    <p className='text-gray-400 hover:text-gray-200'>I am a rising senior at the University of Maryland, College Park!</p>
                </div>
                <div className='text-1xl sm:text-1 xl sm:text-left text-1xl'>
                    <p className='text-gray-400 hover:text-gray-200'>I am majoring in Computer Sceince with a minor in Technology 
                    Entrepreneurship and Corporate Innovation. I am very passionate about Computer Science and my interests 
                    include Web Development, App Development, and UI/UX design. I also have soft-corner for entrepreneurship 
                    and am currently a part of the University of Maryland Startup Shell Program. I have been coding for over
                    five years and have experience with a variety of languages, frameworks, and technologies!</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About
