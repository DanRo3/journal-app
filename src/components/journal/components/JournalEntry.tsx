
import Note from "./Note"

const JournalEntry = () => {
    const entries = [1,2,3]
    return (
        <div className='h-4/5 bg-fuchsia-300 rounded-t-2xl overflow-y-scroll'>
            <ul className='p-3 flex flex-col gap-3'>
                {
                    entries.map(value =>(
                        <Note key={value} />
                    ))
                }
            </ul>
        </div>
    )
}

export default JournalEntry
