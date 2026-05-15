
import LeftSection from "./leftsection/Content.jsx"
import RightSection from "./rightsection/Form.jsx"

import { hoursAndEmail, logos } from "../../data/Contact.jsx"


const ContactUs = () => {


  return (
    <div className='xl:h-screen max-xl:minh-screen bg-[#050915] text-white flex flex-col items-center max-xl:py-10'>
      
      <div className='h-[25%] flex items-center justify-center'>
        <h1 className='text-5xl  h-20 w-70 rounded-lg flex items-center justify-center px-5 font-bold gap-2 border-b-4 border-[#5a62ba]'><span>Contact</span><span className="text-[#f69d11]">Us</span></h1>
        </div>

      <div className='h-full w-full flex justify-center items-center'>
      <div className=' w-[80%] max-desktop:w-[90%] max-2xl:w-[95%] max-xl:gap-20 flex justify-between max-xl:flex-col max-xl:items-center'>
       
        <LeftSection cardsData={hoursAndEmail} socialsData={logos}/>
        <RightSection />

        
        </div>
      </div>
    </div>
  )
}

export default ContactUs