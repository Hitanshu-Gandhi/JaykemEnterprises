import React from "react";
import logo from "../../assets/images/logo/je_logo(png).png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="hidden md:block">
      <div className="p-1 flex justify-between">
        {/* logo */}
        <div className="flex items-center">
          <img src={logo} alt="JE" className="h-24 brightness-0" />
          <h1 className="text-[2.4rem] font-Arimo font-medium mx-1 uppercase p-1 text-center">
            Jaykem Enterprises
          </h1>
        </div>

        {/* links */}
        <div className=" flex items-center">
          <Link to={"/"}>
            <div className=" cursor-pointer font-Poppins p-2 mx-4 text-lg hover:text-blue-800 hover:scale-105 transition-all duration-300">
              <p>Home</p>
            </div>
          </Link>
          <Link to={"/product"}>
            <div className=" cursor-pointer font-Poppins p-2 mx-4 text-lg hover:text-blue-800 hover:scale-105 transition-all duration-300">
              <p>Products</p>
            </div>
          </Link>
          <Link to={"/about"}>
            <div className=" cursor-pointer font-Poppins p-2 mx-4 text-lg hover:text-blue-800 hover:scale-105 transition-all duration-300">
              <p>About</p>
            </div>
          </Link>
          <Link to={"/contact"}>
            <div className=" cursor-pointer font-Poppins p-2 mx-4 text-lg hover:text-blue-800 hover:scale-105 transition-all duration-300">
              <p>Contact</p>
            </div>
          </Link>
          <Link to={"/blog"}>
            <div className=" cursor-pointe font-Poppins p-2 mx-4 text-lg hover:text-blue-800 hover:scale-105 transition-all duration-300">
              <p>Blog</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
