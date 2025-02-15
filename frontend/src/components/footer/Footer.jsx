import React from "react";
import logo from "../../assets/images/logo/je_logo(png).png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#b9c4d7]">
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-16 p-4">
        <div className="grid justify-left ">
          <div className="grid justify-center">
            <img src={logo} className="mx-20 mt-4 h-[12rem]" />
            <h1 className="text-3xl text-center my-4 font-Poppins">
              Jaykem Enterprises
            </h1>
          </div>
          <p className="text-normal px-4 text-center font-Roboto">
            "Elevating Industries with Exceptional Chemical Solutions Your
            Trusted Partner for Quality and Excellence"
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-xl mt-6 font-Roboto">Quick Links</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-14 md:mt-12 mt-6 cursor-pointer font-Poppins">
            <div className=" grid justify-center items-center">
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/product"}>Products</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/blog"}>Blog</Link>
            </div>
            <div className=" grid justify-center items-center">
              <Link to={"/product/calciumchloride"}>CalciumChloride</Link>
              <Link to={"/product/magnesiumcarbonate"}>MagnesiumCarbonate</Link>
              <Link to={"/product/kaolinpowder"}>KaolinPowder</Link>
              <Link to={"/product/aluminiumsulphate"}>AluminiumSulphate</Link>
              <Link to={"/product/calciumcarbonate"}>CalciumCarbonate</Link>
            </div>
            <div className=" grid justify-center items-center">
              <Link to={"/product/ferroussulphate"}>FerrousSulphate</Link>
              <Link to={"/product/hydratedlime"}>HydratedLime</Link>
              <Link to={"/product/quicklime"}>QuickLime</Link>
              <Link to={"/product/alum"}>Alum</Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-xl mt-6 font-Roboto">Location</h1>
          <div className="text-left md:mt-10 mt-6 font-Poppins">
            <p className="p-2 text-justify">
              Address: Unit No.- 263, First Floor, "Raghuleela Mega Mall" Near
              Poisar Bus Depot, Kandivali (West), Mumbai-400067
            </p>
            <p className="p-2">Email: jaykem.ent@gmail.com</p>
            <p className="p-2">Contact: 9323007600/9226938184</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-2 font-Roboto cursor-pointer">
        <h1 className="p-3 grid md:justify-start justify-center align-middle items-center">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </h1>
        <h1 className="p-3 grid justify-center text-center items-center font-semibold">
          <a href="https://www.envisiatech.com/">Developed by Hitanshu Gandhi</a>
        </h1>
        <h1 className="p-3 flex md:justify-end justify-center align-middle items-center ">
          <InstagramIcon fontSize="large" className=" text-red-500 mx-2 " />
          <FacebookIcon fontSize="large" className=" text-blue-600 mx-2" />
          <TwitterIcon fontSize="large" className=" text-blue-600 mx-2" />
          <LinkedInIcon fontSize="large" className=" text-blue-800 mx-2" />
        </h1>
      </div>
    </div>
  );
};

export default Footer;
