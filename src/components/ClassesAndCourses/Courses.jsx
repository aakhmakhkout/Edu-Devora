import { Link } from 'react-router-dom'


const Courses = ({data}) => {
  
  return (
    <div className='h-screen flex justify-center text-white bg-[#0e162a]' id="Courses">
      
      <div className='w-full h-full flex justify-center flex-col items-center'>

      <div className='flex justify-center bg-[#f69d11] w-80 rounded-t-4xl py-5 text-5xl font-extrabold text-[#0e162a]'>
      Courses
      </div>  

           <div className='flex bg-[#050915] h-[80%] flex-wrap w-[70%] borders backdrop-blur-md justify-evenly items-center rounded-md'>
                {data.map((values)=> {
                  return <div key={values.id} className='bg-black/30 w-90 h-80 backdrop-blur-md shadow-md border border-white/10 rounded-xl CCards'>
                    <div className='flex flex-col justify-evenly items-center w-full h-full'>
                      <div className='bg-[#0e162a] w-55 h-45 flex justify-center items-center borders rounded-xl'>
                      <img src={values.src} alt="img" className='w-45 '/>
                      </div>
                      <Link className='CoursesBtn' to={values.path} target='_blank'>{values.courseName}</Link>
                      <p className='text-white/70'>{values.description}</p>
                    </div>
                  </div>
                })}
          </div>
      </div>
    </div>
  )
}

export default Courses