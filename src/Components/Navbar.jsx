import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goHomeSmooth = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-b from-[#2C4CA7] to-[#4A6ED1] text-white sticky top-0 z-50 shadow-md backdrop-blur-2xl border-b border-[#87CEEB]/30">
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
            <button className="px-4 py-1.5 rounded-full bg-white text-[#2C4CA7] font-semibold shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-sm md:text-base">
              Detailed Curriculum
            </button>
          </Link>
          <button className="px-4 py-1.5 rounded-full bg-[#87CEEB] text-[#2C4CA7] font-semibold shadow-md hover:bg-[#a0d9f3] hover:scale-105 transition-all duration-300 text-sm md:text-base">
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-[#2C4CA7] transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 pb-4 bg-gradient-to-b from-[#2C4CA7] to-[#4A6ED1] px-4 border-t border-[#87CEEB]/30">
          <Link to="/curriculum" onClick={() => setIsOpen(false)}>
            <button className="w-full px-4 py-2 rounded-full bg-white text-[#2C4CA7] font-semibold shadow-md hover:bg-gray-200 transition-all duration-300 text-sm">
              Detailed Curriculum
            </button>
          </Link>
          <button className="w-full px-4 py-2 rounded-full bg-[#87CEEB] text-[#2C4CA7] font-semibold shadow-md hover:bg-[#a0d9f3] transition-all duration-300 text-sm">
            Register Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;