import { Link } from "react-router-dom"
import courseTopimg from "../../../assets/coursesTop.png"
import {Clock, Users, FolderClock, Radio, BookOpen, NotepadText} from "lucide-react"

const Top = ({data}) => {
  const {result} = data

    const isCourse = result.type === "course";
    const cardWorkLabel = isCourse ? "Projects" : "Assignments";
    const cardWorkValue = isCourse ? result.projects : result.assignments;
    const cardSupportLabel = isCourse ? "Live Sessions" : "Mentorship";
    const cardSupportValue = isCourse ? result.liveSessions : result.mentorship;
    const subLen = result.subjects.length


  return (
      <div className="bg-[#0c1127] max-w-[80%] min-h-100 border border-white/10 rounded-[10px]">
             <div className="flex justify-between px-8 py-4 w-full">
                <div>
                    <div className="flex flex-col gap-5 w-[70%]">
                      <div className="flex gap-5 items-center">
                        <h3 className="bg-[#6464dc] w-12 h-12 flex justify-center items-center font-bold text-xl rounded-lg">{result.id}</h3>
                        <h3 className="text-4xl font-bold text-[#f69d11] border-b-3 border-b-[#6464dcb3] rounded-sm py-1">{(isCourse ? result.courseName: result.title)}</h3>
                      </div>
                        <p className="text-sm text-white/80">These courses are carefully designed to provide a structured learning path with a strong focus on practical skills and real-world application. Each course combines essential concepts, hands-on projects, and guided sessions to help learners build confidence and progress effectively.</p>
                        <div className="flex w-120 justify-between items-center">
                          <div className="flex items-center gap-2 font-bold text-[#6464dc]">
                            <BookOpen size={25} strokeWidth={1.5} />
                            <p className="text-white">{subLen} Subjects</p>
                          </div>

                          <div className="flex items-center gap-2 font-bold text-[#6464dc]">
                            <NotepadText size={25} strokeWidth={1.5} />
                            <p className="text-white">{result.topics} Topics</p>
                          </div>

                          <div className="flex items-center gap-2 font-bold text-[#6464dc]">
                             <FolderClock size={25} strokeWidth={1.5} />
                            <p className="text-white">{(isCourse ? result.projects : `${result.assignments} Assignments`)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link to="#subjects" className="bg-[#f69d11] py-3 px-5 classesBtn rounded-[10px] text-[#0e162a] font-bold text-xl">Start Learning</Link>
                            <Link to= "/#Courses" className="borders py-3 px-5 rounded-[10px] font-bold hover:shadow-md transition-all hover:text-[#f69d11]">Explore More Courses</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={courseTopimg} alt="coursetop" className="w-150" />
                </div>
             </div>


             <div className="flex w-full justify-center mt-3">
                <div className="flex w-[80%] justify-between bg-black/20 courseDetailsTop py-4 px-8 rounded-[10px]">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#6a33b792] w-13 h-13 flex justify-center items-center rounded-full borders">
                        <Clock size={32} strokeWidth={1.5} />
                      </div>
                        <h1 className="text-lg">Duration <span className="flex font-normal text-sm text-white/80">{result.duration} Academic Year/s</span></h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-[#6a33b792] w-13 h-13 flex justify-center items-center rounded-full borders">
                        <Users size={32} strokeWidth={1.5} />
                        </div>
                        <h1 className="text-lg">Students <span className="flex font-normal text-sm text-white/80">{result.students}+ Enrolled</span></h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-[#6a33b792] w-13 h-13 flex justify-center items-center rounded-full borders">
                        <FolderClock size={32} strokeWidth={1.5} />
                        </div>
                       <h1 className="text-lg">{cardWorkLabel} <span className="flex font-normal text-sm text-white/80">{cardWorkValue}</span></h1>
                </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-[#6a33b792] w-13 h-13 flex justify-center items-center rounded-full borders">
                        <Radio size={32} strokeWidth={1.5} />
                        </div>
                       <h1 className="text-lg">{cardSupportLabel} <span className="flex font-normal text-sm text-white/80">{cardSupportValue}</span></h1>
                    </div>
             </div>
        </div>
        </div>
    )
}

export default Top