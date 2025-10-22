import React from "react";
import TG from "./assets/TG.jpg";

function backgroundimage() {
  return (
    <div className="-z-10 overflow-hidden absolute top-0 left-0 ">
      <img src={TG} alt="Background" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A192F]/90 to-[#0A192F]/60"></div>
    </div>
  );
}

export default backgroundimage;
