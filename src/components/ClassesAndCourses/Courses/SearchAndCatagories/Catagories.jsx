
const Catagories = ({ctgData, stateData, idxState}) => {
    const {indexes, setIndexes} = idxState
    const {state} = stateData
    const {CatagData, setCatagData} = state

  return (
        <div className="text-white w-60 h-12 flex justify-center max-lg:w-40 max-emd:w-[50%] max-emd:mb-2">
            <select name="catagories" id="catagories" className="outline-none courseCatagories font-bold text-lg max-lg:text-base" onChange={(elem)=> {
                        setCatagData(elem.target.value)
                        setIndexes((prev) => {return {startidx: 0, endidx: 8, currentPage: 1}})
                    }}>
                {ctgData.map(({catagory, id})=> {
                    return <option value={catagory} key={id} >{catagory}</option>
                })}
            </select>
        </div>
  )
}

export default Catagories