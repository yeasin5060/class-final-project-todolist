import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/Logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-[158px] h-[36px] ">
            <img className="w-[100%] h-[100%] overflow-hidden " src={logo} alt="not found" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link to="about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link to="contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <Link to="pages" className="text-gray-700 hover:text-blue-600 transition">
              pages
            </Link>
            <Link to="news" className="text-gray-700 hover:text-blue-600 transition">
              news
            </Link>
            <Link to="category" className="text-gray-700 hover:text-blue-600 transition">
              new post
            </Link>
          </div>
          <div className="text-black">
            <input className="w-[200px] h-[30px] bg-[#c0b8b8] py-2 px-4 rounded-[10px] border-0 outline-0" type="search" placeholder="search" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
