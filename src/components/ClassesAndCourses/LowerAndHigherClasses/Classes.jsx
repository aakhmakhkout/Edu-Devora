import LowerClassesImg from "../../../assets/lowerclasses.png"
import HigherClassesImg from "../../../assets/higherclasses.png"
import ClassesTop from "./ClassesTop";
import {Link} from "react-router-dom";
import Btm from "./bottom/Btm";

const Classes = () => {
   
  return (
<div className=' min-h-screen bg-[#050915] text-white py-5 max-xl:py-10' id="Classes" >

    <ClassesTop />

    <Btm />
    </div>
  )
}

export default Classes