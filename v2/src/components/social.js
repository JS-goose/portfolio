import React from "react";
import twitter from "../images/icons/Twitter.svg";
import linkedin from "../images/icons/LinkedIn.svg";
import github from "../images/icons/Github.svg";
import medium from "../images/icons/Medium.svg";
import dev from "../images/icons/DEV.svg";

const SocialSection = () => {
  return (
    <div>
      <ul className="flex flex-col h-full justify-center">
        <li className="pb-2">Connect with me!</li>
        <li className="pt-4"><img src={twitter} alt=""/></li>
        <li className="pt-4"><img src={linkedin} alt=""/></li>
        <li className="pt-4"><img src={github} alt=""/></li>
        <li className="pt-4"><img src={medium} alt=""/></li>
        <li className="pt-4"><img src={dev} alt=""/></li>
        {/* <li className=""><img src={} alt=""/></li> */}
      </ul>
    </div>
  );
};

export default SocialSection;
