import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen  overflow-hidden flex items-center justify-center">
      <div className="relative z-30 flex flex-col  px-8 gap-6">
        <div className="flex items-center gap-3">
          <span className="w-12 h-[2px] bg-[#FBD784]"></span>
          <p className="text-[#FBD784] uppercase tracking-[3px] text-sm sm:text-base font-semibold">
            A Hiking Guide
          </p>
        </div>

        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          Be prepared for the <br /> Mountains and beyond!
        </h1>

        <a href="#01" className="flex flex-col  gap-2 mt-6">
          <span className="text-[#FBD784] font-semibold text-sm sm:text-base">
            Scroll Down
          </span>
          <svg
            className="w-6 h-6 text-[#FBD784] animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
