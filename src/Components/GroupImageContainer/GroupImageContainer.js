import React from "react";

const GroupImageContainer = () => {
  return (
    <div className="">
      <div className="flex h-56">
        <div className="w-1/5 overflow-hidden">
          <img
            src="Assets/img10.jpg"
            alt="img"
            style={{ width: "100%", height: "100%" }}
            className="object-cover"
          />
        </div>

        <div className="w-1/5 overflow-hidden">
          <img
            src="Assets/img11.jpg"
            alt="img"
            style={{ width: "100%", height: "100%" }}
            className="object-cover"
          />
        </div>

        <div className="w-1/5 overflow-hidden">
          <img
            src="Assets/img12.jpg"
            alt="img"
            style={{ width: "100%", height: "100%" }}
            className="object-cover"
          />
        </div>

        <div className="w-1/5 overflow-hidden">
          <img
            src="Assets/img13.jpg"
            alt="img"
            style={{ width: "100%", height: "100%" }}
            className="object-cover"
          />
        </div>

        <div className="w-1/5 overflow-hidden">
          <img
            src="Assets/img14.jpg"
            alt="img"
            style={{ width: "100%", height: "100%" }}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default GroupImageContainer;
