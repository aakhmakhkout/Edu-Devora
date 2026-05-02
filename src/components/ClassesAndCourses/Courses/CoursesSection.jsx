import React, { useState } from 'react'
import CoursesTop from './Top/CoursesTop.jsx'
import SaC from './SearchAndCatagories/SaC.jsx'
import Bottom from './bottom/Bottom.jsx'
import { courseData } from '../../../data/courses.js'

const CoursesSection = () => {
    const initialData = {
      startidx: 0,
      endidx:8,
      currentPage: 1
    }
  const [CatagData, setCatagData] = useState("All Catagories")
  const [indexes, setIndexes] = useState(initialData)
  // console.log(CatagData)
  return (
    <div className='min-h-screen bg-[#0e162a] w-full flex flex-col items-center justify-center'>
        <div className='w-[90%] h-full'>
            <CoursesTop />
            <SaC state = {{CatagData, setCatagData}} indexesState = {{indexes, setIndexes}}/>
            <Bottom coursedata = {courseData} state = {CatagData} indexesState = {{indexes, setIndexes}}/>
        </div>
    </div>
  )
}

export default CoursesSection