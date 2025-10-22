import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SocialMedia from "./SocialMedia";
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";
import Footer from "./Footer";
import Slider from "./Slider";

const ScrollSlider = () => {
  const sectionsRef = useRef([]);

  return (
    <>
    <div className="relative overflow-hidden left-0">
      <SocialMedia />
      <Slider sectionsRef={sectionsRef} />
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative w-full min-h-screen  flex items-center justify-center"
      >
        <Navbar />
        <HeroSection />
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)}>
        <Section01 />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)}>
        <Section02 />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)}>
        <Section03 />
      </section>
      
    </div>
      <Footer/>
    </>
  );
};

export default ScrollSlider;
