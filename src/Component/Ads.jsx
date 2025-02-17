import React from 'react'
import Heading from '../Utils/Heading'

const Ads = () => {
  return (
    <div className='w-[750px] bg-[#E8E8EA] text-center py-[15px]'>
        <Heading level="h5" className="text-[14px] text-[#696A75] font-normal" text="Advertisement"/>
        <Heading level="h4" className="text-[20px] text-[#696A75] font-semibold" text="You can place ads"/>
        <Heading level="h5" className="text-[16px] text-[#696A75] font-normal" text="750x100"/>
    </div>
  )
}

export default Ads