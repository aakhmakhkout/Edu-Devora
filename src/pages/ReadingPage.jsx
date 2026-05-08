import Reading from "../components/ReadingSection/Reading.jsx"
import DevoraRS from "../components/ReadingSection/DevoraRS.jsx"
import { Link, useParams } from "react-router-dom"
import { House } from "lucide-react"
import {classDetails } from "../data/classes.js"
import {courseDetails} from "../data/courses.js"


const ReadingPage = () => {
    const urlData = useParams()
    const {id, rpId} = urlData

      const result = (classDetails.find(items => items.id === id) || courseDetails.find(items2 => items2.id === parseInt(id)));

  const isCourse = result.type === "course"
  return (
    <div className="bg-[#080f21] min-h-screen text-white flex flex-col justify-center items-center w-full">
        
        <div className="h-20 w-[95%] text-white/80 flex items-center gap-3 ">
        <div className="flex items-end gap-2">
        <House size={25} strokeWidth={1.25} />
        <Link to="/">Home</Link>
        </div>
        <p>{`>`}</p>
        <Link to={isCourse ? "/#Courses" : "/#Classes"}>{isCourse ? "Courses" : "Classes"}</Link>
        <p>{`>`}</p>
        <Link to={`/${id}`}>{isCourse ? result.courseName : result.title}</Link>
        <p>{`>`}</p>
        <Link to="#">{rpId}</Link>
      </div>
      
        <div className="flex justify-evenly w-full">
        <Reading />
        <DevoraRS />
        </div>

        <div>
            <Link to="futureupdates">Future Updates</Link>
        </div>
    </div>
  )
}

export default ReadingPage