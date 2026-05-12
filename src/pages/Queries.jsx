import { useContext } from "react"
import { QueryDetails } from "../context/queriesData"
import {Link} from "react-router-dom"
import { House, MessageCircleMore, CircleAlert } from "lucide-react"

const Queries = () => {
  const {createQuery, setcreateQuery} = useContext(QueryDetails)
  return (
    <div className="bg-[#0e162a] h-screen flex flex-col w-full items-center justify-center">
       <div className="h-20 w-[90%] text-white/80 flex items-center gap-3 ">
        <div className="flex items-end gap-2">
        <House size={25} strokeWidth={1.25} />
        <Link to="/">Home</Link>
        </div>
        <p>{`>`}</p>
        <Link to="/">Queries</Link>
      </div>

      <div className="w-[90%] h-[90%] text-white flex flex-col gap-10">
      <div className="flex justify-between h-20 items-center">
        <div>
          <h1 className="text-white text-5xl font-bold mb-2">My <span className="text-[#f69d11]">Queries</span></h1>
          <p className="text-white/70 text-sm">View all the queries you have submitted. (Note: this is just a simulation of how ui/frontend works, no backend is connected with it (yet))</p>
        </div>
        <div>
          <button className="bg-[#f69e112e] py-2 px-5 border border-[#f69d11] rounded-lg text-white font-bold">Clear Queries</button>
        </div>
      </div>

      <div className="bg-[#071027] h-25 flex justify-between items-center px-5 rounded-[10px] border border-white/10 shadow-lg">
        <div className="flex gap-5 items-center">
          <div className="bg-[#161746] p-2 rounded-lg"><MessageCircleMore size={34} strokeWidth={1.5} /></div>
          <div>
            <h1 className="text-lg font-bold">Total Queries</h1>
            <h1 className="text-[#f69d11] font-bold text-4xl">4</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div><CircleAlert size={22} strokeWidth={1} /></div>
          <p className="text-white/60">You can view the status and responses for all your queries below.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Queries