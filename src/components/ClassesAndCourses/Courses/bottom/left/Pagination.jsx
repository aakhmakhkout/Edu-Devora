import { ChevronRight, ChevronLeft } from "lucide-react"


const Pagination = () => {
  return (
    <div className='flex w-full h-20 justify-center items-center '>
        <div className="text-[#131938] flex gap-10">
          <button className="bg-[#f69d11] rounded-xl borders courseCards"><ChevronLeft size={40} strokeWidth={2} /></button>
          <button className="bg-[#f69d11] rounded-xl borders courseCards"><ChevronRight size={40} strokeWidth={2} /></button>
        </div>

    </div>
  )
}

export default Pagination