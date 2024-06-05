import NotesPage from "../notes/NotesPage"
// import Nothing from "./components/Nothing"
import SideBar from "./components/SideBar"

const JournalPage = () => {
  
  return (
    <div className="flex flex-row flex-wrap w-full h-screen">
        <SideBar />
        {/* <Nothing />    */}
        <NotesPage />
    </div>
  )
}

export default JournalPage
