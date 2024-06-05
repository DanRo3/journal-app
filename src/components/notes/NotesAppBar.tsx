import { IoIosSave } from "react-icons/io";
import { RiImageAddFill } from "react-icons/ri";

const NotesAppBar = () => {
    const date = new Date();
    const day = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  return (
    <div className="h-[10%] flex flex-row justify-between items-center text-2xl px-3 pr-9 text-[#FF00F5] border-b-4 border-[#FF00F5]">
      <h2>{day}</h2>
      <div className=" flex flex-row gap-3 transition text-4xl">
        <button className="hover:text-[#ef69ea]"><RiImageAddFill /></button>
        <button className="hover:text-[#ef69ea]"><IoIosSave /></button>
      </div>
    </div>
  )
}

export default NotesAppBar
