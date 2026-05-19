import React from 'react'
import centerImg from "../../assets/hero.png"

const center = () => {
  return (
    <div className=' md:min-h-120 flex justify-evenly items-center max-md:flex-col max-md:gap-10'>

      <div className=' h-full md:w-[40%] flex flex-col justify-evenly max-md:h-[80%] max-md:px-5 max-md:items-center'>
        <h1 className='xl:text-7xl text-5xl max-md:text-4xl font-extrabold text-[#6464dc] max-emd:text-2xl max-md:text-center'>Your Learning Journey Starts Here</h1>
        <h3 className='text-white/80 font-bold 2xl:text-5xl text-3xl max-md:text-2xl max-md:w-[60%] max-md:text-center max-emd:text-base'>Master concepts, build skills, and achieve your goals from the comfort of your home</h3>
        
        <div className='text-white max-md:text-sm max-md:text-center'>
        <p>We provide complete learning support from class <span className='text-2xl max-md:text-lg font-bold text-[#f69d11]'>Ist to 12th</span></p>
        <p>Along with professional courses like <span className='text-2xl max-md:text-lg font-bold text-[#f69d11]'>BCA, BBA, B.Sc Nursing, B.Tech</span> etc</p>
        </div>
      </div>


      <div className='heroImgDiv w-[25%] max-xl:w-[30%] max-md:w-[50%]'>
        <img src={centerImg} alt="HeroImg" className=' max-lg:w-100 object-cover rounded-[30px]'/>
      </div>
    </div>


  )
}

export default center