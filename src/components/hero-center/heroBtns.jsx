import React from 'react'

const heroBtns = () => {
  return (
    <div className=' w-220 h-15 flex justify-center items-center'>

        <div className=' w-100 flex justify-evenly items-center h-full herobtns'>

            <button className='bg-[#f69d11] px-3 py-2 rounded-xl text-[#0e162a] font-bold btn1 active:scale-95'>Apply Now</button>

            <button className='btn2 active:scale-95 font-bold rounded-xl px-3 py-2'><a href="#About">Read More</a></button>
        </div>
    </div>
  )
}

export default heroBtns