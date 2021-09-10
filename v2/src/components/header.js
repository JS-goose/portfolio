import { Link } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-myPurple text-white">
      <div className="flex flex-wrap items-center justify-between md:justify-center lg:justify-evenly max-w-6xl lg:max-w-full">
          <Link to="/">
        <div className="flex ml-4 my-4">
            <StaticImage
              src="../images/icons/logoPNG.png"
              alt="jonathan sexton with glasses on and a smile"
              className="logo"
              placeholder="blurred"
              layout="fullWidth"
            />
          <p className="hidden md:inline pl-2 pt-2 mb-2 md:mb-4 lg:mb-6 text-base">Jonathan Sexton</p>
        </div>
          </Link>

        <button
          type="button"
          className="items-center block px-3 py-2 border-white rounded-sm md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav className={`${isExpanded ? `flex` : `hidden`} justify-around md:block md:items-center w-full md:w-auto`}>
          {[
            {
              route: `/consulting`,
              title: `Consulting`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 sm:text-base md:text-lg lg:text-xl hover:text-myRed`,
            },
            {
              route: `/about`,
              title: `About`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 sm:text-base md:text-lg lg:text-xl hover:text-myRed`,
            },
            {
              route: `blog.jonathansexton.me`,
              title: `Blog`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 sm:text-base md:text-lg lg:text-xl hover:text-myRed`,
            },
            {
              route: `/projects`,
              title: `Projects`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 sm:text-base md:text-lg lg:text-xl hover:text-myRed`,
            },
            {
              route: `#hire-me`,
              title: `Hire Me`,
              classname: `pt-2 pr-2 pl-2 pb-1 rounded-sm sm:lg md:text-xl lg:text-2xl hover:text-myRed ml-4 bg-myRed hover:bg-white hover:underline`,
            },
          ].map((link) =>
            link.route === "https://jonathansexton.me/blog" ? (
              <a href="https://jonathansexton.me/blog" className={link.classname} key={link.title}>
                Blog
              </a>
            ) : (
              <Link className={link.classname} key={link.title} to={link.route} rel="noopener noreferrer">
                {link.title}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
