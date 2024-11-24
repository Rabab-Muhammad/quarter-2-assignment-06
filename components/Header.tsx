// "use client"; // Mark this file as a client component

// import React, { useState } from "react";
// import { IoMdMenu } from "react-icons/io"; // Import the menu icon
// import { IoMdClose } from "react-icons/io"; // Import the close icon
// import Image from "next/image";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu toggle

//   // Toggle menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the menu state
//   };

//   return (
//     <div
//       id="Home"
//       className="bg-[#F7F7F7] px-4 py-4 flex flex-col md:flex-row items-center justify-between w-full md:w-[1280px] h-[72px] mt-3 border-b-[1px] border-black relative"
//     >
//       {/* Logo and Menu Icon Section */}
//       <div className="flex items-center justify-between w-full md:w-auto">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <Image
//             src={"/images/logo-icon.svg"}
//             alt="logo"
//             height={30.38}
//             width={32.58}
//           />
//           <span className="text-[25.07px] font-bold">Ddsgnr</span>
//         </div>

//         {/* Hamburger Icon for mobile */}
//         <button
//           className="md:hidden flex items-center justify-center space-y-1"
//           onClick={toggleMenu}
//         >
//           {/* Conditional Rendering of Icons */}
//           {isMenuOpen ? (
//             <IoMdClose size={30} color="black" /> // Close icon when menu is open
//           ) : (
//             <IoMdMenu size={30} color="black" /> // Hamburger icon when menu is closed
//           )}
//         </button>
//       </div>

//       {/* Navigation Menu */}
//       <nav
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } absolute top-0 left-0 right-0 bg-white z-50 md:static md:flex-row md:flex items-center justify-center md:justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8 bg-white md:h-[44px] transition-all duration-300 ease-in-out`}
//       >
//         <a
//           href="#Home"
//           className="w-full md:w-auto h-[44px] flex justify-center items-center border-b-[1px] border-black"
//         >
//           Home
//         </a>
//         <a href="#Courses" className="w-full md:w-auto h-[44px] flex justify-center items-center">
//           Courses
//         </a>
//         <a href="#Services" className="w-full md:w-auto h-[44px] flex justify-center items-center">
//           Services
//         </a>
//         <a href="#Achievement" className="w-full md:w-auto h-[44px] flex justify-center items-center">
//           Achievement
//         </a>
//         <a href="#About Us" className="w-full md:w-auto h-[44px] flex justify-center items-center">
//           About Us
//         </a>
//         <a href="#Testimonial" className="w-full md:w-auto h-[44px] flex justify-center items-center">
//           Testimonial
//         </a>

//         {/* Buttons Section */}
//         <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0">
//           <button className="py-[8px] px-[20px] rounded-[5px] border-[1px] border-black w-full md:w-auto">
//             Login
//           </button>
//           <button className="py-[8px] px-[20px] rounded-[5px] bg-black text-white w-full md:w-auto">
//             Sign Up
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

"use client"; // Mark this file as a client component

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io"; // Import the menu icon
import { IoMdClose } from "react-icons/io"; // Import the close icon
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu toggle

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div
      id="Home"
      className="bg-[#F7F7F7] px-12 py-4 flex flex-col md:flex-row items-center justify-between w-full md:w-[1280px] h-[72px] border-b-[1px] border-black relative"
    >
      {/* Logo and Menu Icon Section */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src={"/images/logo-icon.svg"}
            alt="logo"
            height={30.38}
            width={32.58}
          />
          <span className="text-[25.07px] font-bold">Ddsgnr</span>
        </div>

        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden flex items-center justify-center space-y-1"
          onClick={toggleMenu}
        >
          {/* Conditional Rendering of Icons */}
          {isMenuOpen ? (
            <IoMdClose size={30} color="black" /> // Close icon when menu is open
          ) : (
            <IoMdMenu size={30} color="black" /> // Hamburger icon when menu is closed
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:flex-row items-center justify-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8 bg-white px-5 md:h-[44px] transition-all duration-300 ease-in-out`}
      >
        <a
          href="#Home"
          className="w-full md:w-auto h-[44px] flex justify-center items-center border-b-[1px] border-black"
        >
          Home
        </a>
        <a href="#Courses" className="w-full md:w-auto h-[44px] flex justify-center items-center">
          Courses
        </a>
        <a href="#Services" className="w-full md:w-auto h-[44px] flex justify-center items-center">
          Services
        </a>
        <a href="#Achievement" className="w-full md:w-auto h-[44px] flex justify-center items-center">
          Achievement
        </a>
        <a href="#About Us" className="w-full md:w-auto h-[44px] flex justify-center items-center">
          About Us
        </a>
        <a href="#Testimonial" className="w-full md:w-auto h-[44px] flex justify-center items-center">
          Testimonial
        </a>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0">
          <button className="py-[8px] px-[20px] rounded-[5px] border-[1px] border-black w-full md:w-auto">
            Login
          </button>
          <button className="py-[8px] px-[20px] rounded-[5px] bg-black text-white w-full md:w-auto">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
