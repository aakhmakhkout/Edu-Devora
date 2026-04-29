import React from 'react'
import AboutImg1 from "../../assets/about_1.png"
import Featurecards from './Featurecards'


const AboutUs = ({data}) => {
  return (
   <div className='flex justify-center h-150'>
      <div className='flex w-[90%] h-full '>
        <div className='flex flex-col justify-evenly w-300 h-full'>
        <div className='flex flex-col gap-7'>
            <h1 className='text-6xl font-bold'><span className='border-b-4 border-b-[#6464dc] rounded-b-sm'>About</span> <span className='text-[#f69d11]'>Edu-Devora</span></h1>
            <p className='text-white/80'>This platform is built with a simple goal — to make learning clear, practical, and accessible. Every class, note, and feature is carefully designed to help students understand concepts easily and progress step by step without confusion or unnecessary complexity.</p>
        </div>
          <Featurecards data={data} />
        </div>

        <div className='flex justify-center items-center aboutimages2'>
          <img src={AboutImg1} alt="about image"/>
        </div>
      </div>
   </div>
  )
}

export default AboutUs