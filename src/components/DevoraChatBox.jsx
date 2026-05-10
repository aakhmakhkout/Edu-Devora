import { useState } from "react"
import { Bot, User, Send, Loader } from "lucide-react"

const DevoraChatBox = ({data, query, loadingState}) => {
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
            <div className="flex bg-black/50 borders p-3 rounded-[10px] relative mt-4">
              <div className="absolute -top-7 left-0">
              <Bot size={25} strokeWidth={1} />
              </div>
              <p className="text-sm">{text}</p>
              </div> : null}
              </div>


              <div className="relative w-[50%]">
              {role === "User" && text!== "" ? 
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
          <input disabled={loadingState} type="text" value={inputValues} className="borders w-100 h-10 rounded-[10px] px-2 outline-none devoraInp" placeholder="Enter your query" onChange={(elem)=> {
            setinputValues(elem.target.value)
          }}/>
          <button disabled={loadingState} onClick={()=> {
            if(inputValues.trim() !== "") {
              query(inputValues)
              setinputValues("")
              setisEmpty(false)
            }
            else {
              setisEmpty(true)
            }
          }} className="flex items-center justify-center bg-[#f69d11] px-3 py-2 rounded-[10px] text-[#0e162a] font-bold cursor-pointer">{loadingState ? <div className="animate-spin"><Loader size={25} strokeWidth={1.25} /></div> : <Send size={25} strokeWidth={1.5} /> }</button>
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