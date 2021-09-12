import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import ContactForm from "../components/contactForm";

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
    <section className="flex flex-col min-w-full max-w-screen items-center text-white">
      <SEO
        keywords={[
          `boerne web developer`,
          `web developer`,
          `web developer in boerne, tx`,
          `jonathan`,
          `jonathan sexton`,
          `consulting`,
        ]}
        title="Consulting"
      />
      <article className="consulting-inner-container bg-myPurple p-6 sm:text-base md:text-lg lg:text-xl">
        <h1 className="md:pb-6 lg:pb-14 md:pt-6 lg:pt-6 sm:text-2xl lg:text-3xl xl:text-4xl">
          In Need of an Extra Team Member or Help With Your Existing Website?
        </h1>
        <div className="flex justify-center">
          <img src={query.collab.publicURL} alt="people collaborating on a project" />
        </div>
        <div className="consulting-content-container p-6">
          <p className="pb-4">
            Sometimes you need a fresh pair of eyes or a new perspective. Other times you might just need another developer to help
            with your existing team.
          </p>
          <p className="pb-4">
            {" "}
            I&apos;ve worked on teams of all sizes so I&apos;m comfortable integrating into your team, taking direction, and doing my part to get
            us over the finish line.
          </p>
          <p className="pb-4">
            Or maybe you&apos;re looking for someone to lead your team - someone that can give direction, take feedback, and turn that into
            results for you and your customers.
          </p>
          <p className="pb-8">
            Whatever your needs may be with your current solution, here are some ways I can help you and your business:{" "}
          </p>
          <ol className="pb-8 pl-6">
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> A full thorough audit of your current website to ensure we start on the right foot </li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> An honest, trustworthy developer who can improve upon your existing user interaction</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Someone who can navigate the ever changing technical landscape with confidence</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> A developer who can lead or integrate into your current team</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> A proven leader with experience, knowledge, and communication skills</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Someone to advise you on technical decisions affecting your business</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Project planning from start to finish</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> A subject matter expert you can trust to give you actionable insights</li>
          </ol>

          <p className="pb-4">If any of these services sound like what you are looking for, use the form below to start the process.
          I want to provide the best service to all of my customers. In order to do that, I only work with a set amount of clients each month.
           </p>
          <p>Don&apos;t take the chance on missing an opportunity to expand your reach and grow your business - get in touch today!
          </p>
        </div>
      </article>
      <article className="text-myBlack form-container items-center bg-white my-10 pb-6 pt-12" id="hire-me">
        <ContactForm bgColor={"white"} />
      </article>
      <article className="consulting-inner-container p-6 sm:text-base md:text-lg lg:text-xl">
        <h1 className="md:pb-6 lg:pb-14 sm:text-2xl lg:text-3xl xl:text-4xl">
          Searching for a Trusted, Knowledgeable Developer to Build a New Website?
        </h1>
        <div className="flex justify-center">
          <img src={query.search.publicURL} className="consulting-collab-img" alt="people collaborating on a project" />
        </div>
        <div className="consulting-content-container p-6">
          <p className="pb-4">
            Building a web presence that not only brings in leads but converts visitors to paying customers can be daunting and confusing. Let me
            get your project off on the right foot.
          </p>
          <p className="pb-8">While you won&apos;t find all of the ways I can help your business until we start working together, here are some services I provide:</p>
          <ol className="pb-8 pl-6">
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Planning, collaborating, and communicating about your needs before any work is started</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Visual design of your website that you&apos;re in control of</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Building and deploying your website using the most up to date technologies</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> <a href="https://moz.com/learn/seo/what-is-seo" target="__blank" rel="noopener noreferrer">Search engine optimization</a> (SEO) and <a href="https://moz.com/learn/seo/conversion-rate-optimization" target="__blank" rel="noopener noreferrer">conversion rate optimization</a> (CRO)</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Handling the <a href="https://en.wikipedia.org/wiki/Domain_name" target="_blank" rel="noopener noreferrer">domain name services</a> and file hosting of your new website</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Provide maintenance to ensure your website is always update and secure</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Written content creation/article writing services</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Adding, editing, and (if need be) removing content from your website</li>
            <li className="pb-2"><span className="text-3xl text-myRed">&#x21e8;</span> Marketing services such as <a href="https://ads.google.com/home/#!/" target="_blank" rel="noopener noreferrer">Google Ads</a> and social media advertising</li>
          </ol>
          <p className="pb-8">If any of these describe what you are looking for, use the form above to get started today!  I respond to all inquires within 24 hours.</p>
          <button className="text-white shadow-lg bg-myRed p-2 rounded transform hover:scale-105 transition-all duration-700 ease-in-out hover:underline hover:bg-myDarkRed">
            <a href="#hire-me" className="">Take me to the form</a>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Consulting;
