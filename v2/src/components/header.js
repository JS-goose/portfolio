import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Image from "gatsby-image";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  let [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(true);
  const toggleHover2 = () => setHovered(false);
  const queryData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      brand: file(relativePath: { eq: "Brand-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header className="bg-myPurple text-white z-10">
      <div className="flex flex-wrap items-center md:justify-center lg:justify-between max-w-6xl">
        <Link to="/" onMouseLeave={toggleHover} onMouseEnter={toggleHover2}>
          <Image fluid={queryData.brand.childImageSharp.fluid} className={hovered ? "logoNotHovered" : "logo"} />
        </Link>

        <button
          type="button"
          className="items-center block px-3 py-2 border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}>
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav className={`${isExpanded ? `block` : `hidden`} md:block md:items-center w-full md:w-auto`}>
          {[
            {
              route: `/about`,
              title: `About`,
            },
            { route: `#services`, title: `Services` },
            { route: `https://jonathansexton.me/blog`, title: `Articles` },
            {
              route: `/projects`,
              title: `Projects`,
            },
            {
              route: `/team`,
              title: `Team`,
            },
          ].map((link) => (
            <Link
              className={`block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl ${link.classname} hover:text-myRed hover:underline`}
              key={link.title}
              to={link.route}>
              {link.title}
            </Link>
          ))}
          <a
            href="https://jonathan135406.typeform.com/to/LNZI5h"
            target="__blank"
            rel="noopener noreferrer"
            className="bg-myRed pt-2 pb-2 pr-4 pl-4 rounded-sm ml-6 text-xl hover:text-myRed border hover:bg-white hover:underline">
            Hire Me
          </a>
        </nav>
      </div>
      <style jsx>
        {`
          .logoNotHovered {
            transition: transform 0.5s ease-in;
            transform: rotate(0);
            height: 8rem;
            width: 8rem;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: -0.8rem;
          }
          .logo {
            height: 8rem;
            width: 8rem;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: -0.8rem;
          }
          .logo:hover {
            transition: transform 0.5s ease-out;
            transform: rotate(-45deg);
          }
        `}
      </style>
    </header>
  );
}

export default Header;
