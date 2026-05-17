import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navlinks = () => {
  const [isActive, setisActive] = useState("Home")
  const [isBurgerClose, setisBurgerClose] = useState(true);
  const navLinks = [
    {
      id:1,
      nav: "Home",
      address: "#"
    },
    {
      id:2,
      nav: "Classes",
      address: "#Classes"
    },
    {
      id:3,
      nav: "Courses",
      address: "#Courses"
    },
    {
      id:4,
      nav: "Contact",
      address: "#Contact"
    },
  ]

  const RenderNavLinks = () => {
    return navLinks.map(({id, nav, address})=> {
      return <li key={id}><a className={isActive === nav ? "nl" : null} href={address} onClick={()=> setisActive(nav)}>{nav}</a></li>
    })
  }

  return (
    <div className='min-w-[40%] max-w-[50%] flex items-center justify-center navlinks rounded-2xl'>
         <ul className=' flex justify-evenly items-center w-full text-xl h-15  text-[#c2c0e7cc] max-md:hidden'>
          <RenderNavLinks/>
         </ul>

         <div className='md:hidden max-md:block text-white'>
          <div className=''>
            <button onClick={()=> {
              if(isBurgerClose) {
                setisBurgerClose(false)
              }
              else {
                setisBurgerClose(true)
              }
            }}>Menu</button>
            <div className={`bg-[#030a1cca] h-60 w-full absolute left-0 top-15 flex flex-col ${isBurgerClose ? "BurgerClose" : "BurgerOpen"}`}>
            <ul className='flex flex-col justify-evenly w-full h-full items-center'>
              <RenderNavLinks />
            </ul>
            </div>
          </div>
         </div>
        </div>
  )
}

export default Navlinks