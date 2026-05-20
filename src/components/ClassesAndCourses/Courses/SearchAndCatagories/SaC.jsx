import CoursesSearch from './CoursesSearch.jsx'
import Catagories from './Catagories.jsx'
import { CourseCatagories } from '../../../../data/courses.js'

const SaC = ({state, indexesState, searchState}) => {
  return (
    <div className='w-[86%] min-h-20 max-lg:w-full bg-[#2f2e5a13] flex max-emd:flex-col max-emd:gap-3 items-center justify-between rounded-[10px] border border-white/10 coursesSaC max-2xl:mt-5'>
        <CoursesSearch searchData = {searchState}/>
        <Catagories ctgData={CourseCatagories} stateData ={{state}} idxState = {indexesState}/>
    </div>
  )
}

export default SaC