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
      <div className="flex flex-wrap items-center md:justify-center lg:justify-between max-w-6xl md:p-8">
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
              className={`block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl ${link.classname} hover:text-myRed`}
              key={link.title}
              to={link.route}>
              {link.title}
            </Link>
          ))}
          <Link
            to="https://form.typeform.com/to/LNZI5h"
            data-mode="popup"
            target="__blank"
            className="bg-myRed pt-2 pb-2 pr-4 pl-4 rounded-sm ml-6 text-xl hover:text-myRed hover:bg-white"
            onClick={(function () {
              // eslint-disable-next-line
              let qs;
              let js;
              let q;
              // eslint-disable-next-line
              let s;
              const d = document;
              const gi = d.getElementById;
              const ce = d.createElement;
              const gt = d.getElementsByTagName;
              const id = "typef_orm_share";
              const b = "https://embed.typeform.com/";
              if (!gi.call(d, id)) {
                js = ce.call(d, "script");
                js.id = id;
                js.src = `${b}embed.js`;
                // eslint-disable-next-line prefer-destructuring
                q = gt.call(d, "script")[0];
                q.parentNode.insertBefore(js, q);
              }
            })()}>
            Hire Me
          </Link>
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
            margin-top: -3rem;
          }
          .logo {
            height: 8rem;
            width: 8rem;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: -3rem;
          }
          .logo:hover {
            transition: transform 0.5s ease-out;
            transform: rotate(45deg);
          }
        `}
      </style>
    </header>
  );
}

export default Header;
