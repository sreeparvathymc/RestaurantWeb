
import React from "react";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className="w-full">
      <div className="h-32 bg-orange w-full"></div>
      <div className="bg-orange text-center py-20">
        <h1 className="text-4xl md:text-7xl font-semibold mb-8 px-6 md:px-0">
          Delightful Bites To Every Door
        </h1>
        <p className="text-lg md:text-xl px-6 md:px-0 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio at commodo ultrices. Donec accumsan, lacus in cursus
        </p>
        <div className="flex justify-center mt-8">
          <Link to="/menu">
          <button className="py-3 px-6 md:px-10 text-black bg-slate-200 rounded-md mx-2 hover:bg-black hover:text-white transition duration-500 ease-in-out">
            Order Now
          </button>
          </Link>
          <button className="py-3 px-6 md:px-10 bg-black text-white rounded-md mx-2 hover:text-black hover:bg-slate-200 transition duration-500 ease-in-out">
            Book a table
          </button>
        </div>
      </div>
    </div>
  );
};
export default Intro;

