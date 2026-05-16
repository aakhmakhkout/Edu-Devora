const Featurecards = ({data}) => {
  return (
     <div className='flex flex-col justify-evenly gap-10'>
              {data.map(({id, Heading, icon, Description})=> {
                return <div className='flex gap-10 items-center justify-center w-full' key={id}>
                  <div>
                    <div className='bg-[#2e3771] w-25 max-2xl:w-20 h-25 max-2xl:h-20 flex justify-center items-center rounded-full aboutimages'><img src={icon} alt="aboutimgs" className='w-15 max-2xl:w-10'/></div>
                    </div>


                  <div className='flex flex-col gap-1 border-b-2 border-b-[#6464dc71] py-2'>
                    <h1 className='text-2xl font-bold max-2xl:text-xl'>{Heading}</h1>
                    <p className='text-white/70 max-2xl:text-sm'>{Description}</p>
                  </div>
                </div>
              })}
            </div>
  )
}

export default Featurecards