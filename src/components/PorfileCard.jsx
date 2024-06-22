import React from 'react'
import {FaBriefcase, FaCalendar, FaUser} from 'react-icons/fa'



const PorfileCard = () => {
    const style = {transform : 'translate(40px,5px)', position:'absolute'}
  return (
    <>
      <div className='bg-black my-10 border-2 border-blue-400 w-[16em] ml-[40px] rounded-xl'>
        <div className='bg-white'>
            <div className='text-black text-center py-16 border rounded-xl'>
                IMG
            </div>
        </div>
        <div className='text-white text-center font-mono text-[20px]'>
           <FaUser size={16} style={style}/>USERNAME
        </div>
        <div className='text-white text-center '>
            <FaCalendar size={16} style={style}/>
            2027
        </div>
        <div className='text-white text-center border-b-2  border-green-500 pt-1 pb-4'>
            <FaBriefcase size={16} style={style}/>HR, TATA ELSXI
        </div>
        <div className='text-white text-center py-3 px-2'>
            Tech Enthusiasist with extraordinary attachment to flutter...
        </div>
      </div>
    </>
  )
}

export default PorfileCard
