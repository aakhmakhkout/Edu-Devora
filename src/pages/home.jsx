import Hero from "../components/hero/hero.jsx"
import Classes from '../components/ClassesAndCourses/LowerAndHigherClasses/Classes.jsx'
import About from '../components/about/About.jsx'
import { Outlet } from 'react-router-dom'
import ContactUs from '../components/contactUs/ContactUs.jsx'
import Facilities from '../components/hero-facilities/facilities.jsx'
import Navbar from "../components/navbar/navbar.jsx"
import Devora from "../components/navbar/devora.jsx"
import facilityData from "../data/Facility.js"
import CoursesSection from "../components/ClassesAndCourses/Courses/CoursesSection.jsx"



const home = () => {
 
  return (
    <div>
      <section className="sticky top-0 z-100">
          <Navbar />
      </section>

      <section className='fixed bottom-5 right-5 z-50'>
          <Devora />       
      </section>

      <section className='w-full h-[85vh] bg-[#0e162a] hero' id="Hero ">
        <Hero />
      </section>

    <section id="facilities">
      <Facilities data={facilityData}/>
    </section>

      <section id="About">
        <About />
      </section>

      <section id="Classes">
        <Classes />
      </section>

      <section id="Courses">
        <CoursesSection />
      </section>

      <section id="Contact">
        <ContactUs />
      </section>

    </div>
  )
}

export default home