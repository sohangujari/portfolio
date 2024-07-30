import React from "react";

// Icons
import githubSvg from '../assets/github.svg';
import twitterSvg from '../assets/twitter.svg';

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <div>
        <span className="font-inconsolata text-white text-2xl">© 2024</span>{" "}
        <span className="font-inter text-white text-2xl font-medium">sohan</span>
      </div>
      <div className="font-inconsolata text-white text-2xl">
        <span>Site designed and coded with ❤️‍🔥</span>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/sohangujari" target="_blank"><img src={githubSvg} alt="GitHub" /></a>
        <a href="https://x.com/SohanGujari" target="_blank"><img src={twitterSvg} alt="Twitter" /></a>
      </div>
    </div>
  );
};

export default Footer;
