import React from 'react'
import CoursesSearch from './CoursesSearch.jsx'
import Catagories from './Catagories.jsx'
import { CourseCatagories } from '../../../../data/courses.js'

const SaC = () => {
  return (
    <div className='w-full h-20 bg-[#45438125] flex items-center justify-between rounded-[10px] border border-white/10 coursesSaC'>
        <CoursesSearch />
        <Catagories ctgData={CourseCatagories}/>
    </div>
  )
}

export default SaC