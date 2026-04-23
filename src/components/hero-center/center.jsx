import React from 'react'
import centerImg from "../../assets/hero.png"

const center = () => {
  return (
    <div className=' h-120 flex justify-evenly items-center'>

      <div className=' h-full w-[40%] flex flex-col justify-evenly'>
        <h1 className='text-7xl font-extrabold text-[#6464dc]'>Your Learning Journey Starts Here</h1>
        <h3 className='text-white/80 font-bold text-5xl'>Master concepts, build skills, and achieve your goals from the comfort of your home</h3>
        
        <div className='text-white animated-Text'>
        <p>We provide complete learning support from class <span className='text-2xl font-bold text-[#f69d11]'>Ist to 12th</span></p>
        <p>Along with professional courses like <span className='text-2xl font-bold text-[#f69d11]'>BCA, BBA, B.Sc Nursing, B.Tech</span> etc</p>
        </div>
      </div>


      <div className='heroImgDiv'>
        <img src={centerImg} alt="HeroImg" className='w-120 object-cover rounded-[30px]'/>
      </div>
    </div>


  )
}

export default center