import React from "react";
import twitter from "../images/icons/Twitter.svg";
import linkedin from "../images/icons/LinkedIn.svg";
import github from "../images/icons/Github.svg";
import medium from "../images/icons/Medium.svg";
import dev from "../images/icons/DEV.svg";

const SocialSection = () => {
  return (
    <div className="flex flex-col h-full">
      <ul>
        <li>Connect with me!</li>
        <li><img src={twitter} alt=""/></li>
        <li><img src={linkedin} alt=""/></li>
        <li><img src={github} alt=""/></li>
        <li><img src={medium} alt=""/></li>
        <li><img src={dev} alt=""/></li>
        {/* <li><img src={} alt=""/></li> */}
      </ul>
    </div>
  );
};

export default SocialSection;
