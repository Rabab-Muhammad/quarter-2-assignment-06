import React from "react";
import Image from "next/image";

const TrustedCompan = () => {
  return (
    <div className="py-[30px] px-[16px] md:px-[30px] w-full bg-[#F7F7F7] flex flex-col md:flex-row justify-center items-center mt-0">
      <h1 className="font-bold text-2xl text-center md:text-left mb-6 md:mb-0">
        Trusted by 2000+ companies worldwide.
      </h1>

      <div className="flex flex-wrap justify-center gap-8 md:justify-around items-center mt-10">
        <div className="flex justify-center items-center">
          <Image
            src={"/images/logo-00.svg"}
            alt="company-logo"
            height={38.52}
            width={123.8}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/images/logo-01.svg"}
            alt="company-logo"
            height={38.52}
            width={123.8}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/images/logo-02.svg"}
            alt="company-logo"
            height={38.52}
            width={123.8}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/images/logo-03.svg"}
            alt="company-logo"
            height={38.52}
            width={123.8}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/images/logo-04.svg"}
            alt="company-logo"
            height={38.52}
            width={123.8}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/images/logo-05.svg"}
            alt="company-logo"
            height={38.52}
            width={123.8}
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompan;
