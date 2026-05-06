import { Link } from "react-router-dom";
import {ChevronDown} from "lucide-react"
import { useState } from "react";

const Bottom = ({data}) => {
const {result} = data
const isCourse = result.type === "course";
const [dropdown, setdropdown] = useState(null)

const tps = result.subjects.map (({topics}) => topics)

const ShowHideList = () => {
   
    return  <ul className={`flex flex-col justify-start items-start text-white text-8xl` }>  
                                    {/* {tps.map((items, idx)=> {
                                        return <li key={idx}><Link href="">{items}</Link></li>
                                    })} */}
                                    hello
                            </ul>
}

  return (
    <div  className="bg-[#0c1127] max-w-[80%] w-[80%] min-h-100 border border-white/10 rounded-[10px]">
        <div className="w-full flex flex-col items-center py-10 gap-5">
            <div className="flex flex-col gap-2 w-[80%]  justify-center items-start">
            <h1 className="text-4xl font-bold">{isCourse ? "Course Curriculum": "Class Curriculum"}</h1>
            <p className="text-white/80">Explore all the subjects and topics you will learn in this {isCourse ? "course": "class"}</p>
            </div>

            <div className="flex flex-col gap-3 items-center w-full">
                {result.subjects.map(({name, topics}, idx)=> {
                    console.log(idx)
                    const howManyTopics = topics.length
                    return <div key={idx} className="flex bg-[#443d8934] w-[80%] justify-between min-h-15 items-center px-5 rounded-[10px] borders subjectList flex-col">
                        <div className="flex w-full justify-center items-center h-20">
                        <div className="flex w-[50%] gap-5 items-center">
                        <h1 className="bg-[#6464dc] w-10 h-10 flex justify-center items-center font-bold rounded-full borders">{idx+1}</h1>
                        <h1 className="font-bold">{name}</h1>
                        </div>

                        <div className="flex flex-col w-[50%] items-end ">
                            <div className="flex justify-between w-[20%]">
                            <h1>{howManyTopics} Topics</h1>
                              <button onClick={()=> {
                                setdropdown(idx)
                              
                                    {console.log(dropdown)}
                                    // <ShowHideList />
                

                            }}><ChevronDown size={25} strokeWidth={1.5}/></button>
                            </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Bottom