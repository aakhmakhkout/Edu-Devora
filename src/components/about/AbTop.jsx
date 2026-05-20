import React from 'react'
import AboutImg1 from "../../assets/about_1.png"
import Featurecards from './Featurecards'


const AboutUs = ({data}) => {
  return (
   <div className='flex justify-center min-h-150'>
      <div className='flex w-[90%] h-full justify-between max-lg:relative'>
        <div className='flex flex-col justify-evenly w-[50%] max-2xl:w-[60%] max-lg:w-[90%] max-xl:gap-5 h-full'>
        <div className='flex flex-col gap-7 max-lg:w-[60%]'>
            <h1 className='text-6xl font-bold max-lg:text-4xl max-emd:text-2xl'><span className='border-b-4 border-b-[#6464dc] rounded-b-sm'>About</span> <span className='text-[#f69d11]'>Edu-Devora</span></h1>
            <p className='text-white/80 max-xl:text-sm'>This platform is built with a simple goal — to make learning clear, practical, and accessible. Every class, note, and feature is carefully designed to help students understand concepts easily and progress step by step without confusion or unnecessary complexity.</p>
        </div>
          <Featurecards data={data} />
        </div>

        <div className='flex justify-center items-center aboutimages2 max-lg:absolute max-lg:right-2'>
          <img src={AboutImg1} alt="about image"/>
        </div>
      </div>
   </div>
  )
}

export default AboutUs