import React from "react";
import { PropagateLoader } from "react-spinners";
import logo from "../../assets/images/logo/je_logo(png).png";

const Preloader = () => {
  return (
    <div className=" h-screen w-full bg-blue-900 fixed bottom-0 left-0 right-0 z-50 grid justify-center items-center ">
      <div className=" grid grid-col-2">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            className=" h-[13rem] brightness-0 invert-[1]"
          />
        </div>
        <div className=" grid justify-center items-center">
          <PropagateLoader color="#ffffff" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
