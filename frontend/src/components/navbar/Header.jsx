import React from "react";
import logo from "../../assets/images/logo/je_logo(png).png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white hidden md:block top-0 z-50">
      <div className="p-4 flex justify-between items-center container mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="JE" className="h-16" />
          <h1 className="text-2xl md:text-3xl font-bold font-Arimo uppercase text-gray-800">
            Jaykem Enterprises
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="font-Poppins text-lg text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="font-Poppins text-lg text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="font-Poppins text-lg text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-Poppins text-lg text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="font-Poppins text-lg text-gray-700 hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
