import Cards from "./Cards"
import Socials from "./Socials"


const Content = ({cardsData, socialsData}) => {
    return (
    <div className='bg-[#33399014] w-[48%] max-xl:w-[80%] max-md:w-full flex flex-col justify-between items-center rounded-[10px] shadow-md contact max-xl:mt-10 gap-5'>
        <div className="flex flex-col py-10  w-[90%]">
          <h1 className='max-text-7xl text-7xl min-text-3xl font-bold max-2xl:text-5xl'>Get In Touch</h1>
          <p className="text-white/80 px-2">We'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.</p>
          </div>

            <Cards data={cardsData} />
            <Socials data={socialsData} />

               <div className="pb-2"><p className="text-white/60">Feel free to connect with us for any queries.</p></div>
    </div>
  )
}

export default Content