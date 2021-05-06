import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby';
import HireLink from './hireLink';
import ServicesLink from './servicesLink';

const CallToAction = () => {
  const query = useStaticQuery(graphql`{
  me: file(relativePath: {eq: "me-min.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, width: 600, layout: CONSTRAINED)
    }
  }
  hand: file(relativePath: {eq: "icons/waving hand.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, width: 50, layout: CONSTRAINED)
    }
  }
}
`);
  return (
    <section className='cta md:mt-12 xl:mt-24 text-white sm:max-w-full md:max-w-4xl lg:max-w-6xl'>
      <article className='cta-img-container sm:p-2 lg:p-6'>
        <GatsbyImage image={query.me.childImageSharp.gatsbyImageData} alt="Jonathan Sexton pretending to write something clever in his journal while sitting at a desk" className='me-img' />
        <div className='flex flex-row justify-center sm:pt-2'>
          <h5 className='md:text-base lg:text-lg font-Rubik'>Hi, I&apos;m Jonathan :)</h5>
          {/* <Image fluid={query.hand.childImageSharp.fluid} className='h-8 w-8 ml-2' /> */}
        </div>
      </article>
      <span className='hidden md:visible border border-right border-myRed inline-block mt-6 mb-8 ml-1 mr-4' />
      <article className='p-3 sm:text-sm md:text-base lg:text-lg'>
        <div className='flex flex-col justify-evenly max-w-3xl h-full'>
          <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-4xl underline'>
            I build blazing fast, functional websites that help businesses convert visitors to customers!
          </h1>
          <p>
            I&apos;m a freelance developer specializing in helping people and businesses expand their online presence,
            reach more customers, and broaden their audience!
          </p>
          <p>
            Are you looking for a developer to design, build, and publish your website?  Do you need an audit of your existing website? You&apos;ve
            come to the right place then my friend!
          </p>
          <div className='flex flex-col lg:flex-row mt-4 text-white sm:w-3/4 lg:w-full'>
            <HireLink href={'#hire-me'} textContent={'Hire Me For Your Project'} />
            <ServicesLink />
          </div>
        </div>
      </article>
    </section>
  );
};

export default CallToAction;
