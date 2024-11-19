import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-[1280px] h-[54px] bg-[#F7F7F7] pr-[64px] pl-[62px] flex items-center justify-between ">
      <div className="flex items-center space-x-4  ">
        <p className="text-sm">Phone Number: 956 742 455 678</p>
        <p>|</p>
        <p>Email: info@ddsgnr.com</p>
      </div>
      <div className="flex items-center space-x-4  ">
        <CgFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
        <FaLinkedin size={20} />
      </div>
    </div>
  );
};

export default TopBar;
