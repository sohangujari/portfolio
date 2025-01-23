import React from "react";

// Icons
import githubSvg from '../assets/github.svg';
import twitterSvg from '../assets/twitter.svg';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-5">
      {/* Left Section */}
      <div className="flex flex-row sm:flex-row items-center mb-4 sm:mb-0">
        <span className="font-inconsolata text-white text-lg sm:text-2xl">© 2024</span>{" "}
        <span className="font-inter text-white text-lg sm:text-2xl font-medium ml-2">sohan</span>
      </div>
      
      {/* Middle Section */}
      <div className="font-inconsolata text-white text-lg sm:text-2xl mb-4 sm:mb-0">
        <span>Site designed and coded with ❤️‍🔥</span>
      </div>

      {/* Right Section (Social Icons) */}
      <div className="flex gap-4">
        <a href="https://github.com/sohangujari" target="_blank" rel="noopener noreferrer">
          <img src={githubSvg} alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a href="https://x.com/SohanGujari" target="_blank" rel="noopener noreferrer">
          <img src={twitterSvg} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
