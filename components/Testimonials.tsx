


import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div id="Testimonial" className="bg-[#F7F7F7] pt-10 px-[64px]">
      
      <div className="text-center">
        <h1 className="font-bold text-5xl">Customer Testimonials</h1>
        <p className="text-lg pt-5 pb-10">
          Hear from our happy customers and their experiences with our service.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-10 justify-center">
        {/* Card 1 */}
        <div className="w-full max-w-[362.67px] p-6 border border-black rounded-lg bg-white">
          <div className="flex text-black">
            {[...Array(5)].map((_, index) => (
              <IoMdStar key={index} />
            ))}
          </div>
          <p className="text-lg py-5 ">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/images/member-3.png"
              alt="James Nduku"
              height={50}
              width={50}
              className="rounded-full"
            />
            <div>
              <h1 className="font-semibold ">James Nduku</h1>
              <p className="text-sm ">Software Developer</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[362.67px] p-6 border border-black rounded-lg bg-white">
          <div className="flex text-black">
            {[...Array(5)].map((_, index) => (
              <IoMdStar key={index} />
            ))}
          </div>
          <p className="text-lg py-5 ">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/images/member-1.png"
              alt="Erick Kipkemboi"
              height={50}
              width={50}
              className="rounded-full"
            />
            <div>
              <h1 className="font-semibold ">Erick Kipkemboi</h1>
              <p className="text-sm ">Scrum Master</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-[362.67px] p-6 border border-black rounded-lg bg-white">
          <div className="flex text-black ">
            {[...Array(5)].map((_, index) => (
              <IoMdStar key={index} />
            ))}
          </div>
          <p className="text-lg py-5 ">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare.&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/images/member-6.png"
              alt="Stephen Kerubo"
              height={50}
              width={50}
              className="rounded-full"
            />
            <div>
              <h1 className="font-semibold text-gray-800">Stephen Kerubo</h1>
              <p className="text-sm text-gray-600">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation (Dots and Arrows) */}
      <div className="flex flex-row justify-between items-center mt-32 pb-20">
        <div className="mb-4">
          <Image src="/images/dots.svg" alt="dots" height={8} width={72} />
        </div>
        <div className="flex items-center gap-5">
          <IoArrowBackCircleOutline size={40} className=" cursor-pointer " />
          <IoArrowForwardCircleOutline size={40} className=" cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
