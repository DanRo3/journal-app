import ImageOne from "../../../assets/notes.png"
import { IoIosLogOut } from "react-icons/io"
import JournalEntry from "./JournalEntry"
import { CiEdit } from "react-icons/ci"


const SideBar = () => {
  return (
    <div className="w-1/3 h-full flex flex-col border-r-4 border-[#FF00F5]">
        <div className="h-[50px] flex flex-row justify-between items-center text-2xl px-3 pr-9">
          <h3>Name user</h3>
          <button className="hover:text-slate-950 transition">
              <IoIosLogOut />
          </button> 
        </div>
        <div className="flex justify-center h-1/5 flex-row items-center">
          <img src={ImageOne} className='w-3/5' />
          <button  className='flex w-[40px] h-[40px] text-xl text-[#FF00F5] hover:text-[#a670a4] bg-slate-100 rounded-xl p-2 border-b-4 hover:border-b-2 border-[#FF00F5] bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-violet-100 via-pink-400 to-purple-900'>
            <CiEdit />
          </button>
        </div>
        <JournalEntry/>
    </div>
  )
}

export default SideBar
