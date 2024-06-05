import { MdDelete } from "react-icons/md"
import NotesAppBar from "./NotesAppBar"

const NotesPage = () => {
  return (
    <div className="w-2/3 h-full bg-white flex flex-col">
        <NotesAppBar />
        <div className="flex flex-col h-full">
            <div className="h-1/5 text-3xl px-5">
              <input 
                type="text"
                placeholder="Titulo de la nota"
                className="w-full h-full outline-none bg-transparent"
              />
            </div>
            <div className="h-3/5 text-xl px-5">
              <textarea
                placeholder="Escriba el contenido de la nota aqui........."
                className="w-full h-full outline-none bg-transparent"
              ></textarea>
            </div>
            <div className="h-1/5 p-3">
              <img className="w-[100px] h-[80px] drop-shadow-2xl" src="https://th.bing.com/th/id/OIP.7Szg6T2mxXud0dSv0HDMYQHaD_?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="img" />
            </div>
            
            <button className='flex drop-shadow-2xl z-10 fixed bottom-3 right-3 self-end text-4xl text-[#FF00F5] hover:text-[#a670a4] bg-slate-100 rounded-xl p-2 border-b-4 hover:border-b-2 border-[#FF00F5] bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-violet-100 via-pink-400 to-purple-900'>
              <MdDelete />
            </button>
        </div>
    </div>
  )
}

export default NotesPage
