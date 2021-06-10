import React from 'react';
// import Image from 'gatsby-image';
// import { graphql, useStaticQuery } from 'gatsby';
import CTA from '../components/cta';
import SEO from '../components/seo';
import ServicesList from '../components/servicesList';
import GetStarted from '../components/getStarted';
import SocialSection from '../components/social';
import Testimonials from '../components/testimonials';

function IndexPage() {
  // const query = useStaticQuery(graphql`
  //   query {
  //     planet: file(relativePath: { eq: "planet 1-min.png" }) {
  //       childImageSharp {
  //         fluid(quality: 100, maxWidth: 600) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }

  //     astronaut: file(relativePath: { eq: "Astronaut-min-rotated.png" }) {
  //       childImageSharp {
  //         fluid(quality: 100, maxWidth: 600) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }

  //     rocket: file(relativePath: { eq: "Rocket-min.png" }) {
  //       childImageSharp {
  //         fluid(quality: 100, maxWidth: 600) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);
  const svgSizes = {height: 25, width:25, devHeigh: 13, devWidth: 33}
  return (
    <>
      <SEO
        keywords={[`freelance`, `home`, `jonathan`, `sexton`, `development`, `website`, `small business`]}
        title='Home'
      />
      <div className='index-wrapper'>
        {/* <Image fluid={query.planet.childImageSharp.fluid} className='planet' />
        <Image fluid={query.astronaut.childImageSharp.fluid} className='astronaut' />
        <Image fluid={query.rocket.childImageSharp.fluid} className='rocket' /> */}
        <CTA />
        <SocialSection socialContainerClassName={'lg:mb-24'} svgSizes={svgSizes}/>
      </div>
      <ServicesList />
      <GetStarted />
      <Testimonials bgColor='white' sectionTitle="Some of the Great Companies and People Who've Hired Me"/>
    </>
  );
}

export default IndexPage;
