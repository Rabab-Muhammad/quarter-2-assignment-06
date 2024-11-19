import React from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Team = () => {
  return (
    <div className="py-[112px] px-[64px]  text-center bg-[#F7F7F7]">
      <h1 className="text-5xl font-bold">Our team</h1>
      <p className="text-lg py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </p>
      <div className="grid grid-cols-3 gap-10 mt-14">
        <div>
          <Image
            src={"/images/member-1.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="ml-36"
          />
          <h1 className="font-semibold text-2xl pt-9">James Nduku</h1>
          <p className="text-xl py-2">Marketing Coordinator</p>
          <div className="flex gap-2 mt-3 ml-36">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        <div>
          <Image
            src={"/images/member-2.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="ml-36"
          />
          <h1 className="font-semibold text-2xl pt-9">Joseph Munyambu</h1>
          <p className="text-xl py-2">Nursing Assistant</p>
          <div className="flex gap-2 mt-3 ml-36">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        <div>
          <Image
            src={"/images/member-3.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="ml-36"
          />
          <h1 className="font-semibold text-2xl pt-9">Joseph Ngumbau</h1>
          <p className="text-xl py-2">Nursing Assistant</p>
          <div className="flex gap-2 mt-3 ml-36">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        <div>
          <Image
            src={"/images/member-4.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="ml-36 mt-10"
          />
          <h1 className="font-semibold text-2xl pt-9">Erick Kipkemboi</h1>
          <p className="text-xl py-2">Web Designer</p>
          <div className="flex gap-2 mt-3 ml-36">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        <div>
          <Image
            src={"/images/member-5.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="ml-36 mt-10 "
          />
          <h1 className="font-semibold text-2xl pt-9">Stephen Kerubo</h1>
          <p className="text-xl py-2">President of Sales</p>
          <div className="flex gap-2 mt-3 ml-36">
            <FaLinkedin className="h-[18px] w-[18px]" />
            <FaTwitter className="h-[18px] w-[18px]" />
            <FaDribbble className="h-[18px] w-[18px]" />
          </div>
        </div>

        <div>
          <Image
            src={"/images/member-6.png"}
            alt="team-member-img"
            height={80}
            width={80}
            className="ml-36 mt-10"
          />
          <h1 className="font-semibold text-2xl pt-9">John Leboo</h1>
          <p className="text-xl py-2">Dog Trainer</p>
          <div className="flex gap-2 mt-3 ml-36">
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
