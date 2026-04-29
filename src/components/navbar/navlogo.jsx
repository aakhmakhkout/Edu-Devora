const Navlogo = ({src}) => {
  return (
         <div className="flex justify-evenly items-center w-60">
            <img src={src} alt="img"  className='w-15 h-15'/>
            <h1 className='font-bold text-2xl text-[#f69d11]'>Edu-Devora</h1>
        </div>
    
  )
}

export default Navlogo