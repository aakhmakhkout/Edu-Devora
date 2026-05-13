import { CircleUser, Mail, Phone, CalendarDays, MessageCircleMore } from "lucide-react"
const QueryCards = ({queryData}) => {
const {createQuery, setcreateQuery} = queryData
console.log(createQuery)

return (
    <div className="border-l-5 border-[#f69d11] rounded-[10px] flex flex-col gap-10">
        {createQuery.map(({firstname, lastname, email, mobileno, date, query, status, isResolved}, idx)=> {
        return <div key={idx} className="bg-[#071027] flex justify-between rounded-[10px] borders h-55 px-5 queryCards">

            <div className="flex flex-col justify-around w-80">
            <div className="flex gap-4 items-center ">
                <div className="text-[#7c3be1]"><CircleUser size={35} strokeWidth={1.5} /></div>
                <div>
                    <span className="text-white/80">Name</span>
                    <h1 className="capitalize font-bold text-xl">{firstname} {lastname}</h1>
                </div>
            </div>
            
            <div className="flex gap-4 items-center">
                <div className="text-[#7c3be1]"><Mail size={35} strokeWidth={1.25} /></div>
                <div>
                    <span className="text-white/80">Email</span>
                    <p className="text-md">{email}</p>
                </div>
            </div>
            
            <div className="flex gap-4 items-center">
                   <div className="text-[#7c3be1]"><Phone size={35} strokeWidth={1.25} /></div>
                <div>
                    <span className="text-white/80">Mobile</span>
                    <p>{mobileno}</p>
                </div>
            </div>
            </div>
        
        
        
        <div className="flex flex-col gap-4 pt-3 w-100">
            <div className="flex gap-4 items-center">
                <div className="text-[#7c3be1]"><CalendarDays size={35} strokeWidth={1.25} /></div>
                <div>
                    <span className="text-white/80">Date Sent</span>
                    <p className="font-bold">{new Date(date).toLocaleString()}</p>
                </div>
            </div>
            
            <div className="flex gap-5">
                <div className="text-[#7c3be1]"><MessageCircleMore size={35} strokeWidth={1.25} />
                
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white/80">Your Query</span>
                    <p className="font-bold bg-black/10 p-2 borders rounded-lg min-w-20 max-w-80 overflow-x-hidden min-h-10 max-h-25 queryCardsquery">{query}</p>
                </div>
            </div>
        </div>
        
        
        
        <div className="flex flex-col pt-3 gap-3 w-80">
            <div className="flex flex-col gap-2">
                <span className="text-white/80">Status</span>
                <p className={isResolved ? "flex items-center justify-center bg-[#00800036] w-35 h-10 font-bold text-xl text-[#00ff00] rounded-lg border border-[green]" : "flex items-center justify-center bg-[#7f2a3b27] w-35 h-10 font-bold text-xl text-[#ff0000] rounded-lg border border-[#9e0303]"}>{isResolved ? "Resolved" : "Pending..."}</p>
            </div>
            
            <div>
                <span className="text-white/80">Response</span>
                <p>{isResolved ? "Thank you for reaching out. Please check your email for the details" : "We will get back to you soon."}</p>
            </div>
        </div>
        </div>
        })}
    </div>
  )
}

export default QueryCards