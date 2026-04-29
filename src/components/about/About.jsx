import React from 'react'
import AboutTop from './AbTop'
import AbCards from './AbCards'
import { aboutCardData } from "../../data/about.js"
import {aboutData} from '../../data/about.js'

const About = () => {
  return (
    <div className='h-screen w-full bg-[#0e162a] text-white flex flex-col justify-evenly'>
        <AboutTop data={aboutData}/>
        <AbCards data={aboutCardData}/>
    </div>
  )
}

export default About