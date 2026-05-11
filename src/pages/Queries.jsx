import { useContext } from "react"
import { QueryDetails } from "../context/queriesData"
import {Link} from "react-router-dom"
import { House } from "lucide-react"

const Queries = () => {
  const {createQuery, setcreateQuery} = useContext(QueryDetails)
  return (
    <div className="bg-[#0e162a] max-h-screen h-screen">
       <div className="h-20 w-[80%] text-white/80 flex items-center gap-3 ">
        <div className="flex items-end gap-2">
        <House size={25} strokeWidth={1.25} />
        <Link to="/">Home</Link>
        </div>
        <p>{`>`}</p>
        <Link to="/">Quries</Link>
      </div>
    </div>
  )
}

export default Queries