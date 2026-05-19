import React from 'react'
import Bookmarks from './Bookmarks.jsx'
import Stats from './stats.jsx'
import {courseData} from "../../../../../data/courses.js"

const Right = ({bmkData}) => {
  return (
    <div className='flex flex-col gap-10 w-[20%] max-lg:flex-row max-lg:justify-between max-lg:pb-10 max-lg:w-full'>
        <Bookmarks bmData = {bmkData} CData= {courseData}/>
        <Stats />
    </div>
  )
}

export default Right