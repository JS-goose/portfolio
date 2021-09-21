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
        keywords={["boerne web developer", "small business website", "tile laying website", "freelance", "home", "jonathan", "sexton", "development", "website", "small business"]}
        title='Home'
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
