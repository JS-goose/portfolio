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

      brand: file(relativePath: { eq: "icons/Brand-min.png" }) {
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
        <span className="flex items-center">
          <Link to="/" onMouseLeave={toggleHover} onMouseEnter={toggleHover2}>
            <Image fluid={queryData.brand.childImageSharp.fluid} className={hovered ? "logoNotHovered" : "logo"} />
          </Link>
          <p className="mb-6">Jonathan Sexton</p>
        </span>

        <button
          type="button"
          className="items-center block px-3 py-2 border-white rounded-sm md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}>
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav className={`${isExpanded ? `block` : `hidden`} md:block md:items-center w-full md:w-auto`}>
          {[
            {
              route: `/consulting`,
              title: `Consulting`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl hover:text-myRed`,
            },
            {
              route: `/about`,
              title: `About`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl hover:text-myRed`,
            },
            {
              route: `https://jonathansexton.me/blog`,
              title: `Articles`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl hover:text-myRed`,
            },
            {
              route: `/projects`,
              title: `Projects`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl hover:text-myRed`,
            },
            {
              route: `/team`,
              title: `Team`,
              classname: `nav-link block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl hover:text-myRed`,
            },
            {
              route: `#hire-me`,
              title: `Hire Me`,
              classname: `pt-2 pr-2 pl-2 pb-1 rounded-sm text-2xl hover:text-myRed ml-4 bg-myRed hover:bg-white hover:underline`,
            },
          ].map((link) => (
            <Link className={link.classname} key={link.title} to={link.route} rel="noopener noreferrer">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
