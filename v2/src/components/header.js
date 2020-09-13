import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';
import Image from 'gatsby-image';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
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
        <Link to="/">
          <Image
            fluid={queryData.brand.childImageSharp.fluid}
            className="h-32 w-32 absolute top-0 left-0 -mt-4"
          />
          {/* <h1 className="flex items-center no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">{site.siteMetadata.title}</span>
          </h1> */}
        </Link>

        <button
          type="button"
          className="items-center block px-3 py-2 border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
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
            // {
            //   route: `https://form.typeform.com/to/LNZI5h`,
            //   title: `Hire Me`,
            //   classname: `bg-myRed p-2 rounded-sm`,
            //   dataMode: `popup`,
            //   function:
            // }
          ].map((link) => (
            <Link
              className={`block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 text-xl ${link.classname}`}
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="https://form.typeform.com/to/LNZI5h"
            data-mode="popup"
            target="__blank"
            className="bg-myRed p-2 rounded-sm"
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
              const id = 'typef_orm_share';
              const b = 'https://embed.typeform.com/';
              if (!gi.call(d, id)) {
                js = ce.call(d, 'script');
                js.id = id;
                js.src = `${b}embed.js`;
                // eslint-disable-next-line prefer-destructuring
                q = gt.call(d, 'script')[0];
                q.parentNode.insertBefore(js, q);
              }
            })()}
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
