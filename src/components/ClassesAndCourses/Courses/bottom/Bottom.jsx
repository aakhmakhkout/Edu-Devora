import React from 'react'
import Left from './left/Left'
import Right from './right/Right'


const Bottom = ({coursedata, state, indexesState}) => {
 
  // console.log(state)
  return (
    <div className='flex mt-3 justify-between'>
       <Left CData = {coursedata} data = {state} IdxState = {indexesState}/>
       <Right />
    </div>
  )
}

export default Bottom