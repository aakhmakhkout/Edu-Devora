
import LeftSection from "./leftsection/Content.jsx"
import RightSection from "./rightsection/Form.jsx"

import { hoursAndEmail, logos } from "../../data/Contact.jsx"


const ContactUs = () => {


  return (
    <div className='h-screen bg-[#050915] text-white flex flex-col'>

      <div className='h-[20%] flex items-center'>
        <h1 className='text-5xl bg-[#f69d11] h-20 w-70 rounded-r-full flex items-center px-5 font-extrabold text-[#0e162a]'>Contact</h1>
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