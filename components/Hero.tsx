
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-auto justify-center items-start md:h-[562px] w-full flex flex-col md:flex-row ">
      {/* Left Section */}
      <div className="w-full flex flex-col justify-center items-center m-4 md:m-24 pt-20 text-center md:text-left">
        <h1 className="text-4xl sm:text-center pr-10 md:text-[56px] font-bold md:w-[496px] leading-tight">
          Learn new skills online with ease
        </h1>
        <p className="text-base md:text-lg py-5  sm:text-center pr-10 sm:px-30 md:py-5 md:text-center ml-7">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="flex flex-row gap-3 sm:gap-6">
          <button className="py-[12px] px-[24px] bg-black text-white rounded-[5px]">
            Start learning now
          </button>
          <button className="py-[12px] px-[24px] rounded-[5px] border-[1px] border-black">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full flex justify-center items-start ">
        <Image
          src={"/images/hero-sec.jpeg"}
          alt="hero-image"
          height={300}
          width={640}
          className="object-cover w-full md:w-2/3 sm:h-4/5" 
        />
      </div>
    </div>
  );
};

export default Hero;
