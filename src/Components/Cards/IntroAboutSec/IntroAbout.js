

import React from "react";
const IntroAbout = () => {
  return (
    <div className="w-full py-16">
      <div className="md:w-10/12 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <h5 className="text-orange-400 text-xl text-left">ABOUT US</h5>
            <div className="w-14 h-[1px] bg-orange-400 ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-left mt-4 md:mt-8">
            Lorem ipsum sit Amit
          </h1>
          <p className="text-lg text-left mt-6 md:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio at commodo ultrices. Donec accumsan, lacus in cursus
            rutrum, metus lectus sagittis purus, in pretium felis felis non nisi.
            Sed vehicula, enim nec interdum suscipit, erat leo dapibus neque, nec
            eleifend arcu mauris sed odio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-14">
            <div className="py-4 px-2 bg-orange-200 text-center">
              <h2 className="text-3xl font-semibold text-orange-500">10+</h2>
              <h3 className="text-black text-xl font-medium">Years Experience</h3>
            </div>
            <div className="py-4 px-2 bg-orange-200 text-center">
              <h2 className="text-3xl font-semibold text-orange-500">20+</h2>
              <h3 className="text-black text-xl font-medium">Chefs</h3>
            </div>
            <div className="py-4 px-2 bg-orange-200 text-center">
              <h2 className="text-3xl font-semibold text-orange-500">100+</h2>
              <h3 className="text-black text-xl font-medium">Dishes</h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start py-10 md:py-0">
          <img
            src="/Assets/img5.png"
            alt="foodimg"
            className="md:w-500 md:h-500 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default IntroAbout;
