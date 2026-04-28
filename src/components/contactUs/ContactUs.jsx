import {ClockCheck, Mail} from "lucide-react"
import insta from "../../assets/instagram.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import portfolio from "../../assets/portfolio.png"

const ContactUs = () => {
  const hoursAndEmail = [
    {
      id:1,
      name: "Hours",
      icon: <ClockCheck size={56} strokeWidth={1.5} />,
      description: {
        des1: "Available Mon–Sat, 9AM–6PM",
        des2: "Responses within 24 hours"
      }
    },
    {
      id:2,
      name: "Email",
      icon: <Mail size={56} strokeWidth={1.5} />,
      description: {
        des1: "xymoexyom@gmail.com",
        des2: ""
      }
    }
  ]

  const logos = [
    {id:1, logo: insta, link: "https://www.instagram.com/aakh_makh_kout/", title:"instagram"},
    {id:2, logo: github, link: "https://www.github.com/aakhmakhkout", title:"github"},
    {id:3, logo: linkedin, link: "https://www.linkedin.com/in/xymoexyom", title:"linked in"},
    {id:4, logo: portfolio, link: "www.linkedin.com/in/xymoexyom", title:"portfolio"}
  ]

  return (
    <div className='h-screen bg-[#050915] text-white flex flex-col'>

      <div className='h-[20%] flex items-center'>
        <h1 className='text-5xl bg-[#f69d11] h-20 w-70 rounded-r-full flex items-center px-5 font-extrabold text-[#0e162a]'>Contact</h1>
        </div>

      <div className='h-full w-full flex justify-center'>
      <div className='h-180 w-[80%] flex justify-between '>

        <div className='bg-[#0e162a] w-[48%] flex flex-col justify-between items-center rounded-[10px] shadow-md'>

          <div className="flex flex-col py-10 gap-2 w-150">
          <h1 className='text-7xl font-bold '>Get In Touch</h1>
          <p className="text-white/80 px-2">We'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out.</p>
          </div>

          <div className="flex flex-col gap-5 w-150">
            {hoursAndEmail.map((values)=> {
              return <div key={values.id} className="bg-black/30 flex gap-10 h-30  items-center px-7 rounded-[10px] backdrop-blur-md shadow-md border border-white/20">
                <div>{values.icon}</div>
                <div>
                  <h1 className="text-2xl font-bold">{values.name}</h1>
                  <div className="text-white/80">
                    <p>{values.description.des1}</p>
                    <p>{values.description.des2}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            })}
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-black/30 w-80 h-15 flex justify-center items-center rounded-[10px] backdrop-blur-md shadow-md borders"><h1 className="text-2xl font-bold">Socials</h1></div>
            <div className="flex bg-black/30 h-20 items-center justify-evenly rounded-[10px] backdrop-blur-md shadow-md borders">
             {logos.map((values)=> {
                return <div key={values.id} className="flex">
                  <a href={values.link} target="_blank">
                  <img src={values.logo} alt="logos" className="w-10 sociallogo" title={values.title}/>
                  </a>
                </div>
             })}
            </div>
          </div>

          <div className="pb-2"><p className="text-white/60">Feel free to connect with us for any queries.</p></div>
            
          </div>


        <div className='bg-[#0e162a] w-[48%] rounded-[10px]'>
            <form className="flex flex-col h-full justify-around items-center">
              <div className="flex gap-10 ">
                <div className="flex flex-col gap-1">
                  <label htmlFor="istname" className="text-white/90">First Name <span className="text-red-500">*</span></label>
                  <input type="text" name="istname" id="istname" placeholder="Kaneki" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" required maxLength={30}/>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="lastname" className="text-white/90">Last Name<span className="text-red-500">*</span></label>
                  <input type="text" name="lastname" id="lastname" placeholder="Ken" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" required maxLength={30}/>
                </div>
              </div>

              <div className="flex gap-10">
                  <div className="flex flex-col gap-1">
                  <label htmlFor="mobile" className="text-white/90">Phone Number</label>
                  <input type="text" name="mobile" id="mobile" placeholder="+91 0123456789" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" maxLength={14}/>
                </div>

                  <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-white/90">Email<span className="text-red-500">*</span></label>
                  <input type="text" name="email" id="email" placeholder="kanekiken@gmail.com" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" maxLength={50} required/>
                </div>
              </div>

             <div className="flex flex-col">
              <label htmlFor="query" className="text-white/90">Your Query<span className="text-red-500">*</span></label>
             <textarea name="query" id="query" placeholder="Write your query (max-400 characters)" className="outline-0 w-150 h-45 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder resize-none" maxLength={400} required ></textarea>
             </div>

             <div className="flex w-150 justify-between items-center h-13">
             <button className="bg-[#f69d11] px-15 py-3 rounded-[10px] text-2xl font-bold text-[#0e162a] border border-white/50 contactformbtns active:scale-95" >Submit</button>
             <button className="bg-black/30 border border-white/50 px-15 py-3 rounded-[10px] font-bold text-2xl contactformbtns active:scale-95">Clear</button>
             </div>

             <div className="flex flex-col w-full justify-center items-center">
              <p className="text-white/70 pb-2">Track your submitted queries</p>
              <button className="bg-[#2e3771] w-150 h-13 rounded-[10px] text-2xl font-bold border border-white/30 contactformbtns active:scale-95">My Queries</button>
             </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs