import { ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"


const Pagination = ({courseData, state}) => {
  // const [currentPage, setcurrentPage] = useState(1)
  const itemsPerPage = 8
  const pageNumbers = (courseData.length / itemsPerPage)
  const pages = Math.ceil(pageNumbers)
  const {indexes, setIndexes} = state

 
    let pagesArr = []
    for(let idx = 0; idx < pages; idx++) {
       pagesArr.push(idx+1);
    }



  const updateState = (idx) => {
    const startpage = itemsPerPage * idx
    const endpage = startpage + itemsPerPage
    const cPage = idx+1
    setIndexes((prev)=> {
        return {startidx: startpage, endidx: endpage, currentPage: cPage};
    })
  }

  const preBtn = () => {
    console.log(indexes.currentPage)
    if(indexes.currentPage > 1) {
      setIndexes((prev)=> {
        const end = prev.startidx
        const start = end - itemsPerPage
        const cPage = prev.currentPage - 1
        return {startidx: start, endidx: end, currentPage: cPage}
      })
    }
  }
  const nextBtn = () => {
    if( indexes.currentPage < pages) {
        setIndexes((prev)=> {
        const start = prev.endidx;
        const end = start + itemsPerPage
        const cPage = prev.currentPage + 1
        return {startidx: start, endidx: end, currentPage: cPage}
      })
    }
}

  return (
    <div className='flex w-full h-20 justify-center items-center'>
        <div className="text-[#131938] flex gap-5">
          <button className={indexes.currentPage !== 1 ? "isCourseBtn active:scale-95" : "isCourseBtnNot"} onClick={preBtn}><ChevronLeft size={40} strokeWidth={2} /></button>

          {pagesArr.map((items, idx)=> {
            const isActive = indexes.currentPage === items
            return <button key={items} onClick={()=> {
              updateState(idx)
            }} className={isActive ? "coursePagesActive courseCards" : "coursePagesNormal courseCards"}>{items}</button>
          })}

          <button className={indexes.currentPage < pages ? "isCourseBtn active:scale-95" : "isCourseBtnNot"}><ChevronRight size={40} strokeWidth={2} onClick={nextBtn}/></button>
        </div>

    </div>
  )
}

export default Pagination