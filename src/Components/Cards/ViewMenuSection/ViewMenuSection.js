
import React from "react";
import { Link } from "react-router-dom";
const ViewMenuSection = () => {
  return (
    <div className="bg-orange w-full py-16">
      <div className="md:w-10/12 w-11/12 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <div className="flex items-center py-5 md:py-0">
          <div className="md:pl-10">
            <h1 className="text-4xl md:text-6xl font-semibold text-left mb-4">What to Order Now ?      </h1>
            <p className="text-left">Lorem ipsum sit Amit Lorem ipsum sit Amit Lorem ipsum sit Amit Lorem ipsum sit Amit Lorem ipsum sit Amit Lorem ipsum sit Amit Lorem ipsum sit Amit Lorem ipsum sit Amit</p>
            <div className="mt-5 flex justify-start">
              <Link to="/menu">
              <button className="px-5 py-2 bg-black text-white rounded-md hover:text-orange-300">View Menu</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="/Assets/img6.png" alt="foodimg" className="w-full md:max-w-lg" style={{ height: "auto" }} />
        </div>
      </div>
    </div>
  );
};
export default ViewMenuSection;
