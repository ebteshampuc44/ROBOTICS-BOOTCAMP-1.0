import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goHomeSmooth = () => {
    navigate("/"); // প্রথমে home route এ নিয়ে যাবে
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // তারপর smooth scroll করে উপরে
    }, 100); 
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1E3A8A] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
        
        {/* Left Logo + Text (Click = Smooth scroll to top) */}
        <div
          onClick={goHomeSmooth}
          className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition cursor-pointer"
        >
          <img
            src="https://i.ibb.co.com/XfYht2cw/Whats-App-Image-2024-02-08-at-14-52-49-22e8eefa-removebg-preview.png"
            alt="Premier University Logo"
            className="h-10 sm:h-12 md:h-14"
          />
          <h1 className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white whitespace-normal">
            ROBOTICS BOOTCAMP 1.0
          </h1>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/curriculum">
            <button className="px-4 py-1.5 rounded-full bg-white text-[#1E3A8A] font-semibold shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-sm md:text-base">
              Detailed Curriculum
            </button>
          </Link>
          <button className="px-4 py-1.5 rounded-full bg-[#2563EB] text-white font-semibold shadow-md hover:bg-[#3B82F6] hover:scale-105 transition-all duration-300 text-sm md:text-base">
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-[#2C4EA0] transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 pb-4 bg-[#1E3A8A] px-4">
          <Link to="/curriculum" onClick={() => setIsOpen(false)}>
            <button className="w-full px-4 py-2 rounded-full bg-white text-[#1E3A8A] font-semibold shadow-md hover:bg-gray-200 transition-all duration-300 text-sm">
              Detailed Curriculum
            </button>
          </Link>
          <button className="w-full px-4 py-2 rounded-full bg-[#2563EB] text-white font-semibold shadow-md hover:bg-[#3B82F6] transition-all duration-300 text-sm">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
