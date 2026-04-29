import { Link } from 'react-router-dom'


const Navlinks = () => {
  return (
    <div className='min-w-[40%] max-w-[50%] flex items-center justify-center navlinks rounded-2xl'>
         <ul className=' flex justify-evenly items-center w-full text-xl h-15 rounded-l-full text-[#c2c0e7cc]'>

          <li><a href="#">Home</a></li>
          <li><a href="#Classes">Classes</a></li>
          <li><a href="#Courses">Courses</a></li>
          <li><a href="#Contact">Contact</a></li>         
         </ul>
        </div>
  )
}

export default Navlinks