import { ChartBarIncreasing, BookOpenCheck, List, Target } from "lucide-react"

const Stats = () => {
    const statsData = [
        {
            id:1,          
            icon:  <BookOpenCheck size={25} strokeWidth={1.25} />,
            label: "20+ Courses"
        },
        {
            id:2,          
            icon: <List size={25} strokeWidth={1.75} />,
            label: "5 Catagories"
        },
        {
            id:3,          
            icon:  <Target size={25} strokeWidth={1.5} />,
            label: "All skill levels"
        }
    ]

  return (
    <div className='bg-black/20 rounded-[10px] borders backdrop-blur-md shadow-m h-50 courseCards'>
        <div className='w-full flex justify-around h-15 items-center border-b-2 border-b-[#4d2f976d] text-[white]'>
        <h1 className='bg-[#3a429c] px-7 py-2 rounded-[10px] text-[white] font-bold'>Stats</h1>
        <ChartBarIncreasing size={34} strokeWidth={1.8} />
      </div>

      <div className="flex flex-col text-[white] gap-3 p-3">
       {statsData.map(({id, icon, label})=> {
        return <div key={id} className="flex gap-4">
            <div>
                {icon}
            </div>
            <h1>{label}</h1>
        </div>
       })}
      </div>
    </div>
  )
}

export default Stats