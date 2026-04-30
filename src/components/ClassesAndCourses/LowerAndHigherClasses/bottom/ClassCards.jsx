import { BookOpenCheck } from "lucide-react"
import { Link } from "react-router-dom"

const ClassCards = ({data}) => {

  return (
    <div className=" w-full h-full flex flex-wrap gap-10 justify-center">
      {data.map(({whichclass, classsup, colorCls})=> {
          return <Link key={whichclass}>
                    <div className="bg-[#4e3a9630] w-75 h-45 flex flex-col justify-evenly items-center rounded-[10px] borders classCards">
                    <div className="classCardsContent">
                        <h1 className="flex justify-center items-center w-full h-full font-bold text-2xl"><span>{whichclass}</span><sup className="pt-2">{classsup}</sup></h1>
                    </div>
                  <div>
                      <h1 className="text-xl font-bold">{whichclass}{classsup} Class</h1>
                  </div>
                    <div className={colorCls}>
                      <BookOpenCheck size={48} strokeWidth={1} />
                    </div>
                  </div>
                </Link>
      })}
    </div>
  )
}

export default ClassCards