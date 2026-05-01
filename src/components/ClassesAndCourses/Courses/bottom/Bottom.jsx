import React from 'react'
import Left from './left/Left'
import Right from './right/Right'


const Bottom = ({coursedata}) => {
  return (
    <div className='flex mt-3 justify-between'>
       <Left CData = {coursedata}/>
       <Right />
    </div>
  )
}

export default Bottom