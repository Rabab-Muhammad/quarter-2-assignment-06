import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#F7F7F7] px-[64px] py-4 flex items-center justify-between w-[1280px] h-[72px] mt-3">
      <div className="flex items-center space-x-4">
        <Image
          src={"/images/logo-icon.svg"}
          alt="logo"
          height={30.38}
          width={32.58}
        />
        <span className="text-[25.07px] font-bold">Ddsgnr</span>
      </div>
      <nav className="  flex items-center px-2 space-x-8 bg-white h-[44px]">
        <a href="# ">Home</a>
        <a href="#">Courses</a>
        <a href="#">Services</a>
        <a href="#">Achievement</a>
        <a href="#">About Us</a>
        <a href="#">Testimonial</a>
      </nav>

      <div className="xs:flex space-x-4 ">
        <button className="py-[8px] px-[20px] rounded-[5px] border-[1px] border-black">
          Login
        </button>
        <button className="py-[8px] px-[20px] rounded-[5px]  bg-black text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
