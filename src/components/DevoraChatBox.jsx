import { useState } from "react"
import { Bot, User } from "lucide-react"

const DevoraChatBox = ({data, query}) => {
  const [inputValues, setinputValues] = useState("")
  const [isEmpty, setisEmpty] = useState(false)
  // const [chatDisplayClass, setCDC] = useState("assistant")
  

  return (
    <div className='w-130 h-120 bg-black/30 text-white rounded-[10px] borders backdrop-blur-md shadow-md devoraChatBox flex flex-col justify-between'>

      <div className="h-100 overflow-y-scroll chatBot border-b-2 border-white/20 backdrop-blur-2xl p-4">
        {data.map(({role, text}, idx)=> {
          return <div key={idx} className="flex justify-between w-full">
            <div className="relative w-[50%]">
            {role === "Assistant" ? 
            <div className="flex bg-black/50 borders p-3 rounded-[10px] relative">
              <div className="absolute -top-7 left-0">
              <Bot size={25} strokeWidth={1} />
              </div>
              <p className="text-sm">{text}</p>
              </div> : null }
              </div>


              <div className="relative w-[50%]">
              {role === "User" ? 
              <div className="flex justify-end relative mt-2">   
              <div className="absolute -top-7 right-0">
              <User size={25} strokeWidth={1} />
              </div>
                <p className="text-sm bg-black/50 borders p-3 rounded-[10px]">{text}</p></div> : null}
              </div>
          </div>
        })}
      </div>
      <div>
        <form onSubmit={(elem)=> elem.preventDefault()} className="flex flex-col justify-center items-center">
          <div className="flex gap-4 items-center">
          <input type="text" value={inputValues} className="borders w-100 h-10 rounded-[10px] px-2 outline-none" placeholder="Enter your query" onChange={(elem)=> {
            setinputValues(elem.target.value)
          }}/>
          <button onClick={()=> {
            if(inputValues.trim() !== "") {
              query(inputValues)
              setinputValues("")
              setisEmpty(false)
            }
            else {
              setisEmpty(true)
            }
          }} className="bg-[#f69d11] px-3 py-1 rounded-[10px] text-[#0e162a] font-bold">Send</button>
          </div>
          <div className="text-[red] text-sm p-1">
          {isEmpty && <div><p>Please enter your query!</p></div>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default DevoraChatBox