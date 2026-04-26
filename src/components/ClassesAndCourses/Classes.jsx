import LowerClassesImg from "../../assets/lowerclasses.png"
import HigherClassesImg from "../../assets/higherclasses.png"
import {Link} from "react-router-dom";

const Classes = () => {
   
  return (
<div className=' flex flex-col justify-center items-center h-screen bg-[#050915]' id="Classes">
    <div className='flex justify-center '>
    <h1 className='flex justify-center bg-[#f69d11] w-80 rounded-t-4xl py-5 text-5xl font-extrabold text-[#0e162a]'>Classes</h1>
    </div>


    <div className='bg-[#0f172b] h-170 w-[80%] text-white classesDiv backdrop-blur-md flex justify-evenly items-center rounded-md borders'>

        <div className=' bg-black/20 w-[45%] h-150 flex flex-col rounded-xl backdrop-blur-md border border-white/20 shadow-md justify-evenly CCards'>

            <div className=' h-15 flex items-center justify-between bg-[#f69d11] rounded-md   mx-2 px-3'>
                <h1 className='text-2xl font-bold text-[#0e162a]'>Lower Classes</h1>
                <h1 className='text-2xl font-bold text-[#0e162a]'>( 1st-8th )</h1>
            </div>

            <div className=' px-5  flex flex-col rounded-xl justify-between items-center gap-5'>
                <div className="h-50">
                    <img src={LowerClassesImg} alt="img"  className="w-100 rounded-xl lImg"/>
                </div>

                <div className="bg-[#0f172b] w-full h-40 py-5 flex justify-center items-center gap-5 flex-wrap rounded-2xl lbtnsDiv backdrop-blur-md borders">
                    <Link className="lbtn" to="ist" target="_blank">1st</Link>
                    <Link className="lbtn" to="second" target="_blank">2nd</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">3rd</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">4th</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">5th</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">6th</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">7th</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">8th</Link>
                </div>
            </div>
            <div className=' flex justify-center'>
               <p className="bg-black/20 w-[80%] px-5 py-2 backdrop-blur-md borders rounded-md text-[#d5eff8] font-bold ">Build strong foundations with books and notes for classes 1st–8th. Designed for easy understanding and early learning.</p>
            </div>
        </div>

          <div className=' bg-black/20 w-[45%] h-150 flex flex-col rounded-xl backdrop-blur-md border border-white/20 shadow-md justify-evenly CCards'>

            <div className=' h-15 flex items-center justify-between bg-[#f69d11] rounded-md  mx-2 px-3'>
                <h1 className='text-2xl font-bold text-[#0e162a]'>Higher Classes</h1>
                <h1 className='text-2xl font-bold text-[#0e162a]'>( 9th-12th )</h1>
            </div>

            <div className=' px-5  flex flex-col rounded-xl justify-between items-center gap-5'>
                <div className="h-50">
                    <img src={HigherClassesImg} alt="img"  className="w-90 rounded-xl lImg"/>
                </div>

                <div className="bg-[#0f172b] w-full h-40 py-5 flex justify-center items-center gap-5 flex-wrap rounded-2xl lbtnsDiv backdrop-blur-md borders">
                    <Link className="lbtn" to="ninth" target="_blank">9th</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">10th</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">11th</Link>
                    <Link className="lbtn" to="underdevelopment" target="_blank">12th</Link>
                </div>
            </div>
            <div className=' flex justify-center'>
               <p className="bg-black/20 w-[80%] px-5 py-2 backdrop-blur-md shadow-md borders rounded-md text-[#d5eff8] font-bold">Access detailed notes and study material for classes 9th–12th. Focused on exams, concepts, and performance.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Classes