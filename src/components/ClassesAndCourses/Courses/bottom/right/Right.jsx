import React from 'react'
import Bookmarks from './Bookmarks.jsx'
import Stats from './stats.jsx'
import {courseData} from "../../../../../data/courses.js"

const Right = ({bmkData}) => {
  return (
    <div className='w-70 flex flex-col gap-10'>
        <Bookmarks bmData = {bmkData} CData= {courseData}/>
        <Stats />
    </div>
  )
}

export default Right