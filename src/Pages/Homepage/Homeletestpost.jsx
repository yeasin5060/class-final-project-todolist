import React from 'react';
import Heading from '../../Utils/Heading';
import { Link } from 'react-router-dom';
import logo from "../../images/blogo.png";
import imgone from "../../images/imageone.png";
import imgtwo from "../../images/imagetwo.png";
import imgthree from "../../images/imagethree.png";
import imgfour from "../../images/imagefour.png";
import imgfive from "../../images/imagefive.png";
import imgsix from "../../images/imagesix.png";
import imgseven from "../../images/imageseven.png";
import imgeight from "../../images/imageeight.png";
import imgnine from "../../images/imagenine.png"

const homePostArray = [
    {
        id : "1",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgone,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "2",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgtwo,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "3",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgthree,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "4",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgfour,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "5",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgfive,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "6",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgsix,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "7",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgseven,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "8",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgeight,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },

    {
        id : "9",
        link : "Technology",
        postData : "The Impact of Technology on the Workplace: How Technology is Changing",
        postImg : imgnine,
        profileImg : logo,
        name : "Ernie Smith",
        date : "August 20, 2022"
    },
    
]

const Homeletestpost = () => {
  return (
    <div className="bg-white">
        <div className="container">
            <div className="text-left">
                <Heading level="h3" className="text-[24px] text-[#181A2A] font-bold capitalize" text = "Latest Post" />
                <div className="flex justify-between gap-y-[20px] mt-[32px] flex-wrap">
                    {
                        homePostArray.map((item , index) => (
                            <div key={index} className="w-[392px] bg-white p-4 rounded-[6px] shadow-xl ">
                            <div className="w-[100%] h-[240px] overflow-hidden rounded-[6px]">
                                <img className = " w-[100%] HE-[100%] object-cover rounded-[6px]" src={item.postImg} alt="not found" /> 
                            </div>
                                <div className='mt-[24px]'>
                                    <Link className="text-[14px] text-[#4B6BFB] font-medium capitalize" to= "">{item.link} </Link>
                                    <Heading level="h3" className="text-[24px] text-[#181A2A] font-semibold mt-[16px]" text={item.postData}/>
                                    <div className="flex justify-normal items-center mt-[24px] gap-x-[20px]">
                                        <div className='w-[50px] h-[50px] overflow-hidden rounded-[50%]'>
                                            <img className="w-[100%] h-[100%] object-cover" src={item.profileImg} alt="not found" />
                                        </div>
                                        <Heading level="h4" className="text-[16px] text-[#97989F] font-medium capitalize" text = {item.name}/>
                                        <Heading level="h4" className="text-[16px] text-[#97989F] font-medium capitalize" text = {item.date}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homeletestpost