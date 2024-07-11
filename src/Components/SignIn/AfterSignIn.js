import { CircleUser, ChevronDown, X, CircleCheck } from "lucide-react";
import React, { useState } from "react";
const AfterSignIn = ({ onLogout, email }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const username = email.split("@")[0];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };
  return (
    <div className="flex gap-2 items-center">
      {showSuccessMessage && (
        <div
          className=" absolute top-[180px] right-0 z-50 px-3 py-4 w-full h-[250px] transition-opacity duration-500 ease-in-out"
          style={{ opacity: showSuccessMessage ? 1 : 0 }}
        >
          <div className="bg-orange-200 rounded-lg z-50 px-10 py-4  w-[300px] h-[280px] mx-auto">
            <div className="flex justify-end">
              <button
                onClick={handleCloseSuccessMessage}
                className="text-black hover:text-gray-500"
              >
                <X style={{ width: "20px" }} />
              </button>
            </div>
            <div className="h-full flex justify-center items-center">
              <div className="flex justify-between items-center">
                <div className="">
                  <div className="">
                    <CircleCheck
                      className="mx-auto text-orange-400 mb-5"
                      style={{
                        width: "50px",
                        height: "50px",
                        fontSize: "50px",
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-medium">
                    Successfully Signed In
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="flex gap-2">
          <CircleUser style={{ width: "25px" }} />
          <ChevronDown
            onClick={toggleDropdown}
            className="cursor-pointer hover:text-orange-400"
            style={{ width: "20px" }}
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-4 top-16 bg-white border rounded shadow-lg z-50 px-3 py-4">
          <div className="flex gap-2">
            <div>
              <CircleUser style={{ width: "30px" }} />
            </div>
            <div>
              <div className="text-blue-800">{username}</div>
            </div>
          </div>
          <button
            className="w-full mt-4 text-left px-4 py-2 text-gray-800 hover:bg-orange-100"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
export default AfterSignIn;
