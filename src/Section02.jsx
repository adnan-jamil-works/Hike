import React from "react";
import pic5 from "./assets/pic5.jpg";
const Section02 = () => {
  return (
    <section className="relative  w-full min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden px-6 sm:px-12 lg:px-24 py-20">
      {" "}
      <span className="absolute top-10 right-8 text-[5rem] sm:text-[9rem] font-extrabold text-white opacity-10 select-none">
        {" "}
        02{" "}
      </span>{" "}
      <div className="relative flex-1 mb-10 md:mb-0 w-full md:w-1/2 flex justify-start">
        {" "}
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
          {" "}
          <img
            src={pic5}
            alt="Hiking Adventure"
            className="w-full h-full object-cover rounded-lg"
          />{" "}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0B1D26] to-transparent pointer-events-none"></div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="relative z-10 flex-1 flex flex-col justify-center text-left max-w-lg md:pl-12 ">
        {" "}
        <div className="flex items-center gap-3 mb-4">
          {" "}
          <span className="w-10 h-[2px] bg-[#FBD784]"></span>{" "}
          <p className="text-[#FBD784] uppercase tracking-[3px] text-sm font-semibold">
            {" "}
            What Level of Hiker Are You?{" "}
          </p>{" "}
        </div>{" "}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          {" "}
          Determining your hiking level <br /> can help you plan your journey{" "}
        </h2>{" "}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
          {" "}
          Knowing your skill level and physical readiness can make your next
          adventure safer and more enjoyable. Plan your routes and gear wisely
          to match your hiking ability.{" "}
        </p>{" "}
        <a
          href="#"
          className="flex items-center gap-2 text-[#FBD784] font-semibold text-sm sm:text-base hover:underline transition-all"
        >
          {" "}
          Read More →{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
};
export default Section02;
