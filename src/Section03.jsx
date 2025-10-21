import React from "react";
import pic6 from "./assets/pic6.png";

const Section03 = () => {
  return (
    <section className="relative w-full min-h-screen  flex flex-col md:flex-row items-center justify-between overflow-hidden px-8 sm:px-16 lg:px-24 py-20">
      <span className="absolute top-25 left-8 text-[6rem] sm:text-[10rem] font-bold text-white opacity-10 select-none">
        03
      </span>

      <div className="relative z-10 flex-1 flex flex-col justify-center text-left max-w-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-[#FBD784]"></span>
          <p className="text-[#FBD784] uppercase tracking-widest text-sm font-semibold">
            Where You Go Is The Key
          </p>
        </div>

        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Discover the <br /> beauty of adventure
        </h2>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
          As I hike, for example, I’ll read the guide and know that in a mile, I
          make a right turn at the junction. Every landmark tells a story, and
          each path invites a new discovery.
        </p>

        <a
          href="#"
          className="flex items-center gap-2 text-[#FBD784] font-semibold text-sm sm:text-base hover:underline transition"
        >
          Read More →
        </a>
      </div>

      <div className="relative flex-1 mt-10 md:mt-0 w-full md:w-1/2">
        <img
          src={pic6}
          alt="Adventure Landscape"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#0B1D26] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Section03;
