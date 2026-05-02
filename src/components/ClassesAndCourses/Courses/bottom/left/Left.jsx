import React, { useState } from 'react'
import Cards from './Cards'
import Pagination from './Pagination'

const Left = ({CData}) => {
  const initialData = {
    startidx: 0,
    endidx:8,
    currentPage: 1
  }
  const [indexes, setIndexes] = useState(initialData)
  const slicedData = CData.slice(indexes.startidx, indexes.endidx);
  
  return (
    <div className='flex flex-col justify-between'>
      <Cards courseData = {slicedData}/>
      <Pagination courseData={CData} state={{indexes, setIndexes}}/>
    </div>
  )
}

export default Left