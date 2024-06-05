
const Note = () => {
  return (
    <li className='flex flex-col px-10 py-2 rounded-full overflow-hidden bg-white border-b-4 border-[#FF00F5] select-none cursor-pointer'>
        <div className='flex justify-between '>
            <h3>Titulo</h3>
            <p>12/3/24</p>
        </div>
        <p className='text-nowrap truncate'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, minima.</p>
    </li>
  )
}

export default Note
