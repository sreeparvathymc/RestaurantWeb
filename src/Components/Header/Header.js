
import React, { useState } from "react";
import ShoppingBagSec from "./ShoppingBagSec";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "./Nav-items";
import BeforeSignIn from "../SignIn/BeforeSignIn";
import AfterSignIn from "../SignIn/AfterSignIn";
import { ChevronDown } from "lucide-react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div className="bg-cream fixed top-0 w-full z-50 shadow-sm header">
      <div className="px-5 sm:px-0 sm:w-10/12 md:w-11/12 mx-auto flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-semibold text-orange-500">
            <NavLink to="/">FlavourSpot.</NavLink>
          </h2>
        </div>
        <div className="ml-4 flex">
          <div className="">
            <NavLink to="/cartlist">
              <ShoppingBagSec />
            </NavLink>
          </div>
          <div className="ml-4 flex items-end">
            <div className="App">
              {!isLoggedIn && <BeforeSignIn onLogin={handleLogin} />}
              {isLoggedIn && (
                <AfterSignIn onLogout={handleLogout} email={userEmail} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-10/12 w-11/12 mx-auto flex justify-center items-center pt-2 pb-3 nav">
        <div className="flex justify-center">
          <ul className="flex justify-center">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.key}
                className="ml-4 relative hover:text-orange-500 text-black font-medium"
              >
                {item.subItems ? (
                  <div className="inline-block">
                    <button
                      onClick={toggleDropdown}
                      className="py-2 px-4 font-medium flex items-center"
                    >
                      {item.title}
                      <ChevronDown
                        className="ml-1 hover:text-orange-400"
                        style={{ width: "20px" }}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.key}
                            to={subItem.href}
                            className="block py-2 text-gray-800 hover:bg-orange-100 px-14 active:text-orange-400"
                            activeClassName="text-red-900"
                            onClick={closeDropdown}
                          >
                            {subItem.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.href}
                    className="block py-2 px-4 text-black hover:text-orange-500 active:text-red-900"
                    activeClassName="text-red-900"
                  >
                    {item.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
