import React from "react";
import TG from "./assets/TG.jpg";

function backgroundimage() {
  return (
    <div className="-z-10 overflow-hidden absolute top-0 left-0">
      <img src={TG} />;
    </div>
  );
}

export default backgroundimage;
