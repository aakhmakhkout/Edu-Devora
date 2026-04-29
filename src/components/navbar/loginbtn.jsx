import { Link } from 'react-router-dom'

const Loginbtn = () => {
  return (
    <div className='bg-[#f69d11] h-12 w-40 flex justify-center items-center rounded-xl mr-5 loginbtn'> 
    <Link to="login" className='text-xl font-bold'>Login/SignUp</Link>
    </div>
  )
}

export default Loginbtn