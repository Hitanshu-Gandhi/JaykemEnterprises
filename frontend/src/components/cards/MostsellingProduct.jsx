import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MostsellingProduct = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="flex justify-center items-center p-4"
    >
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">{props.name}</h3>
          <p className="text-gray-600 mt-2 text-base">{props.specs}</p>
          {/* <div className="mt-4 flex justify-center">
            <a
              href={props.link}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Details
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MostsellingProduct;
