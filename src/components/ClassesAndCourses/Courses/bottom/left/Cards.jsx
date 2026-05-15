import { Bookmark, ChartNoAxesColumn, Clock } from 'lucide-react';
import {Link} from "react-router-dom"

const Cards = ({courseData, bmData}) => {
  const {bookmarkData, setbookmarkData} = bmData
 
  return (
    <div className='bg-black/20 text-white p-10 rounded-[10px] borders backdrop-blur-md shadow-md'>
      <div className='grid grid-cols-4 gap-5 auto-rows-fr max-desktop:grid-cols-3 max-2xl:grid-cols-2 justify-items-center'>
        {courseData.map(({id, courseName, catag, img, description, lessons, hours})=> {

            return <div key={id} className='w-80 max-xl:w-70 h-full max-xl:h-70 max-lg:w-55 max-lg:h-55 flex flex-col bg-[#33399033] p-5 gap-3 max-lg:p-3 justify-center max-lg:justify-start relative rounded-[10px] courseCards'>

              <div className='flex justify-center h-[50%] items-center max-lg:h-0'>
                <img src={img} alt="img" className='w-30 max-lg:hidden'/>
                <div className='absolute lg:right-4 lg:top-4 text-[#f69d11] max-lg:bottom-1 max-lg:right-2'>
                  <button className='cursor-pointer bookmarkBtn' onClick={()=> {
                    setbookmarkData((prev)=> {
                      return [...prev, {cId: id}]
                    })
                  }}><Bookmark size={25} strokeWidth={2.5} /></button> 
                </div>
                </div>
                <div className='flex flex-col justify-end h-[45%] max-lg:justify-start'>
                  <div className='flex flex-col gap-1'>
                  <Link  to={`/${id}`} className='courseLink' target='_blank'>
                    <h1 className='font-bold text-xl max-xl:text-base'>{courseName}</h1>
                </Link> 
                     <p className='text-[13px] text-white/70'>{description}</p>
                   </div>


                <div className='flex justify-between text-sm text-white/70 mt-2 max-lg:text-[10px]'>
                  <div className='flex gap-2 text-[#f69d11] items-center'>
                  <ChartNoAxesColumn size={20} strokeWidth={3} />
                  <p className='font-bold'>{lessons} Lessons</p>
                  </div>

                  <div className='flex gap-2 items-center'>
                  <Clock size={20} strokeWidth={2.5} />
                  <p>{hours} Hours</p>
                  </div>
                </div>
                </div>
            </div>
            
        })}
        </div>
        </div>
      )
}

export default Cards