import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        <div className="md:w-1/3 text-center md:text-left flex flex-col justify-start">
          <h2 className="text-white text-3xl font-bold mb-4">MNTN</h2>
          <p className="text-sm leading-relaxed max-w-xs mb-6 mx-auto md:mx-0">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="text-xs text-gray-400">
            © {year} MNTN, Inc. Terms & Privacy
          </p>
        </div>
        <div className="md:w-1/3 text-center flex flex-col justify-start">
          <h3 className="text-white text-xl font-semibold mb-4">
            More on The Blog
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                About MNTN
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contributors & Writers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Write For Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 text-center md:text-right flex flex-col justify-start">
          <h3 className="text-white text-xl font-semibold mb-4">
            More on MNTN
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                The Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Press
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
