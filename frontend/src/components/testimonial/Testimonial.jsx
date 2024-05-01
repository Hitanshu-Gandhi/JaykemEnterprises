import React from "react";
import Rating from "@mui/material/Rating";

const Testimonial = (props) => {
  const [value, setValue] = React.useState(5);
  return (
    <div className="bg-white shadow-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl">
      {/* <img src={props.img} className="h-20 w-24 mx-auto" /> */}
      <h4 className="uppercase text-xl font-bold">{props.name}</h4>
      <p className="text-sm leading-7 my-3 font-light opacity-90">
        {props.desc}
      </p>
      {/* <Rating name="read-only" value={value} readOnly /> */}
    </div>
  );
};

export default Testimonial;
