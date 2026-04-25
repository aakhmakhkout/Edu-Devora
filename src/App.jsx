import React from 'react'
import Home from "./pages/home.jsx"
import ClassesAndCourses from './components/ClassesAndCourses/ClassesAndCourses.jsx'
import AboutUs from './components/about/AboutandTech.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import Ist from "./pages/lowerclasses/ist.jsx"
import Second from "./pages/lowerclasses/second.jsx"
import Ninth from "./pages/higherclasses/Ninth.jsx"
import UnderDevelopment from "./pages/underDevelopment.jsx"
import Login from './pages/login.jsx'
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/ist"  element={<Ist />}/>
        <Route path="/second"  element={<Second />}/>
        <Route path="/ninth"  element={<Ninth />}/>
        <Route path="/underdevelopment"  element={<UnderDevelopment />}/>
        <Route path="/login"  element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App