import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-[#F7F7F7] pt-10 px-[64px] ">
      <h1 className="font-bold text-5xl">Customer Testimonials</h1>
      <p className="text-lg pt-5 pb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-3 gap-5 mt-10 ">
        {/* Card 1 */}
        <div className="w-[362.67px] h-[321.89px] p-[32px] border-[1px] border-black">
          <div className="flex">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
          <p className="text-lg py-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center gap-10">
            <Image
              src={"/images/member-3.png"}
              alt="category-3"
              height={50}
              width={50}
              className="rounded-[50%]"
            />
            <div>
              <h1 className="font-semibold">James Nduku</h1>
              <p>Software Developer</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[362.67px] h-[321.89px] p-[32px] border-[1px] border-black">
          <div className="flex">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
          <p className="text-lg py-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center gap-10">
            <Image
              src={"/images/member-1.png"}
              alt="category-1"
              height={50}
              width={50}
              className="rounded-[50%]"
            />
            <div>
              <h1 className="font-semibold">Erick Kipkemboi</h1>
              <p>Scrum Master</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[362.67px] h-[321.89px] p-[32px] border-[1px] border-black">
          <div className="flex">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
          <p className="text-lg py-5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="flex items-center gap-10">
            <Image
              src={"/images/member-6.png"}
              alt="category-6"
              height={50}
              width={50}
              className="rounded-[50%]"
            />
            <div>
              <h1 className="font-semibold">Stephen Kerubo</h1>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10  pb-20 flex items-center gap-x-[1030px]">
        {/* Dots Group */}
        <div className="flex justify-center items-center">
          <Image src={"/images/dots.svg"} alt="dots" height={8} width={72} />
        </div>

        {/* Arrows Group */}
        <div className="flex items-center   ">
          <IoArrowBackCircleOutline size={40} />
          <IoArrowForwardCircleOutline size={40} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
