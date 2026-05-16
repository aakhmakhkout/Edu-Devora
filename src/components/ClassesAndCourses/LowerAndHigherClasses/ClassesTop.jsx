import ClassSearch from "./ClassSearch"
import ClassTop from "../../../assets/classesTop.png"

const ClassesTop = () => {
  return (
    <div className="flex justify-around min-h-[40%]  items-center max-lg:pt-25 max-lg:pb-5">
      <div className="w-[full] flex flex-col gap-5 px-10 ">
        <h1 className="text-6xl font-bold max-lg:text-4xl">Explore Our <span className="text-[#f69d11] border-b-5 border-b-[#541f9f] rounded-b-md">Classes</span></h1>
        <p className="text-white/80">Find study material for all classes from 1st to 12th designed to help students understand and excel</p>
      </div>

      <div>
        {/* <ClassSearch /> */}
      </div>
      

      <div>
        <img src={ClassTop} alt="Classes bg image"  className="w-100 classesTopImg"/>
      </div>
    </div>
  )
}

export default ClassesTop