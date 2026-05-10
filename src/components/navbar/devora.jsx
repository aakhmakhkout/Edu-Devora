import { Link } from 'lucide-react';
import devoralogo from "../../assets/devora.png"
import { useState } from 'react';
import DevoraChatBox from '../DevoraChatBox';
import {GoogleGenerativeAI} from "@google/generative-ai"

const devoraAI = new GoogleGenerativeAI(import.meta.env.VITE_DEVORA_API_KEY)
const model = devoraAI.getGenerativeModel({model: "gemini-3.1-flash-lite"})


export default function Devora() {
  const [isClicked, setisClicked] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  // const [userQuery, setuserQuery] = useState("")
  
  
  async function sendQuery(userQuery) {
    setisLoading(true);
    const result = await model.generateContent(userQuery)
    const reply = result.response.text();
    setmessages((prev)=> {
      return [...prev, {role: "User", text: userQuery},{role: "Assistant", text: reply}]
    })
    setisLoading(false)
  }
  
  const messagesObj = [
    {
      role: "User", text: ""
    },
    {
      role: "Assistant", text: "Hello! I'm Devora AI, your study assistant. Ask me anything about programming, web development, or any topic you'd like to learn."
    }
  ]

  
  const [messages, setmessages] = useState(messagesObj)
  

  return (
    <div className='flex flex-col items-end'>
      <div>
        {isClicked && <DevoraChatBox query = {sendQuery} data = {messages} loadingState ={isLoading}/>}
      </div>
      <button className='devora-ai flex items-center' onClick={()=> setisClicked(!isClicked)}>
            <p className='devoraText'></p>
            <img src={devoralogo} alt="devora" className='w-30 cursor-pointer'/>
        </button>
    </div>
  );
}



