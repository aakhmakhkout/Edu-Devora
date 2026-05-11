import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navlinks = () => {
  const [isActive, setisActive] = useState("Home")
  return (
    <div className='min-w-[40%] max-w-[50%] flex items-center justify-center navlinks rounded-2xl'>
         <ul className=' flex justify-evenly items-center w-full text-xl h-15  text-[#c2c0e7cc]'>

          <li><a className={isActive === "Home" ? "nl" : null} href="#" onClick={()=> setisActive("Home")}>Home</a></li>
          <li><a className={isActive === "Classes" ? "nl" : null} href="#Classes" onClick={()=> setisActive("Classes")} >Classes</a></li>
          <li><a className={isActive === "Courses" ? "nl" : null} href="#Courses" onClick={()=> setisActive("Courses")} >Courses</a></li>
          <li><a className={isActive === "Contact" ? "nl" : null} href="#Contact" onClick={()=> setisActive("Contact")}>Contact</a></li>         
         </ul>
        </div>
  )
}

export default Navlinks