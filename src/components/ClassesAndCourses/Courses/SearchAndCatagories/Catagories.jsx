
const Catagories = ({ctgData, stateData, idxState}) => {
    console.log(idxState)
    const {indexes, setIndexes} = idxState
    const {state} = stateData
    // console.log(state)
    const {CatagData, setCatagData} = state
    // console.log(CatagData)

  return (
        <div className="text-white w-50 h-12 flex justify-center">
            <select name="catagories" id="catagories" className="outline-none courseCatagories font-bold text-lg" onChange={(elem)=> {
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