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
      <div className="flex flex-col w-[80%] h-full justify-center items-center max-md:w-[90%] max-emd:gap-3">
      <div className="h-20 flex emd:gap-10 max-emd:gap-3 items-center max-emd:flex-col">
        <button className="bg-[#f69d11] w-70 py-2 font-bold text-xl max-md:text-sm max-md:w-50 text-[#0e162a] rounded-[10px] classesBtn" onClick={updateDatatoLower}>Lower Classes (1st - 8th)</button>
        <button  className="bg-[#f69d11] w-70 py-2 font-bold text-xl max-md:text-sm max-md:w-50 text-[#0e162a] rounded-[10px] btn2" onClick={updateDatatoHigher}>Higher Classes (9th - 12th)</button>
      </div>
      <div className=" flex items-center w-full">
        <ClassCards data={data}/>
      </div>
      </div>
    </div>
  )
}

export default Btm