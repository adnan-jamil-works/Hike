import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="fixed top-1/2 left-0 sm:left-8 -translate-y-1/2 z-50 flex flex-col items-center gap-4 sm:gap-6">
      {/* Rotated heading */}
      <h2 className="text-[#FBD784] drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] font-bold text-sm sm:text-lg mb-2 sm:mb-4 rotate-[-90deg] origin-center">
        Follow Us
      </h2>

      {/* Social icons */}
      <div className="flex flex-col gap-4 sm:gap-6 text-[#FBD784] text-xl sm:text-2xl drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
