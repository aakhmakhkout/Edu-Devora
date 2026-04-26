import React from 'react'
import bca from "../../assets/bca.png"
import btech from "../../assets/btech.png"
import bba from "../../assets/bba.png"
import nursing from "../../assets/nursing.png"
import llb from "../../assets/llb.png"
import ba from "../../assets/ba.png"
import { Link } from 'react-router-dom'


const Courses = () => {
    const CourseCards = [
      {
        id:1,
        src: bca,
        courseName: "BCA",
        path: "bca",
        description: "Software development & computer applications"
      },
      {
        id:2,
        src: btech,
        courseName: "B.Tech",
        path: "btech",
        description: "Engineering, technology & innovation"
      },
      {
        id:3,
        src: bba,
        courseName: "BBA",
        path:"underdevelopment",
        description: "Business management & entrepreneurship"
      },
      {
        id:4,
        src: nursing,
        courseName: "Bsc Nursing",
        path:"underdevelopment",
        description: "Healthcare, patient care & clinical practice"
      },
      {
        id:5,
        src: llb,
        courseName: "LLB",
        path:"underdevelopment",
        description: "Law, justice & legal studies"
      },
      {
        id:6,
        src: ba,
        courseName: "BA",
        path:"underdevelopment",
        description: "Arts, humanities & social sciences"
      },

    ]
  return (
    <div className='h-screen flex justify-center text-white bg-[#0e162a]' id="Courses">
      <div className='w-full h-full flex justify-center flex-col items-center'>

      <div className='flex justify-center bg-[#f69d11] w-80 rounded-t-4xl py-5 text-5xl font-extrabold text-[#0e162a]'>
      Courses
      </div>  

           <div className='flex bg-[#050915] h-[80%] flex-wrap w-[70%] borders backdrop-blur-md justify-evenly items-center rounded-md'>
                {CourseCards.map((values)=> {
                  return <div key={values.id} className='bg-black/30 w-90 h-80 backdrop-blur-md shadow-md border border-white/10 rounded-xl CCards'>
                    <div className='flex flex-col justify-evenly items-center w-full h-full'>
                      <div className='bg-[#0e162a] w-55 h-45 flex justify-center items-center borders rounded-xl'>
                      <img src={values.src} alt="img" className='w-45 '/>
                      </div>
                      <Link className='CoursesBtn' to={values.path}>{values.courseName}</Link>
                      <p className='text-white/70'>{values.description}</p>
                    </div>
                  </div>
                })}
          </div>
      </div>
    </div>
  )
}

export default Courses