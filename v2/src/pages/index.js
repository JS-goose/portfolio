import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import CTA from "../components/cta";
import SEO from "../components/seo";
import ServicesList from "../components/servicesList";
import GetStarted from "../components/getStarted";

function IndexPage() {
  const query = useStaticQuery(graphql`
    query {
      planet: file(relativePath: { eq: "planet 1-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      astronaut: file(relativePath: { eq: "Astronaut-min-rotated.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      rocket: file(relativePath: { eq: "Rocket-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <SEO
        keywords={[`freelance`, `home`, `jonathan`, `sexton`, `development`, `website`, `small business`]}
        title="Home"
      />
      <div>
        <Image fluid={query.planet.childImageSharp.fluid} className="planet" />
        <Image fluid={query.astronaut.childImageSharp.fluid} className="astronaut" />
        <CTA />
        <Image fluid={query.rocket.childImageSharp.fluid} className="rocket" />
        <style jsx>
          {`
            .planet {
              height: 40rem;
              width: 40rem;
              position: absolute !important;
              margin-top: -13rem;
              margin-left: 10rem;
              z-index: 0;
            }
            .astronaut {
              height: 40rem;
              width: 21.5rem;
              position: absolute !important;
              top: 0;
              right: 0;
              margin-top: -1rem;
            }
            .rocket {
              height: 65rem;
              width: 28rem;
              position: absolute !important;
              top: 0;
              left: 0;
              margin-left: 6rem;
              margin-top: 12rem;
            }
          `}
        </style>
      </div>
      <ServicesList />
      <GetStarted />
    </>
  );
}

export default IndexPage;
