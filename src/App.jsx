import React from 'react'
import Home from "./pages/home.jsx"
import ClassesAndCourses from './components/ClassesAndCourses/ClassesAndCourses.jsx'
import AboutUs from './components/about/About.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import Ist from "./pages/lowerclasses/ist.jsx"
import Second from "./pages/lowerclasses/second.jsx"
import Ninth from "./pages/higherclasses/Ninth.jsx"
import UnderDevelopment from "./pages/underDevelopment.jsx"
import Bca from "./pages/courses/Bca.jsx"
import BTech from "./pages/courses/Btech.jsx"
import Login from './pages/login.jsx'
import {Routes, Route} from "react-router-dom"
import Btech from './pages/courses/Btech.jsx'

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="#Classes/ist"  element={<Ist />}/>
        <Route path="/second"  element={<Second />}/>
        <Route path="/ninth"  element={<Ninth />}/>
        <Route path="/underdevelopment"  element={<UnderDevelopment />}/>
        <Route path="/bca"  element={<Bca />}/>
        <Route path="/btech"  element={<Btech />}/>
        <Route path="/login"  element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App