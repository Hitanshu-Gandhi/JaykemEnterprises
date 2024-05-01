import React, { useState } from "react";
import logo from "../../assets/images/logo/je_logo(png).png";
import { Link } from "react-router-dom";
import { Squash as Hamburger, Squash } from "hamburger-react";

const Header2 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className=" md:hidden w-full p-2 flex justify-between items-center top-0 z-10 ">
        <div className="flex justify-center items-center text-4xl cursor-pointer">
          <img src={logo} alt="JE" height={70} width={70} className=" brightness-0" />
          <h1 className="text-[1.4rem] uppercase font-Arimo font-medium ">
            Jaykem Enterprises
          </h1>
        </div>

        <nav className="right-0">
          <Squash
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              setOpen(!isOpen);
            }}
          />
        </nav>
      </div>

      <div className={`grid grid-cols-1 p-4 gap-4 text-center ${isOpen ? "block" : "hidden"}`}>
        <Link to={"/"} className=" text-xl font-Poppins font-medium">
          Home
        </Link>
        <Link to={"/product"} className="text-xl font-Poppins font-medium">
          Product
        </Link>
        <Link to={"/about"} className=" text-xl font-Poppins font-medium">
          About
        </Link>
        <Link to={"/contact"} className=" text-xl font-Poppins font-medium">
          Contact
        </Link>
        <Link to={"/blog"} className=" text-xl font-Poppins font-medium">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Header2;
