import Top from "../components/Details/Top/Top.jsx"
import {classDetails } from "../data/classes.js"
import {courseDetails} from "../data/courses.js"
import {useParams} from "react-router-dom"


const ClassDetails = () => {
  const urlSearch = useParams()
  const {id} = urlSearch
  return (
    <div className="bg-[#080f21] min-h-screen">
      <div>
        
      </div>
    <div className=" flex flex-col items-center text-white">
      <Top urlId={id} data={{classDetails, courseDetails}}/>
    </div>
    </div>
  )
}

export default ClassDetails