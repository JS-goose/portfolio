import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import Image from 'gatsby-image';

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
    <section className='flex flex-col w-screen items-center'>
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
      <article className='consulting-inner-container bg-white p-4 sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <div className='flex'>
          <div className='consulting-img-container'>
            <Image fluid={query.me.childImageSharp.fluid} className='me-img' />
          </div>
          <div className='consulting-content-container p-2'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
              Looking for a reliable partner to help with your existing website or application? 
            </h1>
            <p>Here are some ways I can help you with your current solution: </p>
            <ul>
              <li>Item #1</li>
              <li>Item #2</li>
              <li>Item #3</li>
              <li>Item #4</li>
              <li>Item #5</li>
              <li>Item #6</li>
              <li>Item #7</li>
              <li>Item #8</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Consulting;
