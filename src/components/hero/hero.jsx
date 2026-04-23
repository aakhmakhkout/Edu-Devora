import React from 'react'
import Navbar from "../navbar/navbar.jsx"
import CenterSection from "../hero-center/center.jsx"
import HeroBtns from '../hero-center/heroBtns.jsx'


const hero = () => {
  return (
    <div className='w-full h-[85vh] bg-[#0e162a] hero'>
        <Navbar />
        <CenterSection />
        <HeroBtns />
       
    </div>
  )
}

export default hero