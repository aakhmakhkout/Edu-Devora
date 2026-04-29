import React from 'react'
import AboutTop from './AbTop'
import AbCards from './AbCards'

const About = () => {
  return (
    <div className='h-screen w-full bg-[#0e162a] text-white flex flex-col'>
      <div className='h-30 w-80 flex items-center'><h1 className='w-full h-20 flex justify-center items-center text-5xl font-extrabold bg-[#f69d11] text-[#0e162a] rounded-r-full'>About us</h1></div>
        <AboutTop />
    </div>
  )
}

export default About