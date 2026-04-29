const Facilities = ({data}) => {
     
  return (
    <div className="flex flex-col justify-center items-center relative -top-25 z-10"> 
        <div className="flex justify-evenly w-full">
        
            {data.map((values)=> {
                return <div key={values.id} className="w-60 min-h-70 bg-[#2e3771] flex flex-col justify-between px-3 py-1 items-center rounded-xl cards">
        
                    <div className="flex justify-between w-full items-center">
                        <h1 className="bg-[#1e293c] text-[#f69d11] px-3 py-1 rounded-md backdrop-blur-md shadow-md font-bold border border-white/10">{values.facility}</h1>
                        <img src={values.icon} alt="icon" className="w-10 h-10 hover:scale-110 facilitycardicons transition-all" />
                    </div>
        
                    <div className="bg-black/20 text-white text-center p-3 rounded-md backdrop-blur-md shadow-md text-[15px]">
                        <p>{values.description}</p>
                    </div>
        
                    <div>
                        <button className="bg-[#f69d11] px-3 py-1 rounded-md shadow-lg text=[#0e162a] font-bold facilityCardsBtn"><a href="#Classes">Learn More</a></button>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Facilities