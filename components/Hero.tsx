import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[800px] w-[1280px] flex  ">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-start m-24 pt-20 ">
        <h1 className="text-[56px] font-bold w-[496px] tracking-wide ">
          Learn new skills online with ease
        </h1>
        <p className="text-lg py-5 ">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="flex gap-3 ">
          <button className="py-[12px] px-[24px] bg-black text-white rounded-[5px]">
            Start learning now
          </button>
          <button className="py-[12px] px-[24px] rounded-[5px] border-[1px] border-black">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex justify-center items-center pt-4  ">
        <Image
          src={"/images/hero-sec.jpeg"}
          alt="hero-image"
          height={300}
          width={640}
        />
      </div>
    </div>
  );
};
export default Hero;
