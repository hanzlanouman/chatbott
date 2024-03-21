
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";


function Navbar() {
  return (
    <div className='w-screen h-14 shadow-sm p-1 flex items-center justify-between px-3'>
      <div className='flex items-center gap-2 font-bold'>
        <div className='bg-gray-800 w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center '>
          <GiHamburgerMenu className='text-white ' />
        </div>
        <h2>Previewing qACL</h2>
      </div>
      <div className='flex items-center gap-2'>
        <FaPlay />

        <h1 className='font-bold'>Preview as a User |</h1>
      </div>

    </div>
  )
}

export default Navbar