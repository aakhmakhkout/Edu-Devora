import logo from "../../assets/logo2.png"
import Gototop from './gototop'
import Navlogo from "./navlogo.jsx"
import Navlinks from "./navlinks.jsx"
import LoginBtn from './loginbtn.jsx'

const Navbar = () => {
  return (
    <div className='flex justify-between h-15 bg-[#030a1c] items-center backdrop-blur-md shadow-md '>
       <Navlogo src={logo}/>
        <Navlinks />        
        <LoginBtn />

        <div className='fixed top-30 right-5'>
          <Gototop />
        </div>
        
    </div>
  )
}

export default Navbar