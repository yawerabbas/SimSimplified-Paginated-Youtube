import React from "react";
import { Link } from "react-router-dom";
import { RiVideoAddLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import pfpyt from "../images/random-pfp.jpg";

import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 dark:bg-black">
      <div className="flex h-5 items-center">
        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          <img
            className="h-full md:hidden"
            src={ytLogoMobile}
            alt="Youtube Clone"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiSettings className="text-white text-xl cursor-pointer" />
          </div>

        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src={pfpyt} alt="ok" />
        </div>
      </div>
    </div>
  );
};

export default Header;
