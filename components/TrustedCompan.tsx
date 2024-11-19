import React from "react";
import Image from "next/image";

const TrustedCompan = () => {
  return (
    <div className="py-[80px] px-[64px] w-[1280px] bg-[#F7F7F7] flex justify-between items-center mt-4  ">
      <h1 className="font-bold text-2xl   ">
        Trusted by 2000+ companies worldwide.
      </h1>
      <div>
        <Image
          src={"/images/logo-00.svg"}
          alt="company-logo"
          height={38.52}
          width={123.8}
        />
      </div>
      <div>
        <Image
          src={"/images/logo-01.svg"}
          alt="company-logo"
          height={38.52}
          width={123.8}
        />
      </div>
      <div>
        <Image
          src={"/images/logo-02.svg"}
          alt="company-logo"
          height={38.52}
          width={123.8}
        />
      </div>
      <div>
        <Image
          src={"/images/logo-03.svg"}
          alt="company-logo"
          height={38.52}
          width={123.8}
        />
      </div>
      <div>
        <Image
          src={"/images/logo-04.svg"}
          alt="company-logo"
          height={38.52}
          width={123.8}
        />
      </div>
      <div>
        <Image
          src={"/images/logo-05.svg"}
          alt="company-logo"
          height={38.52}
          width={123.8}
        />
      </div>
    </div>
  );
};

export default TrustedCompan;
