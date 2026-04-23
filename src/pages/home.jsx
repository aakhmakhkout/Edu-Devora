import React from 'react'
import Hero from "../components/hero/hero.jsx"
import ClassesAndCourses from '../components/ClassesAndCourses.jsx'
import AboutUs from '../components/AboutUs.jsx'
import { Outlet } from 'react-router-dom'
import ContactUs from '../components/ContactUs.jsx'
import Facilities from '../components/hero-facilities/facilities.jsx'


const home = () => {
 
  return (
    <div>
      <section className='' id="Hero">
        <Hero />
      </section>

    <section id="facilities">
      <Facilities />
    </section>

      <section id="About">
        <AboutUs />
      </section>

      <section id="ClassesAndCourses">
        <ClassesAndCourses />
      </section>

      <section id="Contact">
        <ContactUs />
      </section>

    </div>
  )
}

export default home