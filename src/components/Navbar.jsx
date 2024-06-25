import React from 'react'
import { Link } from 'react-router-dom'
import 'react-icons/fa'
import { FaSun } from 'react-icons/fa'

const Navbar = () => {
  const style = {position : "absolute", transform : "translate(-10px,5px)"}
  return (
    <>
      <nav className=' bg-black opacity-65'>
        <div className="flex justify-between pt-3">
        <h1 className='text-[40px]  pl-[40px] text-white'>AMI</h1>
        <div className=' '>
            <ul className='flex xl:pt-[12px] pt-[18px] xl:text-[28px] text-[20px]  xl:space-x-[100px] space-x-[50px] text-white'>
                <Link to = '/'><li className=' hover:text-blue-500 cursor-pointer'>Home</li></Link>
                <Link to='/about'><li className=' hover:text-blue-500 cursor-pointer'>About</li></Link>
            </ul>
        </div>
        <div className=' pt-[18px] text-white pr-8'>
            <FaSun size={20} style={style}/>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
