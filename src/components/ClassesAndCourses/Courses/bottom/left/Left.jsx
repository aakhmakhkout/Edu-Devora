import React, { useState } from 'react'
import Cards from './Cards'
import Pagination from './Pagination'

const Left = ({CData, data, IdxState, bmkData, searchData}) => {
  const {search} = searchData
  const {indexes} = IdxState
  const itemsperpage = 8;
  const slicedData = CData.filter((values) => {
    return (values.catag === data || data === "All Catagories")
  })

  const filteredCourseList = slicedData.filter((items) => {
    if(search === "") {
      return slicedData
    }
    else {
      return items.courseName.toLowerCase().includes(search);
    }
  })


  const itemsDisplay = filteredCourseList.slice(indexes.startidx, indexes.endidx)

  return (
    <div className='flex flex-col justify-between w-full'>
      <Cards courseData = {itemsDisplay} bmData = {bmkData}/>
      <Pagination courseData={CData} state={IdxState}/>
    </div>
  )
}

export default Left