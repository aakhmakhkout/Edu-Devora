import React, { useState } from 'react'
import Cards from './Cards'
import Pagination from './Pagination'

const Left = ({CData}) => {
  const initialData = {
    startidx: 0,
    endidx:8,
  }
  const [indexes, setIndexes] = useState(initialData)
  const slicedData = CData.slice(indexes.startidx, indexes.endidx);
  
  return (
    <div className=''>
      <Cards courseData = {slicedData}/>
      <Pagination />
    </div>
  )
}

export default Left