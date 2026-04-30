const Socials = ({data}) => {
  return (
    <div className="flex flex-col gap-3">
            <div className="bg-black/30 w-80 h-15 flex justify-center items-center rounded-[10px] backdrop-blur-md shadow-md borders"><h1 className="text-2xl font-bold">Socials</h1></div>
            <div className="flex bg-black/30 h-20 items-center justify-evenly rounded-[10px] backdrop-blur-md shadow-md borders">
             {data.map(({id, link, logo, title})=> {
                return <div key={id} className="flex">
                  <a href={link} target="_blank">
                  <img src={logo} alt="logos" className="w-10 sociallogo" title={title}/>
                  </a>
                </div>
             })}
            </div>
          </div>
  )
}

export default Socials