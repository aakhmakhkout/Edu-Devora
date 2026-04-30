import Cards from "./Cards"
import Socials from "./Socials"


const Content = ({cardsData, socialsData}) => {
    return (
    <div className='bg-[#0e162a] w-[48%] flex flex-col justify-between items-center rounded-[10px] shadow-md contact'>
        <div className="flex flex-col py-10 gap-2 w-150">
          <h1 className='text-7xl font-bold '>Get In Touch</h1>
          <p className="text-white/80 px-2">We'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.</p>
          </div>

            <Cards data={cardsData} />
            <Socials data={socialsData} />

               <div className="pb-2"><p className="text-white/60">Feel free to connect with us for any queries.</p></div>
    </div>
  )
}

export default Content