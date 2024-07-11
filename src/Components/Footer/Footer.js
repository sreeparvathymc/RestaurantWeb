
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black py-16 footer">
      <div className="md:w-10/12 w-11/12 mx-auto">
        <div className="mb-5">
          <Link to="/">
            <h4 className="text-orange-600 text-3xl text-left">flavourspot</h4>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-white">
            <h4 className="text-2xl font-medium mb-5 text-left">Contact Us</h4>
            <p className="text-left">Flavour Spot</p>
            <p className="text-left">Kochi</p>
            <p className="text-left">flavourspot@gmail.com</p>
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-medium mb-5 text-left">Quick Links</h4>
            <Link to="/menu">
            <p className="text-left hover:text-orange-500">Menu</p>
            </Link>
            <Link to="/offers">
            <p className="text-left hover:text-orange-500">Offers</p>
            </Link>
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-medium mb-5 text-left">Learn More</h4>
            <Link>
            <p className="text-left hover:text-orange-500">Privacy</p>
            </Link>
            <Link>
            <p className="text-left hover:text-orange-500">Security</p>
            </Link>
            <Link>
            <p className="text-left hover:text-orange-500">Terms</p>
            </Link>
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-medium mb-5 text-left">Social Links</h4>
            <div className="flex gap-6 items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
              <Link>
              <img src="/Assets/utubeicon.png" alt="YouTube" />
              </Link>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Link>
                <img src="/Assets/facebookicon.png" alt="Facebook" />
                </Link>
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Link>
                <img src="/Assets/Instagramicon.png" alt="Instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white flex flex-col md:flex-row justify-center items-center mt-10">
          <p className="text-white mb-4 mt-8 text-center pt-6">copyright@flavourspot.in</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
