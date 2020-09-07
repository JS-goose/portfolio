import React from "react";
import CTA from "../components/cta";
import SEO from "../components/seo";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

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

      astronaut: file(relativePath: { eq: "Astronaut-min.png" }) {
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
      <SEO keywords={[`freelance`, `home`, `jonathan`, `sexton`, `development`, `website`, `small business`]} title='Home' />
      <CTA></CTA>
      <Image fluid={query.planet.childImageSharp.fluid} className='h-64 w-64'/>
      <Image fluid={query.astronaut.childImageSharp.fluid} className='h-64 w-64'/>
      <Image fluid={query.rocket.childImageSharp.fluid} className='h-64 w-64'/>
    </>
  );
}

export default IndexPage;
