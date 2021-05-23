import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/seo';
import ContactForm from '../components/contactForm';

const Consulting = () => {
  const query = useStaticQuery(graphql`
    query {
      collab: file(relativePath: { eq: "undraw_Online_collaboration_re_bkpm.svg" }) {
        extension
        publicURL
      }
      search: file(relativePath: { eq: "undraw_the_search_s0xf.svg" }) {
        extension
        publicURL
      }
    }
  `);
  return (
    <section className="flex flex-col min-w-full max-w-screen items-center">
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
      <article className='consulting-inner-container bg-white p-6 sm:text-base md:text-lg lg:text-xl'>
        <h1 className='text-myBlack md:pb-6 lg:pb-14 md:pt-6 lg:pt-6 sm:text-2xl lg:text-3xl xl:text-4xl'>
          In Need of an Extra Team Member or Help With Your Existing Website?
        </h1>
        <div className="flex justify-center">
          <img src={query.collab.publicURL} alt='people collaborating on a project' />
        </div>
        <div className='consulting-content-container p-6'>
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
      <article className="form-container items-center bg-white p-6">
        <ContactForm formTitle={"Let's work together!"} bgColor={'bg-white'} />
      </article>
      <article className='consulting-inner-container bg-white p-6 sm:text-base md:text-lg lg:text-xl'>
        <h1 className='text-myBlack md:pb-6 lg:pb-14 sm:text-2xl lg:text-3xl xl:text-4xl'>
          Searching for a Trusted, Knowledgable Developer to Build a New Website?
          </h1>
        <div className="flex justify-center">
          <img src={query.search.publicURL} className='consulting-collab-img' alt='people collaborating on a project' />
        </div>
        <div className='consulting-content-container p-6'>
          <p className="pb-4">Building a web presence that not only brings in leads but converts visitors to paying customers can be daunting.
          Let me help get your project off on the right foot.  Here are some services I can provide:</p>
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
          <button type="button">Take me to the form</button>
        </div>
      </article>
    </section>
  );
};

export default Consulting;
