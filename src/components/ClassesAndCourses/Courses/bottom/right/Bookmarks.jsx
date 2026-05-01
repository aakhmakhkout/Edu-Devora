import { BookmarkOff } from "lucide-react"

const Bookmarks = () => {
  return (
    <div className='bg-black/20 text-white rounded-[10px] borders backdrop-blur-md shadow-m h-100 courseCards'>
      <div className='w-full flex justify-center h-15 items-center border-b-2 border-b-[#4d2f976d]'>
        <h1 className='bg-[#f69d11] px-5 py-2 rounded-[10px] text-[#0e162a] font-bold'>Bookmarks</h1>
      </div>

      <div className="flex items-center justify-between px-2 py-3">
        <h1 className="bg-[#272e61] px-4 py-2 rounded-[10px] border border-white/10">Example Course</h1>
        <BookmarkOff size={25} strokeWidth={1.25} />
      </div>

    </div>
  )
}

export default Bookmarks