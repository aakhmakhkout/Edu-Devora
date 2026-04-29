const Featurecards = ({data}) => {
  return (
     <div className='flex flex-col justify-evenly gap-10'>
              {data.map(({id, Heading, icon, Description})=> {
                return <div className='flex gap-10 items-center justify-center w-180' key={id}>
                  <div>
                    <div className='bg-[#2e3771] w-25 h-25 flex justify-center items-center rounded-full aboutimages'><img src={icon} alt="aboutimgs" className='w-15'/></div>
                    </div>


                  <div className='flex flex-col gap-1 border-b-2 border-b-[#6464dc71] py-2'>
                    <h1 className='text-2xl font-bold'>{Heading}</h1>
                    <p className='text-white/70'>{Description}</p>
                  </div>
                </div>
              })}
            </div>
  )
}

export default Featurecards