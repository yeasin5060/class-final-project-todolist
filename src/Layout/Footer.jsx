import React from "react";
import Heading from "../Utils/Heading";
import { Link } from "react-router-dom";
import logo from "../images/blogo.png"


const Footer = () => {
  return (
    <footer className="bg-white py-[64px]">
      <div className="container">
        <div className="flex justify-between gap-x-5 ">
          <div>
            <Heading level="h4" className= "text-[18px] text-[#181A2A] mb-3 font-semibold capitalize" text = "about"/>
            <Heading level="p" className= " w-[280px] text-[16px] text-[#696A75] font-normal " text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
            <div className="mt-[24px]">
              <h5 className="text-[16px] text-[#181A2A] mb-1 font-semibold capitalize">email <span className="text-[16px] text-[#3B3C4A] font-normal "> : info@jstemplate.net</span></h5>
              <h5 className="text-[16px] text-[#181A2A] font-semibold capitalize">phone <span className="text-[16px] text-[#3B3C4A] font-normal "> : 01754789867</span></h5>
            </div>
          </div>
          {/*down to the quock link */}
          <div className="px-[118px] flex justify-between gap-x-[80px]">
            <div>
              <Heading level="h4" className="text-[18px] text-[#181A2A] mb-[24px] font-semibold capitalize" text="Quick Link" />
              <div className="flex justify-normal flex-col gap-y-2">
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">home</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">about</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">blog</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">archive</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">author</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">contact</Link>
              </div>
            </div>
            {/* down to the category link*/}
            <div>
              <Heading level="h4" className="text-[18px] text-[#181A2A] mb-[24px] font-semibold capitalize" text="categoty" />
              <div className="flex justify-normal flex-col gap-y-2">
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">Lifestyle</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">Technology</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">Travel</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">Business</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">Economy</Link>
                 <Link className="text-[16px] text-[#696A75] font-normal capitalize" to ="">Sports</Link>
              </div>
            </div>
          </div>
          <div className="py-[32px] px-[51px]">
            <Heading level="h4" className="text-[20px] text-[#181A2A] mb-2 font-semibold capitalize" text="Weekly Newsletter"/>
            <Heading level="h5" className="text-[16px] text-[#3B3C4A] font-normal" text="Get blog articles and offers via email"/>
            <div className="w-[270px] mt-[30px]">
              <div className="w-[100%]">
                <input className="w-[100%] py-2 px-4 text-black outline-0 border-[1px] border-[#97989F] rounded-[5px]" type="email" placeholder="Your email"/>
              </div>
              <div className=" w-[100%] mt-2 flex justify-center items-center" >
                <button className="w-[100%] text-4 text-white font-medium py-3 bg-[#4B6BFB] cursor-pointer capitalize rounded-[10px]">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[96px] py-[36px]">
          <div className="flex justify-normal gap-x-[3px]">
              <div className="w-[48px] h-[48px]">
                <img className="w-[100%] h-[100%] overflow-hidden object-cover" src={logo} alt="not found" />
              </div>
             <div>
              <Heading level="h4" className="text-[18px] text-[#141624] mb-[4px] font-semibold capitalize" text="MetaBlog"/>
              <Heading level="h5" className="text-[16px] text-[#696A75] font-normal" text="© JS Template 2023. All Rights Reserved."/>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-[32px]">
            <Link className="text-[16px] text-[#3B3C4A] font-normal capitalize" to="">Terms of Use</Link>
            <Link className="text-[16px] text-[#3B3C4A] font-normal capitalize" to="">Privacy Policy</Link>
            <Link className="text-[16px] text-[#3B3C4A] font-normal capitalize" to="">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
