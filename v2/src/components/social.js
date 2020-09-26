import React from "react";
import twitter from "../images/icons/Twitter.svg";
import linkedin from "../images/icons/LinkedIn.svg";
import github from "../images/icons/Github.svg";
import medium from "../images/icons/Medium.svg";
import dev from "../images/icons/DEV.svg";
import facebook from "../images/icons/facebook.svg";

const SocialSection = () => {
  return (
    <div className="social-container">
      <ul className="social-list">
        <li>
          <div className="vertical-text">Connect with me!</div>
        </li>
        <li className="pt-6 pl-2">
          <img src={twitter} alt="Twitter" />
        </li>
        <li className="pt-6 pl-2">
          <img src={linkedin} alt="LinkedIn" />
        </li>
        <li className="pt-6 pl-2">
          <img src={github} alt="GitHub" />
        </li>
        <li className="pt-6 pl-2">
          <img src={medium} alt="Medium" />
        </li>
        <li className="pt-6 pl-1">
          <img src={dev} alt="DEV.to" />
        </li>
        <li className="pt-6 pl-2">
          <img src={facebook} alt="Facebook" />
        </li>
      </ul>
    </div>
  );
};

export default SocialSection;
