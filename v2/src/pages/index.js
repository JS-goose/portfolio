import React from 'react';
import CTA from '../components/cta';
import SEO from '../components/seo';
import ServicesList from '../components/servicesList';
import GetStarted from '../components/getStarted';
import SocialSection from '../components/social';
import Testimonials from '../components/testimonials';

function IndexPage() {
  const svgSizes = { height: 25, width: 25, devHeigh: 13, devWidth: 33 }
  return (
    <>
      <SEO
        description="I'm a freelance web developer who specializes in helping businesses grow through well designed, conversion centered websites"
        lang="en"
        title='Freelance Web Developer | Jonathan Sexton'
        keywords={["boerne web developer", "small business website", "small business", "how to build small business website", "tile laying website", "freelance", "home", "jonathan sexton", "jonathan", "sexton", "development", "website"]}
      />
      <div className='index-wrapper'>
        <CTA />
        <SocialSection socialContainerClassName={'lg:mb-24'} svgSizes={svgSizes} />
      </div>
      <ServicesList />
      <GetStarted />
      <Testimonials bgColor='white' sectionTitle="Some of the Great Companies and People Who've Hired Me" />
    </>
  );
}

export default IndexPage;
