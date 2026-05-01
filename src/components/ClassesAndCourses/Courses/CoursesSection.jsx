import React from 'react'
import CoursesTop from './Top/CoursesTop.jsx'
import SaC from './SearchAndCatagories/SaC.jsx'
import Bottom from './bottom/Bottom.jsx'
import { courseData } from '../../../data/courses.js'

const CoursesSection = () => {
  return (
    <div className='min-h-screen bg-[#0e162a] w-full flex flex-col items-center justify-center'>
        <div className='w-[90%] h-full'>
            <CoursesTop />
            <SaC />
            <Bottom coursedata = {courseData}/>
        </div>
    </div>
  )
}

export default CoursesSection