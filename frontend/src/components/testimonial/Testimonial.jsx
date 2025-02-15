import React from "react";
import Rating from "@mui/material/Rating";

const Testimonial = (props) => {
  const [value, setValue] = React.useState(5);

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 group">
      <div className="flex flex-col items-center mb-4">
        {/* Customer Image (optional) */}
        {props.img && (
          <img
            src={props.img}
            alt={props.name}
            className="h-20 w-20 rounded-full object-cover mb-4"
          />
        )}
        {/* Customer Name */}
        <h4 className="text-xl font-semibold text-gray-800">{props.name}</h4>
        {/* Rating (Optional) */}
        <Rating
          name="read-only"
          value={value}
          readOnly
          className="mt-2 text-yellow-500"
        />
      </div>

      {/* Testimonial Description */}
      <p className="text-sm text-gray-600 leading-6 font-light opacity-90">
        "{props.desc}"
      </p>
    </div>
  );
};

export default Testimonial;
