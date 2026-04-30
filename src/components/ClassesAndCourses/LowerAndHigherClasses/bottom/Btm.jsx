import { useState } from "react"
import {lowerClassesData} from "../../../../data/classes.js"
import {higherClassesData} from "../../../../data/classes.js"
import ClassCards from './ClassCards'


const Btm = () => {
    const [data, setdata] = useState(lowerClassesData)
    
   const updateDatatoLower = () => {
    if(data === higherClassesData){
      setdata(lowerClassesData);
    }
    else {
      return;
    }
  }

  const updateDatatoHigher = () => {
    if(data === lowerClassesData) {
      setdata(higherClassesData);
    }
    else {
      return;
    }
  }
 
  return (
    <div className="flex justify-center h-[60%]">
      <div className="flex flex-col w-[80%] h-full justify-center items-center">
      <div className="h-20 flex gap-10 items-center">
        <button className="bg-[#f69d11] w-70 py-2 font-bold text-xl text-[#0e162a] rounded-[10px] classesBtn" onClick={updateDatatoLower}>Lower Classes (1st - 8th)</button>
        <button  className="bg-[#f69d11] w-70 py-2 font-bold text-xl text-[#0e162a] rounded-[10px] btn2" onClick={updateDatatoHigher}>Higher Classes (9th - 12th)</button>
      </div>
      <div className=" flex items-center">
        <ClassCards data={data}/>
      </div>
      </div>
    </div>
  )
}

export default Btm