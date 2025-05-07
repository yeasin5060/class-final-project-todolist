import React from 'react'
import banner from "../../images/homebanner.jpg"
import Heading from '../../Utils/Heading'
import logo from "../../images/blogo.png"

const Homebaner = () => {
  return (
    <div className="bg-white pt-[24px]">
      <div className="container ">
        <div className="w-[100%] h-[600px] overflow-hidden relative">
          <img className="w-[100%] h-[100%] object-cover rounded-[10px] " src={banner} alt="not found" />
        </div>
        <div className="w-[600px] p-[40px] bg-[#ffff] absolute contain-content left-[450px] top-[460px] mb-4 rounded-[10px] ">
          <div className='w-[97px] flex justify-center items-center cursor-pointer bg-[#4B6BFB] rounded-[10px]'>
            <button className='py-[12px] px-[30px] text-[14px] text-white font-medium border-0 rounded-[10px]'>
              Technology
            </button>
          </div>
          <Heading level="h3" className="w-[518px] text-[36px] text-[#181A2A] font-semibold" text = "The Impact of Technology on the Workplace: How Technology is Changing"/>
          <div className="flex justify-normal items-center mt-[24px] gap-x-[20px]">
            <div className='w-[50px] h-[50px] overflow-hidden rounded-[50%]'>
              <img className="w-[100%] h-[100%] object-cover" src={logo} alt="not found" />
            </div>
            <Heading level="h4" className="text-[16px] text-[#97989F] font-medium capitalize" text = "Jason Francisco"/>
            <Heading level="h4" className="text-[16px] text-[#97989F] font-medium capitalize" text = "August 20, 2022"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homebaner