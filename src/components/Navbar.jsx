import React, { useState } from "react";
import Light from "../assets/light.svg";
import Dark from "../assets/dark.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed w-full flex justify-between items-center px-6 py-5 border-b border-white z-10 bg-gray-800 bg-opacity-40 backdrop-blur-lg">
      <span className="font-inconsolata text-neutral-200 text-3xl md:text-3xl">
        [Sohan]
      </span>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navbar Links */}
      <nav
  className={`flex md:flex-row flex-col items-center gap-6 md:gap-10 font-inconsolata text-white text-2xl md:text-2xl ${
    isMobileMenuOpen
      ? "absolute mt-20 top-0 left-1/2 transform -translate-x-1/2 z-20 p-4 bg-[#050F21] bg-opacity-80 flex justify-center w-full"
      : "hidden"
  } md:flex md:w-auto`}
>
        <a href="#home" onClick={handleScroll}>
          Home
        </a>
        <a href="#about" onClick={handleScroll}>
          About
        </a>
        <a href="#projects" onClick={handleScroll}>
          Projects
        </a>
        <a href="#contact" onClick={handleScroll}>
          Contact
        </a>
      </nav>

      {/* Light/Dark Mode Button */}
      <button className={`ml-4 hidden md:block`}>
        <img src={Light} alt="Mode" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Navbar;
