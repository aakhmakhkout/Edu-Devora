const Abcards = ({data}) => {
  return (
  <div className="w-full max-lg:overflow-x-scroll lg:h-60">
    <div className=" w-full grid grid-cols-4 min-w-max gap-5 place-items-center max-lg:px-5">
      {data.map(({id, icon, alt, title, heading, description})=> {
        return <div className="w-70 h-60 max-xl:w-55 max-xl:h-45 bg-[#4f216e27] p-3 flex flex-col gap-3 rounded-[10px] backdrop-blur-md aboutcards" key={id}>
          <div className="flex items-center gap-5">
            <div className="bg-[#483075] w-15 h-15 max-xl:w-10 max-xl:h-10 flex items-center justify-center rounded-full aboutcardsicons">
            <img src={icon} alt={alt} className="w-10 max-xl:w-8 icons" />
            </div>
            <h1 className="text-2xl max-xl:text-base font-bold text-[#f69d11]">{title}</h1>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold max-xl:text-sm">{heading}</h1>
            <p className="text-sm text-white/80 max-xl:text-[11px]">{description}</p>
          </div>
        </div>
      })}
    </div>
    </div>
 )
}

export default Abcards