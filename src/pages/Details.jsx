import Top from "../components/Details/Top/Top.jsx"
import Bottom from "../components/Details/Bottom/Bottom.jsx"
import {classDetails } from "../data/classes.js"
import {courseDetails} from "../data/courses.js"
import {useParams} from "react-router-dom"


const ClassDetails = () => {
  const urlSearch = useParams()
  const {id} = urlSearch

  const result = (classDetails.find(items => items.id === id) || courseDetails.find(items2 => items2.id === parseInt(id)));

  return (
    <div className="bg-[#080f21] min-h-screen">
      <div className="h-20">
        
      </div>

    <div className=" flex flex-col items-center min-h-screen text-white justify-around">
      <Top data={{result}}/>
      <Bottom data ={{result}}/>
    </div>
    </div>
  )
}

export default ClassDetails