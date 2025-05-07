import React from 'react'
import Heading from '../../Utils/Heading';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import logo from "../../images/blogo.png"

const Aboutbanner = () => {
  return (
    <div className="bg-white pt-[24px] pb-[48px]">
        <div className="container">
            <div className='w-[100%] bg-[#F6F6F7] text-center rounded-3 py-[48px]'>
                <div className = "flex justify-center items-center gap-x-4 mb-[24px]">
                    <div className="w-[80px] h-[80px] rounded-[50%] overflow-hidden">
                        <img className = "w-[100%] h-[100%] object-cover" src={logo} alt="not found" />
                    </div>
                    <div>
                        <Heading level="h4" className="text-[20px] text-[#181A2A] font-medium capitalize" text="Jonathan Doe"/>
                        <Heading level="h5" className="text-[20px] text-[#696A75] font-medium " text="Collaborator & Editor"/>
                    </div>
                </div>
                <div className='flex justify-center'> 
                    <Heading level="p" className="text-center w-[674px] text-[18px] text-[#3B3C4A] line-clamp-[150%]" text="Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives."/>
                </div>
                <div className="flex justify-center items-center gap-x-2 mt-[24px]">
                    <div className=" flex justify-center items-center w-[20px] h-[20px] bg-[#696A75] rounded-[6px]">
                        <FaFacebookF />
                    </div>
                    <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#696A75] rounded-[6px]">
                        <FaTwitter />
                    </div>
                    <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#696A75] rounded-[6px]">
                        <FaInstagram />
                    </div>
                    <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#696A75] rounded-[6px]">
                        <CiYoutube />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutbanner