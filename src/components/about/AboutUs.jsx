import React from 'react'
import AboutImg1 from "../../assets/about_1.png"
import AboutImg2 from "../../assets/about_2.png"


const AboutUs = () => {
  const aboutProject = [
    {
      id:1,
      Heading: "Overview",
      Description: {
        des1: "A modern web application designed for a simple and efficient user experience",
        des2: "Focused on solving challenges in managing and organizing digital content"
      }
    },

      {
      id:2,
      Heading: "User Experience",
      Description: {
        des1: "Clean and intuitive interface for ease of use",
        des2: "Smooth, responsive, and distraction-free interaction"
      }
    },

     {
      id:3,
      Heading: "Goal",
      Description: {
        des1: "Built to be practical and easy to use in real-world scenarios",
        des2: "Emphasis on performance, usability, and minimal design"
      }
    }
  ]


  return (
    <div className='h-170 w-full flex flex-col justify-around'>
      <div className='h-20 flex items-center bg-[#2e3771] font-bold text-3xl w-130 justify-center rounded-r-full'>About This Project</div>
      

      <div className='flex justify-evenly h-120 w-full gap-10 '>
          <div className='flex relative w-[50%] h-full  aboutImgs'>

            <div className='absolute left-40 top-5'>
            <img src={AboutImg1} alt="img" className='w-80'/>
            </div>

            <div className='absolute bottom-5 right-40'>
            <img src={AboutImg2} alt="img" className='w-80'/>
            </div>


          </div>

          <div className='w-[50%] h-full'>

              {aboutProject.map((values)=> {
                return <div key={values.id} className='flex flex-col justify-evenly h-40'>
                  <div className='h-33 flex flex-col justify-around '>
                  <h1 className='font-bold text-3xl text-[#f69d11]'>{values.Heading}</h1>

                  <div className='px-5 flex flex-col gap-2 w-170'>
                  <p className='bg-white/10 px-3 py-2 rounded-xl'>{values.Description.des1}</p>
                  <p className='bg-white/10 px-3 py-2 rounded-xl'>{values.Description.des2}</p>
                  </div>
                  </div>
                </div>
              })}
           
          </div>
      </div>
    </div>
  )
}

export default AboutUs