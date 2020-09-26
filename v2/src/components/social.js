import React from "react";
import twitter from "../images/icons/Twitter.svg";
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
          <a href="https://www.linkedin.com/in/jj-goose/" rel="noopener noreferrer">
            <svg className="social-list-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.8226 2.33088C4.8226 3.62659 3.89169 4.66338 2.39696 4.66338H2.36956C0.930396 4.66338 0 3.62659 0 2.33088C0 1.00777 0.958732 0 2.42521 0C3.89169 0 4.79477 1.00777 4.8226 2.33088ZM4.54031 6.50524V19.9996H0.25354V6.50524H4.54031ZM19.9998 19.9996L20 12.2624C20 8.11747 17.8852 6.18837 15.0643 6.18837C12.7883 6.18837 11.7693 7.49814 11.2004 8.41697V6.5056H6.91309C6.96959 7.77184 6.91309 20 6.91309 20H11.2004V12.4636C11.2004 12.0603 11.2282 11.658 11.3415 11.3692C11.6514 10.5635 12.3568 9.72934 13.5411 9.72934C15.0929 9.72934 15.7132 10.9667 15.7132 12.7801V19.9996H19.9998Z"
              />
            </svg>
          </a>
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
