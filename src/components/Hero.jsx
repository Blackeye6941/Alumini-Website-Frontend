import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="block xl:pt-[10%] lg:pt-[10%] md:pt-[15%] pt-[25%] pl-[40px] text-white bg-black">
        <div className='xl:text-[70px] lg:text-[60px] text-[50px] font-bold '>Together is a wonderful </div>
        <div className='xl:text-[70px] lg:text-[60px] text-[50px] font-bold'>place to be :)</div>
        <div className='pt-[100px]'>
        <button className='xl:text-[35px] text-[25px] border-[3px] py-2 px-6 rounded-[35px] border-blue-600'>
            Connect with Linkedin
        </button>
      </div>
      </div>
      
    </>
  )
}

export default Hero