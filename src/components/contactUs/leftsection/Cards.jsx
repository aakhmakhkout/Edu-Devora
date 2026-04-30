import React from 'react'

const Cards = ({data}) => {
  return (
     <div className="flex flex-col gap-5 w-150">
            {data.map(({id, icon, name, description:{des1, des2}})=> {
              return <div key={id} className="bg-black/30 flex gap-10 h-30  items-center px-7 rounded-[10px] backdrop-blur-md shadow-md border border-white/20">
                <div>{icon}</div>
                <div>
                  <h1 className="text-2xl font-bold">{name}</h1>
                  <div className="text-white/80">
                    <p>{des1}</p>
                    <p>{des2}</p>
                    <p></p>
                  </div>
                </div>
              </div>
            })}
          </div>
  )
}

export default Cards