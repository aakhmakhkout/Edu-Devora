import React from 'react'
import Home from "./pages/home.jsx"
import ClassesAndCourses from './components/ClassesAndCourses.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactUs from './components/ContactUs.jsx'
import Login from './pages/login.jsx'
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login"  element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App