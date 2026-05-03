import React, { useState } from 'react'
import Cards from './Cards'
import Pagination from './Pagination'

const Left = ({CData, data, IdxState, bmkData}) => {
  // console.log(bmkData)
   const {indexes} = IdxState
  const itemsperpage = 8;
  const slicedData = CData.filter((values) => {
    return values.catag === data || data === "All Catagories"
  })

  const itemsDisplay = slicedData.slice(indexes.startidx, indexes.endidx)

  return (
    <div className='flex flex-col justify-between'>
      <Cards courseData = {itemsDisplay} bmData = {bmkData}/>
      <Pagination courseData={CData} state={IdxState}/>
    </div>
  )
}

export default Left