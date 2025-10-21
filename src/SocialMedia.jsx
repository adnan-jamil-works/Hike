import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className="fixed top-1/2 left-0 sm:left-8 -translate-y-1/2 z-50 flex flex-col items-center gap-4 sm:gap-6">
      <h2 className="text-white font-bold text-sm sm:text-lg mb-2 sm:mb-4 rotate-[-90deg] origin-center">
        Follow Us
      </h2>
      <div className="flex flex-col gap-4 sm:gap-6 text-white text-xl sm:text-2xl">
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
