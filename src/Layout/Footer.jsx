import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Navigation Links */}
        <div className="mb-4">
          <Link to="/" className="mx-2 hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="mx-2 hover:text-blue-400 transition">About</Link>
          <Link to="/contact" className="mx-2 hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-xl hover:text-blue-400"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-xl hover:text-pink-400"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} To-Do List. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
