const Abcards = ({data}) => {
  return (
    <div className="flex w-full justify-evenly">
      {data.map(({id, icon, alt, title, heading, description})=> {
        return <div className="w-70 bg-[#4f216e27] p-3 flex flex-col gap-3 rounded-[10px] backdrop-blur-md aboutcards" key={id}>
          <div className="flex items-center gap-5">
            <div className="bg-[#483075] w-15 h-15 flex items-center justify-center rounded-full aboutcardsicons">
            <img src={icon} alt={alt} className="w-10 icons" />
            </div>
            <h1 className="text-2xl font-bold text-[#f69d11]">{title}</h1>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">{heading}</h1>
            <p className="text-sm text-white/80">{description}</p>
          </div>
        </div>
      })}
    </div>
 )
}

export default Abcards