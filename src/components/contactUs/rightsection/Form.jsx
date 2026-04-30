
const Form = () => {
  return (
    <div className='bg-[#0e162a] w-[48%] rounded-[10px] contact'>
            <form className="flex flex-col h-full justify-around items-center">
              <div className="flex gap-10 ">
                <div className="flex flex-col gap-1">
                  <label htmlFor="istname" className="text-white/90">First Name <span className="text-red-500">*</span></label>
                  <input type="text" name="istname" id="istname" placeholder="Kaneki" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" required maxLength={30}/>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="lastname" className="text-white/90">Last Name<span className="text-red-500">*</span></label>
                  <input type="text" name="lastname" id="lastname" placeholder="Ken" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" required maxLength={30}/>
                </div>
              </div>

              <div className="flex gap-10">
                  <div className="flex flex-col gap-1">
                  <label htmlFor="mobile" className="text-white/90">Phone Number</label>
                  <input type="text" name="mobile" id="mobile" placeholder="+91 0123456789" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" maxLength={14}/>
                </div>

                  <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-white/90">Email<span className="text-red-500">*</span></label>
                  <input type="text" name="email" id="email" placeholder="kanekiken@gmail.com" className="outline-0 w-70 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder" maxLength={50} required/>
                </div>
              </div>

             <div className="flex flex-col">
              <label htmlFor="query" className="text-white/90">Your Query<span className="text-red-500">*</span></label>
             <textarea name="query" id="query" placeholder="Write your query (max-400 characters)" className="outline-0 w-150 h-45 bg-white/15 backdrop-blur-md shadow-md p-4 rounded-[10px] contactformborder resize-none" maxLength={400} required ></textarea>
             </div>

             <div className="flex w-150 justify-between items-center h-13">
             <button className="bg-[#f69d11] px-15 py-3 rounded-[10px] text-2xl font-bold text-[#0e162a] border border-white/50 contactformbtns active:scale-95" >Submit</button>
             <button className="bg-black/30 border border-white/50 px-15 py-3 rounded-[10px] font-bold text-2xl contactformbtns active:scale-95">Clear</button>
             </div>

             <div className="flex flex-col w-full justify-center items-center">
              <p className="text-white/70 pb-2">Track your submitted queries</p>
              <button className="bg-[#2e3771] w-150 h-13 rounded-[10px] text-2xl font-bold border border-white/30 contactformbtns active:scale-95">My Queries</button>
             </div>

            </form>
          </div>
  )
}

export default Form