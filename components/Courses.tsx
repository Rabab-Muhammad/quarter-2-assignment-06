// import React from "react";
// import Image from "next/image";
// import { CiStar } from "react-icons/ci";

// const Courses = () => {
//   return (
//     <div id="Courses" className="py-[112px] px-[64px] text-center">
//       <h1 className="font-bold text-[56px]">Courses</h1>
//       <p className="text-lg py-5">Your Ultimate Guide to Learning</p>
//       <div className="space-x-7">
//         <button className="border-b-[1px] py-[8px] px-[16px] border-black">
//           Popular
//         </button>
//         <button className="py-[8px] px-[16px]">Recommended</button>
//         <button className="py-[8px] px-[16px]">Best Price</button>
//       </div>
//       <div className="grid grid-cols-3 gap-6 mt-10 ">
//         {/* card 1 */}
//         <div className="bg-[#F7F7F7] pb-5 ">
//           <Image
//             src={"/images/course-01.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />

//           <div className="flex space-x-72 px-2 ">
//             <p className="text-sm font-semibold mt-2 ">Design</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             UX/UI Design 201
//           </h2>
//           <p className=" mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex gap-5 px-2">
//             <button className="mt-5 px-[20px] py-[8px] border-[1px] border-black rounded-[5px] ">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px]  rounded-[5px]">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 2 */}
//         <div className="bg-[#F7F7F7] pb-5 ">
//           <Image
//             src={"/images/course-02.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />

//           <div className="flex space-x-60 px-2 ">
//             <p className="text-sm font-semibold mt-2 ">Programming</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Introduction to Python
//           </h2>
//           <p className=" mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex gap-5 px-2">
//             <button className="mt-5 px-[20px] py-[8px] border-[1px] border-black rounded-[5px] ">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px]  rounded-[5px]">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 3 */}
//         <div className="bg-[#F7F7F7] pb-5 ">
//           <Image
//             src={"/images/course-03.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />

//           <div className="flex space-x-60 px-2 ">
//             <p className="text-sm font-semibold mt-2 ">Business</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Data Analysis for Beginners
//           </h2>
//           <p className=" mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex gap-5 px-2">
//             <button className="mt-5 px-[20px] py-[8px] border-[1px] border-black rounded-[5px] ">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px]  rounded-[5px]">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 4 */}
//         <div className="bg-[#F7F7F7] pb-5 ">
//           <Image
//             src={"/images/course-04.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />

//           <div className="flex space-x-60 px-2 ">
//             <p className="text-sm font-semibold mt-2 ">Art</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Art Specialization
//           </h2>
//           <p className=" mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex gap-5 px-2">
//             <button className="mt-5 px-[20px] py-[8px] border-[1px] border-black rounded-[5px] ">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px]  rounded-[5px]">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 5 */}
//         <div className="bg-[#F7F7F7] pb-5 ">
//           <Image
//             src={"/images/course-05.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />

//           <div className="flex space-x-60 px-2 ">
//             <p className="text-sm font-semibold mt-2 ">Law</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Rule of Law
//           </h2>
//           <p className=" mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex gap-5 px-2">
//             <button className="mt-5 px-[20px] py-[8px] border-[1px] border-black rounded-[5px] ">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px]  rounded-[5px]">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 6 */}
//         <div className="bg-[#F7F7F7] pb-5 ">
//           <Image
//             src={"/images/course-06.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//             className="h-[300px]"
//           />

//           <div className="flex space-x-60 px-2 ">
//             <p className="text-sm font-semibold mt-2 ">Tech</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Introduction to webflow
//           </h2>
//           <p className=" mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex gap-5 px-2">
//             <button className="mt-5 px-[20px] py-[8px] border-[1px] border-black rounded-[5px] ">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px]  rounded-[5px]">
//               $400
//             </button>
//           </div>
//         </div>
//       </div>{" "}
//       {/* Closing the grid */}
//       <div className="w-[1280px] flex justify-center items-center mt-20 ">
//         <button className="py-[8px] px-[20px] border-[1px] rounded-[5px] border-black ">
//           View All Courses
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Courses;

// import React from "react";
// import Image from "next/image";
// import { CiStar } from "react-icons/ci";

// const Courses = () => {
//   return (
//     <div id="Courses" className="py-[112px] px-[64px] text-center">
//       <h1 className="font-bold text-[56px]">Courses</h1>
//       <p className="text-lg py-5">Your Ultimate Guide to Learning</p>
//       <div className="space-x-7">
//         <button className="border-b-[1px] py-[8px] px-[16px] border-black">
//           Popular
//         </button>
//         <button className="py-[8px] px-[16px]">Recommended</button>
//         <button className="py-[8px] px-[16px]">Best Price</button>
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//         {/* card 1 */}
//         <div className="bg-[#F7F7F7] pb-5">
//           <Image
//             src={"/images/course-01.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />
//           <div className="flex space-x-72 px-2">
//             <p className="text-sm font-semibold mt-2">Design</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             UX/UI Design 201
//           </h2>
//           <p className="mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-between gap-5 px-2 mt-4">
//             <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px] hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px] bg-emerald-500 text-white rounded-[5px] hover:bg-emerald-600 transition duration-300 w-full sm:w-auto">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 2 */}
//         <div className="bg-[#F7F7F7] pb-5">
//           <Image
//             src={"/images/course-02.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />
//           <div className="flex space-x-60 px-2">
//             <p className="text-sm font-semibold mt-2">Programming</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Introduction to Python
//           </h2>
//           <p className="mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-between gap-5 px-2 mt-4">
//             <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px] hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px] bg-emerald-500 text-white rounded-[5px] hover:bg-emerald-600 transition duration-300 w-full sm:w-auto">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 3 */}
//         <div className="bg-[#F7F7F7] pb-5">
//           <Image
//             src={"/images/course-03.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />
//           <div className="flex space-x-60 px-2">
//             <p className="text-sm font-semibold mt-2">Business</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Data Analysis for Beginners
//           </h2>
//           <p className="mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-between gap-5 px-2 mt-4">
//             <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px] hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px] bg-emerald-500 text-white rounded-[5px] hover:bg-emerald-600 transition duration-300 w-full sm:w-auto">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 4 */}
//         <div className="bg-[#F7F7F7] pb-5">
//           <Image
//             src={"/images/course-04.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />
//           <div className="flex space-x-60 px-2">
//             <p className="text-sm font-semibold mt-2">Art</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Art Specialization
//           </h2>
//           <p className="mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-between gap-5 px-2 mt-4">
//             <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px] hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px] bg-emerald-500 text-white rounded-[5px] hover:bg-emerald-600 transition duration-300 w-full sm:w-auto">
//               $400
//             </button>
//           </div>
//         </div>

//         {/* card 5 */}
//         <div className="bg-[#F7F7F7] pb-5">
//           <Image
//             src={"/images/course-05.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />
//           <div className="flex space-x-60 px-2">
//             <p className="text-sm font-semibold mt-2">Law</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Rule of Law
//           </h2>
//           <p className="mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-between gap-5 px-2 mt-4">
//             <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px] hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px] bg-emerald-500 text-white rounded-[5px] hover:bg-emerald-600 transition duration-300 w-full sm:w-auto">
//               $400
//             </button>
//           </div>
//         </div>

//       {/* card 6 */}
//         <div className="bg-[#F7F7F7] pb-5">
//           <Image
//             src={"/images/course-06.jpeg"}
//             alt="Course-img"
//             height={300}
//             width={416}
//           />
//           <div className="flex space-x-60 px-2">
//             <p className="text-sm font-semibold mt-2">Law</p>
//             <div className="flex items-center space-x-1 mt-2">
//               <CiStar />
//               <p>5.0</p>
//             </div>
//           </div>
//           <h2 className="font-bold text-2xl mt-2 text-left px-2">
//             Rule of Law
//           </h2>
//           <p className="mt-3 text-sm px-2 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             varius enim in eros.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-between gap-5 px-2 mt-4">
//             <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px] hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
//               Enroll Now
//             </button>
//             <button className="mt-5 px-[20px] py-[8px] bg-emerald-500 text-white rounded-[5px] hover:bg-emerald-600 transition duration-300 w-full sm:w-auto">
//               $400
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;


import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const Courses = () => {
  return (
    <div id="Courses" className="py-[112px] px-[64px] text-center">
      <h1 className="font-bold text-[56px]">Courses</h1>
      <p className="text-lg py-5">Your Ultimate Guide to Learning</p>
      <div className="space-x-7">
        <button className="border-b-[1px] py-[8px] px-[16px] border-black">
          Popular
        </button>
        <button className="py-[8px] px-[16px]">Recommended</button>
        <button className="py-[8px] px-[16px]">Best Price</button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* card 1 */}
        <div className="bg-[#F7F7F7] pb-5 min-h-[480px]">
          <Image
            src={"/images/course-01.jpeg"}
            alt="Course-img"
            height={300}
            width={416}
          />
          <div className="flex space-x-72 px-2">
            <p className="text-sm font-semibold mt-2">Design</p>
            <div className="flex items-center space-x-1 mt-2">
              <CiStar />
              <p>5.0</p>
            </div>
          </div>
          <h2 className="font-bold text-2xl mt-2 text-left px-2">
            UX/UI Design 201
          </h2>
          <p className="mt-3 text-sm px-2 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <div className="flex flex-col sm:flex-row  gap-5 px-2 mt-4">
            <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px]  w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="mt-5 px-[20px] py-[8px]  text-black rounded-[5px] w-full sm:w-auto">
              $400
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div className="bg-[#F7F7F7] pb-5 min-h-[480px]">
          <Image
            src={"/images/course-02.jpeg"}
            alt="Course-img"
            height={300}
            width={416}
          />
          <div className="flex space-x-60 px-2">
            <p className="text-sm font-semibold mt-2">Programming</p>
            <div className="flex items-center space-x-1 mt-2">
              <CiStar />
              <p>5.0</p>
            </div>
          </div>
          <h2 className="font-bold text-2xl mt-2 text-left px-2">
            Introduction to Python
          </h2>
          <p className="mt-3 text-sm px-2 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <div className="flex flex-col sm:flex-row  gap-5 px-2 mt-4">
            <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px]  w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="mt-5 px-[20px] py-[8px]  text-black rounded-[5px]  w-full sm:w-auto">
              $400
            </button>
          </div>
        </div>

        {/* card 3 */}
        <div className="bg-[#F7F7F7] pb-5 min-h-[480px]">
          <Image
            src={"/images/course-03.jpeg"}
            alt="Course-img"
            height={300}
            width={416}
          />
          <div className="flex space-x-60 px-2">
            <p className="text-sm font-semibold mt-2">Business</p>
            <div className="flex items-center space-x-1 mt-2">
              <CiStar />
              <p>5.0</p>
            </div>
          </div>
          <h2 className="font-bold text-2xl mt-2 text-left px-2">
            Data Analysis for Beginners
          </h2>
          <p className="mt-3 text-sm px-2 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <div className="flex flex-col sm:flex-row  gap-5 px-2 mt-4">
            <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px]  w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="mt-5 px-[20px] py-[8px] text-black rounded-[5px]  w-full sm:w-auto">
              $400
            </button>
          </div>
        </div>

        {/* card 4 */}
        <div className="bg-[#F7F7F7] pb-5 min-h-[480px]">
          <Image
            src={"/images/course-04.jpeg"}
            alt="Course-img"
            height={300}
            width={416}
          />
          <div className="flex space-x-60 px-2">
            <p className="text-sm font-semibold mt-2">Art</p>
            <div className="flex items-center space-x-1 mt-2">
              <CiStar />
              <p>5.0</p>
            </div>
          </div>
          <h2 className="font-bold text-2xl mt-2 text-left px-2">
            Art Specialization
          </h2>
          <p className="mt-3 text-sm px-2 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <div className="flex flex-col sm:flex-row  gap-5 px-2 mt-4">
            <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px]  w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="mt-5 px-[20px] py-[8px]  text-black rounded-[5px]  w-full sm:w-auto">
              $400
            </button>
          </div>
        </div>

        {/* card 5 */}
        <div className="bg-[#F7F7F7] pb-5 min-h-[480px]">
          <Image
            src={"/images/course-05.jpeg"}
            alt="Course-img"
            height={300}
            width={416}
          />
          <div className="flex space-x-60 px-2">
            <p className="text-sm font-semibold mt-2">Law</p>
            <div className="flex items-center space-x-1 mt-2">
              <CiStar />
              <p>5.0</p>
            </div>
          </div>
          <h2 className="font-bold text-2xl mt-2 text-left px-2">
            Rule of Law
          </h2>
          <p className="mt-3 text-sm px-2 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <div className="flex flex-col sm:flex-row  gap-5 px-2 mt-4">
            <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px]  w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="mt-5 px-[20px] py-[8px]  text-black rounded-[5px]  w-full sm:w-auto">
              $400
            </button>
          </div>
        </div>

        {/* card 6 */}
        <div className="bg-[#F7F7F7] pb-5 min-h-[480px]">
          <Image
            src={"/images/course-06.jpeg"}
            alt="Course-img"
            height={300}
            width={416}
            className="md:h-[260px]"
          />
          <div className="flex space-x-60 px-2">
            <p className="text-sm font-semibold mt-2">Science</p>
            <div className="flex items-center space-x-1 mt-2">
              <CiStar />
              <p>5.0</p>
            </div>
          </div>
          <h2 className="font-bold text-2xl mt-2 text-left px-2">
            Organic Chemistry 101
          </h2>
          <p className="mt-3 text-sm px-2 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <div className="flex flex-col sm:flex-row  gap-5 px-2 mt-4">
            <button className="mt-5 px-[20px] py-[8px] bg-black text-white rounded-[5px]  w-full sm:w-auto">
              Enroll Now
            </button>
            <button className="mt-5 px-[20px] py-[8px]  text-black rounded-[5px]  w-full sm:w-auto">
              $400
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
