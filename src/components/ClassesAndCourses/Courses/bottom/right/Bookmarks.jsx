import { BookmarkOff } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Bookmarks = ({bmData, CData}) => {
  // const [cName, setcName] = useState([])
    const {bookmarkData, setbookmarkData} = bmData    
    const filteredArr = CData.filter(({id, courseName})=> {
      return bookmarkData.some(({cId})=> {
        return cId === id
      })
    })


const removeBookmark = (idx)=> {
  setbookmarkData(() => {
    return bookmarkData.filter((values)=> {
    return values.cId !== idx
    })
  })
}

// console.log(cName);



  return (
    <div className='bg-black/20 text-white rounded-[10px] borders backdrop-blur-md shadow-m h-100 hover:scale-105 transition-all overflow-y-auto bmkDiv'>
      <div className='w-full flex justify-center h-15 items-center border-b-2 border-b-[#4d2f976d]'>
        <h1 className='bg-[#f69d11] px-5 py-2 rounded-[10px] text-[#0e162a] font-bold'>Bookmarks</h1>
      </div>

      <div className="flex items-center justify-between px-2 py-3">
        <ul className="w-full flex flex-col gap-3 ">
        {filteredArr.map(({id, courseName})=> {
          return <li key={id} className="flex justify-between">
            <Link className="bmkCname courseCards">{courseName}</Link>
            <button className="bmkOffBtn" onClick={()=> {
              removeBookmark(id)
            }}>
            <BookmarkOff size={20} strokeWidth={1.5} />
            </button>
          </li> 
        })}
        </ul>
      </div>

    </div>
  )
}

export default Bookmarks