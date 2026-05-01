
const Catagories = ({ctgData}) => {
  return (
        <div className="text-white w-50 h-12 flex justify-center">
            <select name="catagories" id="catagories" className="outline-none courseCatagories font-bold text-lg">
                {ctgData.map(({catagory, id})=> {
                    return <option value={catagory} key={id}>{catagory}</option>
                })}
            </select>
        </div>
  )
}

export default Catagories