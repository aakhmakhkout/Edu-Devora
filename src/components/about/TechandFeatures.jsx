import React from 'react'
import reactImg from "../../assets/react.png"
import htmlImg from "../../assets/html.png"
import cssImg from "../../assets/CSS3.png"
import tailwindImg from "../../assets/Tailwind.png"
import devoraImg from "../../assets/ai_2.png"
import PracticeImg from "../../assets/practice.png"

const TechandFeatures = () => {
  const aboutProject = [
    {
      id:1,
      Heading: "Technologies",
      Description: {
        des1: "React for building dynamic and interactive user interfaces",
        des2: "Tailwind CSS for clean and responsive styling"
      }
    },

      {
      id:2,
      Heading: "Smart Features",
      Description: {
        des1: "AI-powered chat system for real-time assistance",
        des2: "Select Text & Ask Devora for instant contextual explanations"
      }
    },

     {
      id:3,
      Heading: "Learning System",
      Description: {
        des1: "Structured courses for guided learning",
        des2: "Practice modules to reinforce concepts"
      }
    }
  ]


  return (
    <div className='h-170 w-full flex flex-col justify-around'>
      <div className='h-20 flex items-center bg-[#2e3771] font-bold text-3xl w-130 justify-center rounded-r-full'>Tech Stack & Features</div>
    

      <div className='flex justify-evenly h-120 w-full gap-10 '>

          <div className='w-[50%] h-full flex flex-col items-center mt-5'>

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


          <div className='flex flex-col w-[50%] h-full  aboutImgs gap-10 justify-center'>

            <div className='flex justify-evenly items-center'>
            <img src={reactImg} alt="img" className='w-40'/>
            <img src={htmlImg} alt="img" className='w-40'/>
            <img src={cssImg} alt="img" className='w-35'/>
            </div>

            <div className='flex justify-evenly items-center'>
            <img src={devoraImg} alt="img" className='w-40'/>
            <img src={tailwindImg} alt="img" className='w-40'/>
            <img src={PracticeImg} alt="img" className='w-35'/>
            </div>

          </div>
      </div>
    </div>
  )
}

export default TechandFeatures