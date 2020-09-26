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
              className={`nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl ${link.classname} hover:text-myRed`}
              key={link.title}
              to={link.route}>
              {link.title}
            </Link>
          ))}
          <a
            href="https://jonathan135406.typeform.com/to/LNZI5h"
            target="__blank"
            rel="noopener noreferrer"
            className=" p-2 rounded-sm text-2xl hover:text-myRed ml-4 bg-myRed hover:bg-white hover:underline">
            Hire Me
          </a>
        </nav>
      </div>
      <style jsx>
        {`
          a.nav-link,
          a.nav-link:visited {
            text-decoration: none;
            background-image: linear-gradient(transparent 2px, #FF4945 2px, #FF4945 10px, transparent 4px),
              linear-gradient(transparent 2px, #d8dce9 2px, #d8dce9 4px, transparent 4px);
            background-size: 0% 6px, 0% 6px;
            background-position: 0 bottom, 0 bottom;
            transition: background-size 0.3s ease-in-out;
            background-repeat: no-repeat;
            padding-bottom: 4px;
            border-bottom: 10px solid transparent;
          }
          a.nav-link:hover {
            background-size: 100% 6px;
          }
          @supports (-ms-ime-align: auto) {
            a.nav-link,
            a.nav-link:visited {
              background-image: linear-gradient(#FF4945, #FF4945), linear-gradient(#d8dce9, #d8dce9);
              background-size: 0% 2px, 100% 2px;
              padding-bottom: 2px;
            }
            a.nav-link:hover {
              background-size: 100% 2px;
            }
          }
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
