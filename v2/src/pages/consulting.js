import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import Image from 'gatsby-image';
import ContactForm from '../components/contactForm';

const Consulting = () => {
  const query = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className='flex flex-col items-center'>
      <SEO
        keywords={[
          `boerne web developer`,
          `web developer`,
          `web developer in boerne, tx`,
          `jonathan`,
          `jonathan sexton`,
          `consulting`,
        ]}
        title='Consulting'
      />
      <article className='consulting-inner-container flex bg-white p-4 sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <div className='consulting-img-container'>
          <Image fluid={query.me.childImageSharp.fluid} className='me-img' />
        </div>
        <div className='consulting-content-container p-2'>
          <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            Looking for a reliable partner to help with your existing website or application?
          </h1>
          <p>Here are some ways I can help you with your current solution: </p>
          <ul>
            <li>An honest, trustworthy developer who can imporove upon your existing user interaction</li>
            <li>A full thorough audit of your current website</li>
            <li>
              Someone who can navigate the ever changing technical landscape & provide help to you and your company
            </li>
            <li>A developer who can lend a helping hand with your current team </li>
            <li>A proven leader with experience, knowledge, and communication skills</li>
            <li>Someone to advise you on technical decisions affecting your business</li>
            <li>Project planning from start to finish</li>
          </ul>
        </div>
      </article>
      <article>
        <ContactForm formTitle={"Let's work together!"} bgColor={'bg-white'} />
      </article>
    </section>
  );
};

export default Consulting;
