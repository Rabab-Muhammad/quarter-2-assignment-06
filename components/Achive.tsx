
import React from "react";

const Achive = () => {
  return (
    <div id="Achievement" className="text-center py-16 px-4 md:px-[64px]">
      <h1 className="text-3xl md:text-5xl font-bold">Our Achievements</h1>
      <p className="text-base md:text-lg py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>
      <div className="font-bold text-3xl md:text-[40px] flex flex-col md:flex-row justify-around pt-5 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <h1>+200</h1>
          <h2 className="mt-2 text-lg">Courses</h2>
        </div>
        <div className="flex flex-col items-center">
          <h1>50k</h1>
          <h2 className="mt-2 text-lg">Mentors</h2>
        </div>
        <div className="flex flex-col items-center">
          <h1>370k</h1>
          <h2 className="mt-2 text-lg">Students</h2>
        </div>
        <div className="flex flex-col items-center">
          <h1>100+</h1>
          <h2 className="mt-2 text-lg">Recognition</h2>
        </div>
      </div>
    </div>
  );
};

export default Achive;
