import { CgFacebook } from "react-icons/cg";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div  id="About Us" className="p-[80px] text-left  ">
      {/* Newsletter Section */}
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="font-semibold text-lg ">
            Subscribe to our newsletter
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="flex flex-col space-y-4 ">
          <div className="flex items-center space-x-4 mr-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-[12px] rounded-[5px] border-[1px] border-black w-[256px]"
            />
            <button className="py-[12px] px-[24px] rounded-[5px] border-[1px] border-black">
              Subscribe
            </button>
          </div>
          <p className="text-sm">
            By subscribing you agree to our{" "}
            <span className="border-b-[1px] border-black">Privacy Policy</span>.
          </p>
        </div>
      </div>

      {/* Footer Content Section */}
      <div className="flex  items-start justify-between my-20 ">
        {/* Logo Section */}
        <div className="flex items-center space-x-1 flex-1 ">
          <Image
            src={"/images/logo-icon.svg"}
            alt="logo"
            height={30.38}
            width={32.58}
          />
          <span className="text-[25.07px] font-bold">Ddsgnr</span>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 gap-[200px] mt-2 pr-16 ">
          {/* Column 1 */}
          <div>
            <h1 className="font-semibold">Courses</h1>
            <p className="text-sm pt-5">Business</p>
            <p className="text-sm pt-3">Development</p>
            <p className="text-sm pt-3">Technology</p>
            <p className="text-sm pt-3">Design</p>
            <p className="text-sm pt-3">Programming</p>
          </div>

          {/* Column 2 */}
          <div className="">
            <h1 className="font-semibold ">Resources</h1>
            <p className="text-sm pt-5">Career</p>
            <p className="text-sm pt-3">Resume</p>
            <p className="text-sm pt-3">Learning</p>
            <p className="text-sm pt-3">Interview Preparation</p>
            <p className="text-sm pt-3">Jobs</p>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="font-semibold ">About Us</h1>
            <p className="text-sm  pt-5">Contact</p>
            <p className="text-sm pt-3">Help/Support</p>
            <p className="text-sm pt-3">FAQ</p>
            <p className="text-sm pt-3">Terms and Conditions</p>
            <p className="text-sm pt-3">Partners</p>
          </div>
        </div>
      </div>

      <div className="border-b-[1px] border-black flex justify-between items-center"></div>
      <div className="flex justify-between items-center mt-10">
        {/* Text Section */}
        <div className="flex items-center space-x-4">
          <p className="text-sm">2023 Ddsgnr. All right reserved.</p>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms of Service</p>
          <p className="text-sm">Cookies Settings</p>
        </div>

        {/* Icon Section */}
        <div className="flex items-center space-x-4 mr-2">
          <CgFacebook size={20} />
          <FaInstagram size={20} />
          <FaTwitter size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
