import React, { useEffect, useState } from "react";

const Slider = ({ sectionsRef }) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const middle = window.innerHeight / 2;
    let current = 0;
    sectionsRef.current.forEach((section, i) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= middle && rect.bottom >= middle) current = i;
    });
    setActiveSection(current);
  };

  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value);
    setActiveSection(index);
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-2 sm:right-0 -translate-y-1/2 z-50 flex flex-col items-end pr-0 m-0">
      {/* Start label */}
      <h2
        className="text-white font-bold text-xs sm:text-lg mb-3 text-right mr-1 sm:mr-2 
        drop-shadow-[0_2px_4px_rgba(0,0,0,1)] brightness-110 contrast-125"
      >
        Start
      </h2>

      <div className="relative flex items-center justify-end">
        {/* Slider */}
        <input
          type="range"
          min="0"
          max="3"
          step="1"
          value={activeSection}
          onChange={handleSliderChange}
          className="h-40 sm:h-64 rotate-[90deg] accent-white cursor-pointer m-0 p-0 absolute right-0 sm:right-0"
        />

        {/* Numbers */}
        <div
          className="flex flex-col justify-between h-40 sm:h-64 font-semibold text-xs sm:text-lg pr-6 sm:pr-6 
          text-white drop-shadow-[0_2px_4px_rgba(0,0,0,1)] brightness-110 contrast-125"
        >
          {[0, 1, 2, 3].map((num, i) => (
            <span
              key={i}
              className={`transition-all duration-300 ${
                activeSection === i
                  ? "text-yellow-300 scale-125 drop-shadow-[0_3px_6px_rgba(0,0,0,1)]"
                  : "opacity-90"
              }`}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
