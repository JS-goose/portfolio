import React from "react";
import twitter from "../images/icons/Twitter.svg";
import linkedin from "../images/icons/LinkedIn.svg";
import github from "../images/icons/Github.svg";
import medium from "../images/icons/Medium.svg";
import dev from "../images/icons/DEV.svg";
import facebook from "../images/icons/facebook.svg";

const SocialSection = () => {
  return (
    <div className="absolute right-0 text-white text-lg pr-4 mt-32">
      <div className="vertical-text font-semibold">Connect with me!</div>
      <ul className="flex flex-col justify-center">
        <li className="pt-6">
          <img src={twitter} alt="Twitter" />
        </li>
        <li className="pt-6">
          <img src={linkedin} alt="LinkedIn" />
        </li>
        <li className="pt-6">
          <img src={github} alt="GitHub" />
        </li>
        <li className="pt-6">
          <img src={medium} alt="Medium" />
        </li>
        <li className="pt-6">
          <img src={dev} alt="DEV.to" />
        </li>
        <li className="pt-6">
          <img src={facebook} alt="Facebook" />
        </li>
      </ul>
      <style jsx>
        {`
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}
      </style>
    </div>
  );
};

export default SocialSection;
