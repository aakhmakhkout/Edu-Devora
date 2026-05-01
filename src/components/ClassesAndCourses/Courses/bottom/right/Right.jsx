import React from 'react'
import Bookmarks from './Bookmarks.jsx'
import Stats from './stats.jsx'
const Right = () => {
  return (
    <div className='w-70 flex flex-col gap-10'>
        <Bookmarks />
        <Stats />
    </div>
  )
}

export default Right