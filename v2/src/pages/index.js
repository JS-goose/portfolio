import React from "react";
import CTA from "../components/cta";
import SEO from "../components/seo";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

function IndexPage() {
  const query = useStaticQuery(graphql`
    query imageQuery {
      planet: file(relativePath: { eq: "planet1-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      astronaut: file(relativePath: { eq: "Astronaut-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      rocket: file(relativePath: { eq: "rocket-min.png" }) {
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
      <SEO keywords={[`freelance`, `home`, `jonathan`, `sexton`, `development`, `website`, `small business`]} title='Home' />
      <CTA></CTA>
      <Image fluid={query.planet.childImageSharp.fluid} />
    </>
  );
}

export default IndexPage;
