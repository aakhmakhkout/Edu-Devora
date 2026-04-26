import React from 'react'
import img from "../../assets/logo2.jpg"
import Gototop from './gototop'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex justify-between h-25'>
      {/* Logo */}
        <div className="flex justify-evenly items-center w-60">
            <img src={img} alt="img"  className='w-15 h-15'/>
            <h1 className='font-bold text-2xl text-[#f69d11]'>Edu-Devora</h1>
        </div>

      {/* Navlinks */}
        <div className='min-w-[40%] max-w-[50%] flex items-center justify-center navlinks'>

         <ul className='bg-[#f69d11] flex justify-evenly items-center w-full text-xl h-15 rounded-l-full text-[#0e162a] font-bold'>

          <li><a href="/">Home</a></li>
          <li><a href="#Classes">Classes</a></li>
          <li><a href="#Courses">Courses</a></li>
          <li><a href="#Contact">Contact</a></li>
          <Link to="login" className='loginbtn'>Login/SignUp</Link>
          
         </ul>
        </div>
        <div className='fixed top-30 right-5'>
          <Gototop />
        </div>
    </div>
  )
}

export default navbar