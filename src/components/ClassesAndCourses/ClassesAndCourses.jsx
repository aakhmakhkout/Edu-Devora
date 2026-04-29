import React from 'react'
import Classes from './Classes.jsx'
import Courses from "./Courses.jsx"
import CourseData from "../../data/courses.js"
console.log(CourseData)


const ClassesAndCourses = () => {
  return (
    <div className=' classesDiv'>
       <Classes />
      
       <Courses  data={CourseData}/>
  
    </div>
  )
}

export default ClassesAndCourses