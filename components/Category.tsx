import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="py-[112px] px-[64px] mt-[20px]  ">
      <h1 className="text-5xl font-bold  ">Explore Courses By Category</h1>
      <p className="text-lg pt-5  ">
        Discover a wide range of courses covering a variety of subjects, taught
        by expert instructors.
      </p>

      {/* Grid Container for Cards */}
      <div className="grid grid-cols-3  gap-10 mt-20 ">
        {/* Card 1 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-00.svg"}
            alt="category-1"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Design & Development</h1>
            <p className="text-lg ">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-01.svg"}
            alt="category-2"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Marketing</h1>
            <p className="text-lg ">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-02.svg"}
            alt="category-3"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Development</h1>
            <p className="text-lg ">50+ Courses Available</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-03.svg"}
            alt="category-4"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Communication</h1>
            <p className="text-lg ">40+ Courses Available</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-04.svg"}
            alt="category-5"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Digital Marketing</h1>
            <p className="text-lg ">30+ Courses Available</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-05.svg"}
            alt="category-6"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Self Development</h1>
            <p className="text-lg ">20+ Courses Available</p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-06.svg"}
            alt="category-7"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Business</h1>
            <p className="text-lg ">20+ Courses Available</p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-07.svg"}
            alt="category-8"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Finance</h1>
            <p className="text-lg ">20+ Courses Available</p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="w-[410.67px] h-[132px] p-[30px] rounded-[5px] bg-[#F7F7F7] flex items-center gap-10  text-center">
          <Image
            src={"/images/cate-08.svg"}
            alt="category-9"
            height={80}
            width={80}
          />
          <div>
            <h1 className="text-xl font-semibold ">Consulting</h1>
            <p className="text-lg ">20+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="w-[1280px] flex justify-center items-center mt-10 ">
        <button className="py-[12px] px-[24px] rounded-[5px] border-[1px] border-black  ">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Category;
