import React, { useState } from 'react'
import Left from './left/Left.jsx'
import Right from './right/Right'


const Bottom = ({coursedata, state, indexesState, searchState}) => {
  // const fallback = [
  //   {
  //     cId: "No bookmarks"
  //   }
  // ]
const [bookmarkData, setbookmarkData] = useState([])
 
  return (
    <div className='flex mt-3 gap-5 max-lg:flex-col w-full max-lg:items-center'>
      <div className='w-[80%] max-lg:w-full'>
       <Left CData = {coursedata} data = {state} IdxState = {indexesState} bmkData={{bookmarkData, setbookmarkData}} searchData={searchState}/>
      </div>
       <Right bmkData={{bookmarkData, setbookmarkData}}/>
    </div>
  )
}

export default Bottom