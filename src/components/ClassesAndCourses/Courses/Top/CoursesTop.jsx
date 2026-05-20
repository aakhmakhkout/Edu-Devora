import coursesTopImg from "../../../../assets/coursesTop.png"

const CoursesTop = () => {
  return (
    <div className="flex justify-between h-[25%]  items-center text-white mt-5">
      <div className="flex flex-col justify-evenly h-full w-[80%]">
      <div className="w-full flex flex-col gap-5 ">
        <h1 className="text-6xl font-bold w-full max-lg:text-4xl max-emd:text-2xl">Explore Our <span className="text-[#f69d11] border-b-5 border-b-[#5a62ba] rounded-b-md">Courses</span></h1>
        <p className="text-white/80 max-lg:text-sm">Dive into a curated collection of courses built to empower your learning journey. From foundational concepts to advanced skills, each course is designed to help you grow with confidence, apply what you learn in real-world scenarios, and move closer to your goals—at your own pace.</p>
      </div>

      <div>
      </div>
      </div>

      <div className="w-[20%] ">
        <img src={coursesTopImg} alt="Classes bg image"  className="classesTopImg"/>
      </div>
    </div>
  )
}

export default CoursesTop