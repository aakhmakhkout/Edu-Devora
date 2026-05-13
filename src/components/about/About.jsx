import React from 'react'
import AboutTop from './AbTop'
import AbCards from './AbCards'
import { aboutCardData } from "../../data/about.js"
import {aboutData} from '../../data/about.js'

const About = () => {
  return (
    <div className='min-h-screen w-full bg-[#0e162a] text-white flex flex-col justify-evenly max-xl:py-5'>
        <AboutTop data={aboutData}/>
        <AbCards data={aboutCardData}/>
    </div>
  )
}

export default About