import React from 'react'
import {Search} from "lucide-react"

const CoursesSearch = () => {
  return (
       <div className='w-200'>
        <div className="bg-black/20 h-17 flex justify-center rounded-[10px] borders backdrop-blur-md shadow-md">
            <form className="flex justify-around items-center w-full relative">
                <div className=" absolute left-8 text-white/60 z-10">
                <Search size={25} strokeWidth={1.5} />
                </div>
            <input type="text"  placeholder='Search course by name (e.g BCA, BBA etc)' className="bg-[#081430] w-[75%] h-10 text-center outline-none rounded-[10px] border border-white/15 classesSearch text-white" maxLength={10}/>
            <button className="bg-[#f69d11] px-5 py-2 rounded-lg text-[#0e162a] font-bold classesBtn active:scale-95">Search</button>
            </form>

        </div>
    </div>
  )
}

export default CoursesSearch