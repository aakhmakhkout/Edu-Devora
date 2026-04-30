import React from 'react'
import Home from "./pages/home.jsx"
import Classes from './components/ClassesAndCourses/LowerAndHigherClasses/Classes.jsx'
import ClassCards from './components/ClassesAndCourses/LowerAndHigherClasses/bottom/ClassCards.jsx'
import AboutUs from './components/about/About.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import AllClasses from './pages/ClassPage/AllClasses.jsx'
import UnderDevelopment from "./pages/underDevelopment.jsx"
import Login from './pages/login.jsx'
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path="/"  element={<Home />}/>
        {/* <Route path="/:type" element={<Classes />} /> */}
        {/* <Route path="/Classes/:classid" element={<AllClasses />}/> */}
        <Route path="/underdevelopment"  element={<UnderDevelopment />}/>
        <Route path="/login"  element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App