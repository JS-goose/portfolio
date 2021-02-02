import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import HireLink from './hireLink';

const CallToAction = () => {
  const query = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      hand: file(relativePath: { eq: "icons/waving hand.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className='cta md:mt-12 xl:mt-24 shadow-2xl sm:max-w-full md:max-w-4xl lg:max-w-6xl'>
      <article className='cta-img-container sm:p-2 lg:p-6'>
        <Image fluid={query.me.childImageSharp.fluid} className='me-img' />
        <div className='flex flex-row justify-center sm:pt-2'>
          <h5 className='md:text-base lg:text-lg font-Rubik'>Hi, I&apos;m Jonathan</h5>
          <Image fluid={query.hand.childImageSharp.fluid} className='h-8 w-8 ml-2' />
        </div>
      </article>
      <span className='hidden md:visible border border-right border-myRed inline-block mt-6 mb-8 ml-1 mr-4' />
      <article className='p-3 sm:text-sm md:text-base lg:text-lg'>
        <div className='flex flex-col justify-evenly max-w-3xl h-full'>
          <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            I build blazing fast, functional websites that help businesses connect with their customers!
          </h1>
          <p className='lg:leading-8'>
            I&apos;m a freelance developer specializing in helping people and businesses expand their online presence,
            reach more customers, and broaden their audience!
          </p>
          <p className='lg:leading-8'>
            Are you looking for a to developer design, build, and publish your website for the world to see? You&apos;ve
            come to the right place then my friend!
          </p>
          {/* <h4 className='mt-2 font-bold'> Let’s launch your project together!</h4> */}
          <div className='flex flex-col lg:flex-row mt-4 text-white sm:w-3/4 lg:w-full'>
            <HireLink href={'#hire-me'} textContent={'Hire Me For Your Project'} />
            <span className='md:ml-0 lg:ml-40 p-2 rounded-sm cta-buttons sm:w-full mb-4 sm:text-sm md:text-base xl:text-lg border-transparent text-myBlack hover:underline hover:bg-gradient-to-r from-myRed to-myPurple hover:text-white'>
              <a
                href='#services'
                rel='noopener noreferrer'
                className='flex justify-center items-center lg:font-semibold'>
                Browse My Services
                <svg
                  className='fill-current ml-1'
                  width='26'
                  height='25'
                  viewBox='0 0 26 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.888794 12.5C0.888794 19.4036 6.503 25 13.4285 25C20.354 25 25.9682 19.4036 25.9682 12.5C25.9682 5.59644 20.354 0 13.4285 0C6.503 0 0.888794 5.59644 0.888794 12.5ZM23.6882 12.5C23.6882 18.1484 19.0948 22.7273 13.4285 22.7273C7.76219 22.7273 3.16874 18.1484 3.16874 12.5C3.16874 6.85164 7.76219 2.27274 13.4285 2.27274C19.0948 2.27274 23.6882 6.85164 23.6882 12.5ZM17.1823 11.6965L18.7945 13.3035L13.4285 18.6525L8.06253 13.3035L9.67469 11.6965L13.4285 15.4384L17.1823 11.6965ZM17.1823 7.15103L13.4285 10.893L9.67469 7.15103L8.06253 8.75809L13.4285 14.1071L18.7945 8.75809L17.1823 7.15103Z'
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CallToAction;
