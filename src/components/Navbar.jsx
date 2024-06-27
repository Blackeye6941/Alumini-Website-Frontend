import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-icons/fa'
import { FaDoorClosed, FaDoorOpen, FaSignOutAlt, FaSun } from 'react-icons/fa'
import { userContext } from '../context/Context'


const Navbar = () => {
  const style = {position : "absolute", transform : "translate(-10px,5px)"}
  const {data, setData} = useContext(userContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setData([]);
    localStorage.removeItem('data');
    navigate('/login');
  };

  return (
    <>
      {data && data.length > 0 ? (
        <nav className=' bg-black opacity-65'>
        <div className="flex justify-between pt-3">
        <h1 className='text-[40px]  pl-[40px] text-white'>AMI</h1>
        <div className=' '>
            <ul className='flex xl:pt-[12px] pt-[18px] xl:text-[28px] lg:text-[25px] text-[20px] md:text-[25px] mr-4 xl:space-x-[100px] space-x-[50px] text-white'>
                <Link to = '/'><li className=' hover:text-blue-500 cursor-pointer'>Home</li></Link>
                <Link to='/about'><li className=' hover:text-blue-500 cursor-pointer'>About</li></Link>
            </ul>
        </div>
        <div className=' pt-[18px] text-white pr-[60px] flex space-x-10'>
            <FaSun size={20} style={style}/>
            <FaSignOutAlt size={20} style={style} onClick={handleLogout}/>
        </div>
        </div>
      </nav>
      ) : (
        <nav className=' bg-black opacity-65'>
        <div className="flex justify-between pt-3">
        <h1 className='text-[40px]  pl-[40px] text-white'>AMI</h1>
        <div className=' '>
            <ul className='flex xl:pt-[12px] pt-[18px] xl:text-[28px] lg:text-[25px] text-[20px] md:text-[25px] mr-10 xl:space-x-[100px] space-x-[50px] text-white'>
                <Link to = '/'><li className=' hover:text-blue-500 cursor-pointer'>Home</li></Link>
                <Link to='/about'><li className=' hover:text-blue-500 cursor-pointer'>About</li></Link>
            </ul>
        </div>
        <div className=' pt-[18px] text-white pr-8'>
            <FaSun size={20} style={style}/>
        </div>
        </div>
      </nav>
      )}
    </>
  )
}

export default Navbar
