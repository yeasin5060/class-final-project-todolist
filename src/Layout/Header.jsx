import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from '../images/Logo.png'

const Header = () => {
  return (
    <header className="bg-white text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* time */}
        <div>
          <h4 className="text-black text-4 capitalize font-bold">monday , march 2025 </h4>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="career" className="hover:text-blue-400 transition">Career</Link>
          <Link to="contact" className="hover:text-blue-400 transition">Contact Us</Link>
          <Link to="signin" className="hover:text-blue-400 transition">Login / Register</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link  className="fab fa-facebook text-xl hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
          <Link className="fab fa-twitter text-xl hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link className="fab fa-instagram text-xl hover:text-pink-500" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
