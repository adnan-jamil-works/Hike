import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed text-shadow-white top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0B1D26] bg-opacity-95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 md:px-10 text-white">
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          MNTN
        </h1>

        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li className="hover:text-gray-300 cursor-pointer transition">
            Equipment
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            Blog
          </li>
          <li className="hover:text-gray-300 cursor-pointer transition">
            About Us
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-3">
          <FaUserCircle className="text-2xl" />
          <span className="hover:text-gray-300 cursor-pointer transition">
            My Account
          </span>
        </div>

        <div
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0B1D26] bg-opacity-95 py-4 space-y-4 text-center text-white text-lg">
          <p className="hover:text-gray-300 cursor-pointer">Equipment</p>
          <p className="hover:text-gray-300 cursor-pointer">Blog</p>
          <p className="hover:text-gray-300 cursor-pointer">About Us</p>
          <div className="flex justify-center items-center gap-2 pt-2">
            <FaUserCircle className="text-2xl" />
            <span className="hover:text-gray-300 cursor-pointer">
              My Account
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
