
import LeftSection from "./leftsection/Content.jsx"
import RightSection from "./rightsection/Form.jsx"

import { hoursAndEmail, logos } from "../../data/Contact.jsx"


const ContactUs = () => {


  return (
    <div className='h-screen bg-[#050915] text-white flex flex-col items-center'>

      <div className='h-[25%] flex items-center justify-center'>
        <h1 className='text-5xl  h-20 w-70 rounded-lg flex items-center justify-center px-5 font-bold gap-2 border-b-4 border-[#5a62ba]'><span>Contact</span><span className="text-[#f69d11]">Us</span></h1>
        </div>

      <div className='h-full w-full flex justify-center'>
      <div className='h-180 w-[80%] flex justify-between '>
       
        <LeftSection cardsData={hoursAndEmail} socialsData={logos}/>
        <RightSection />

        
        </div>
      </div>
    </div>
  )
}

export default ContactUs