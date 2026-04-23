import notesImg from "../../assets/notes.png" 
import devoraImg from "../../assets/ai.png" 
import practiceImg from "../../assets/practice.png" 
import courses from "../../assets/courses.png" 

const Facilities = () => {
     const facilites = [
    {facility: "Study Notes",
      description: "Access well-structured and easy-to-understand notes for school and college subjects, designed to help you revise faster and learn better",
      icon: notesImg,
      id:1
    }, 
    {
      facility: "AI Learning Assistant",
      description: "Get instant answers to your questions, clear doubts, and understand concepts step by step with our smart AI-powered assistant",
      icon: devoraImg,
      id:2
    }, 
    {
      facility: "Practice & Tests",
      description: "Test your knowledge with quizzes, practice questions, and mock tests designed to improve your understanding and exam performance",
      icon:practiceImg,
      id:3
    }, 
    {
      facility: "Courses & Programs",
      description: "Explore courses from class 1st to 12th and professional programs like BCA, BBA, B.Sc Nursing, and B.Tech in one place",
      icon:courses,
      id:4
    }
  ]
  return (
    <div className="flex flex-col justify-center items-center relative -top-25 z-1000">
        <div className="absolute -top-25 bg-[#2e3771] px-20 py-3 text-4xl font-extrabold text-[#fffeff]  shadow-md">
            <h1>Facilities</h1>
        </div>


        
        <div className="flex justify-evenly w-full">
        
            {facilites.map((values)=> {
                return <div key={values.id} className="w-60 min-h-70 bg-[#2e3771] flex flex-col justify-between px-3 py-1 items-center rounded-xl cards">
        
                    <div className="flex justify-between w-full items-center">
                        <h1 className="bg-[#1e293c] text-[#f69d11] px-3 py-1 rounded-md backdrop-blur-md shadow-md font-bold ">{values.facility}</h1>
                        <img src={values.icon} alt="icon" className="w-10 h-10 hover:scale-110" />
                    </div>
        
                    <div className="bg-black/20 text-white text-center p-3 rounded-md backdrop-blur-md shadow-md text-[15px]">
                        <p>{values.description}</p>
                    </div>
        
                    <div>
                        <button className="bg-[#f69d11] px-3 py-1 rounded-md shadow-lg text=[#0e162a] font-bold">Learn More</button>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Facilities