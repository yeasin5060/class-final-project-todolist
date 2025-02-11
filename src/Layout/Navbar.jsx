import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
