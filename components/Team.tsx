
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Team = () => {
  return (
    <div className="py-[112px] px-[64px] text-center bg-[#F7F7F7]">
      <h1 className="text-5xl font-bold">Our team</h1>
      <p className="text-lg py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <Image
            src={"/images/member-1.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="mb-6"
          />
          <h1 className="font-semibold text-2xl">James Nduku</h1>
          <p className="text-xl py-2">Marketing Coordinator</p>
          <div className="flex gap-2 mt-3">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <Image
            src={"/images/member-2.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="mb-6"
          />
          <h1 className="font-semibold text-2xl">Joseph Munyambu</h1>
          <p className="text-xl py-2">Nursing Assistant</p>
          <div className="flex gap-2 mt-3">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <Image
            src={"/images/member-3.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="mb-6"
          />
          <h1 className="font-semibold text-2xl">Joseph Ngumbau</h1>
          <p className="text-xl py-2">Nursing Assistant</p>
          <div className="flex gap-2 mt-3">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col items-center">
          <Image
            src={"/images/member-4.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="mb-6"
          />
          <h1 className="font-semibold text-2xl">Erick Kipkemboi</h1>
          <p className="text-xl py-2">Web Designer</p>
          <div className="flex gap-2 mt-3">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Team Member 5 */}
        <div className="flex flex-col items-center">
          <Image
            src={"/images/member-5.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="mb-6"
          />
          <h1 className="font-semibold text-2xl">Stephen Kerubo</h1>
          <p className="text-xl py-2">President of Sales</p>
          <div className="flex gap-2 mt-3">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        {/* Team Member 6 */}
        <div className="flex flex-col items-center">
          <Image
            src={"/images/member-6.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="mb-6"
          />
          <h1 className="font-semibold text-2xl">John Leboo</h1>
          <p className="text-xl py-2">Dog Trainer</p>
          <div className="flex gap-2 mt-3">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
