import React from 'react'
import CenterSection from "../hero-center/center.jsx"
import HeroBtns from '../hero-center/heroBtns.jsx'


const hero = () => {
  return (
    <div className='pt-15 flex flex-col max-emd:gap-10'>
        <CenterSection />
        <HeroBtns />
       
    </div>
  )
}

export default hero