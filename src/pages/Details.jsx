import Top from "../components/Details/Top/Top.jsx"
import Bottom from "../components/Details/Bottom/Bottom.jsx"
import {classDetails } from "../data/classes.js"
import {courseDetails} from "../data/courses.js"
import {Link, useParams} from "react-router-dom"
import { House } from "lucide-react"
import Devora from "../components/navbar/devora.jsx"


const ClassDetails = () => {
  const urlSearch = useParams()
  const {id} = urlSearch

  const result = (classDetails.find(items => items.id === id) || courseDetails.find(items2 => items2.id === parseInt(id)));

  const isCourse = result.type === "course"

  return (
    <div className="bg-[#080f21] min-h-screen flex flex-col items-center relative">
      <div className="fixed bottom-10 right-10">
        <Devora />
      </div>
      <div className="h-20 w-[80%] text-white/80 flex items-center gap-3 ">
        <div className="flex items-end gap-2">
        <House size={25} strokeWidth={1.25} />
        <Link to="/">Home</Link>
        </div>
        <p>{`>`}</p>
        <Link to={isCourse ? "/#Courses" : "/#Classes"}>{isCourse ? "Courses" : "Classes"}</Link>
        <p>{`>`}</p>
        <Link to="#">{isCourse ? result.courseName : result.title}</Link>
      </div>

    <div className=" flex flex-col items-center min-h-screen text-white justify-around gap-10">
      <Top data={{result}}/>
      <Bottom data ={{result}}/>
    </div>
    </div>
  )
}

export default ClassDetails