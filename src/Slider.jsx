import React, { useEffect, useRef, useState } from "react";

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
    <div className="fixed top-1/2 right-2 sm:right-8 -translate-y-1/2 z-50 flex flex-col items-center gap-3 sm:gap-6">
      <h2 className="text-white font-bold text-sm sm:text-lg mb-2 sm:mb-4 text-center">
        Start
      </h2>

      <div className="flex flex-row items-center gap-2 sm:gap-4">
        <div className="flex flex-col justify-between h-48 sm:h-64 text-white font-semibold text-sm sm:text-lg">
          {[0, 1, 2, 3].map((num, i) => (
            <span
              key={i}
              className={`transition-all duration-300 ${
                activeSection === i ? "text-white scale-125" : "opacity-50"
              }`}
            >
              {num}
            </span>
          ))}
        </div>

        <input
          type="range"
          min="0"
          max="3"
          step="1"
          value={activeSection}
          onChange={handleSliderChange}
          className="h-48 sm:h-64 rotate-[90deg] accent-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Slider;
