import { Link } from "react-router-dom";
import {ChevronDown} from "lucide-react"
import { useState } from "react";

const Bottom = ({data}) => {
const {result} = data
const isCourse = result.type === "course";
const [topicsIdx, setTopicsIdx] = useState(null)
const [toggle, setToggle] = useState(false)

const tps = result.subjects.map (({topics}) => topics)

const ShowHideList = () => {
        if(toggle) {
            return  <ul className="normal">  
                    {tps[topicsIdx].map((items, idx)=> {
                        return <Link to={items} className="w-full flex justify-center"><li key={idx} className="subListClass">{items}</li></Link>
                    })}
                </ul>
            }
}

  return (
    <div  className="bg-[#0c1127] w-[80%] max-lg:w-[95%] min-h-100 border border-white/10 rounded-[10px] mb-20">
        <div className="w-full flex flex-col items-center py-10 gap-5">
            <div className="flex flex-col gap-2 w-[80%]  justify-center items-start">
            <h1 className="text-4xl font-bold">{isCourse ? "Course Curriculum": "Class Curriculum"}</h1>
            <p className="text-white/80">Explore all the subjects and topics you will learn in this {isCourse ? "course": "class"}</p>
            </div>

            <div className="flex flex-col gap-3 items-center w-full ">
                {result.subjects.map(({name, topics}, idx)=> {
                    const howManyTopics = topics.length
                    return <div key={idx} className="flex bg-[#443d8934] w-[80%] justify-between min-h-15 items-center px-5 rounded-[10px] borders subjectList flex-col">
                        <div className="flex w-full justify-center items-center h-20 ">
                        <div className="flex w-[70%] gap-5 items-center">
                        <h1 className="bg-[#6464dc] w-10 h-10 flex justify-center items-center font-bold rounded-full borders ">{idx+1}</h1>
                        <h1 className="font-bold">{name}</h1>
                        </div>

                        <div className="flex flex-col w-[50%]">
                            <div className="flex justify-end gap-3 w-full ">
                            <h1>{howManyTopics} Topics</h1>
                              <button onClick={()=> {
                             setTopicsIdx(idx)
                             if(toggle) {
                                setToggle(false)
                            }
                            else {
                                setToggle(true)
                             }
                            }} className="cursor-pointer"><ChevronDown size={25} strokeWidth={1.5}/></button>
                            </div>
                            </div>
                        </div>
                          <div className="w-[80%]">
                            {topicsIdx === idx && <ShowHideList /> }
                        </div>
                    </div>
                })}
            </div>
        </div>
      
    </div>
  )
}

export default Bottom