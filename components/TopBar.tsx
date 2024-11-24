import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="hidden md:flex w-[1280px] h-[54px] bg-[#F7F7F7] px-4 sm:px-6 md:px-8 lg:px-[62px]  items-center justify-between border-b-[1px] border-black mb-5">
      <div className="flex items-center space-x-4 text-xs sm:text-sm md:text-base ">
        <p className="text-sm">Phone Number: 956 742 455 678</p>
        <p>|</p>
        <p>Email: info@ddsgnr.com</p>
      </div>
      <div className="flex items-center space-x-4 text-lg sm:text-xl md:2xl ">
        <CgFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
        <FaLinkedin size={20} />
      </div>
    </div>
  );
};

export default TopBar;
