import React, { useState } from 'react'
import Left from './left/Left.jsx'
import Right from './right/Right'


const Bottom = ({coursedata, state, indexesState}) => {
  // const fallback = [
  //   {
  //     cId: "No bookmarks"
  //   }
  // ]
const [bookmarkData, setbookmarkData] = useState([])
 
  return (
    <div className='flex mt-3 justify-between'>
       <Left CData = {coursedata} data = {state} IdxState = {indexesState} bmkData={{bookmarkData, setbookmarkData}}/>
       <Right bmkData={{bookmarkData, setbookmarkData}}/>
    </div>
  )
}

export default Bottom