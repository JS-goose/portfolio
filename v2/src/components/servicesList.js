import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import Image from "gatsby-image";

const services = [
  {
    number: `1`,
    desc: `Provide a consultation to discuss any pain points you have with your web presence (or lack of).`,
  },
  {
    number: `2`,
    desc: `Assess your current website to identify issues, propose solutions, and ultimately correct those issues.`,
  },
  {
    number: `3`,
    desc: `Design a custom website from start to finish that you sign off on before any build work is started.`,
  },
  {
    number: `4`,
    desc: `Tailor that solution with ease of use in mind to draw in more customers and expand your presence.`,
  },
  {
    number: `5`,
    desc: `Ensure SEO is at the forefront of the work I do so you're website get's in front of your prospective audience`,
  },
  {
    number: `6`,
    desc: `Handle the building, hosting, deployment, and maintenance of your website so you can focus on your business. `,
  },
  { number: `7`, desc: `Bring industry knowledge, experience, and follow-through to your exisiting or new project.` },
  {
    number: `8`,
    desc: `Communicate openly and honestly with you and/or your stakeholders about the cost/time/progress of the project.`,
  },
  {
    number: `9`,
    desc: `Take care of any updates, changes, edits, or technical overhauls of your website via reoccuring service subscription.`,
  },
  { number: `10`, desc: `Guarantee my work for a minimum of 6 months after the launch of the project.` },
];

const ServicesList = () => {
  const query = useStaticQuery(graphql`
    query {
      decisions: file(relativePath: { eq: "undraw_business_decisions_gjwy.svg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
        extension
        publicURL
      }
      shop: file(relativePath: { eq: "undraw_business_shop_qw5t.svg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
        extension
        publicURL
      }
    }
  `);

  return (
    <section className='flex flex-col mt-16 mb-16 bg-white grid-row-3 items-center w-full'>
      <div className='services-list-container text-lg items-center'>
        <div className='services-list'>
          <h1 className='text-myRed md:pb-6 lg:pb-12 sm:text-2xl lg:text-3xl xl:text-4xl'>
            What Can I Do For You and Your Business?
          </h1>
          <ul>
            {services.map((service) => (
              <li key={service.number} className='pb-4 sm:text-base md:text-lg lg:text-xl'>
                {service.number}. {service.desc}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Image courtesy of https://undraw.co */}
          <img src={query.decisions.publicURL} alt='a man in a suit pointing at charts' />
        </div>
      </div>
      <div className='why-hire-me-container items-center sm:text-base md:text-lg lg:text-xl'>
        <div>
          {/* Image courtesy of https://undraw.co */}
          <img
            src={query.shop.publicURL}
            alt='a man standing outside a shop of books'
            className='why-hire-me-container-books-img'
          />
        </div>
        <div>
          <h1 className='text-myRed md:pb-6 lg:pb-12 sm:text-2xl lg:text-3xl xl:text-4xl'>
            Why Hire Me As Your Developer?
          </h1>
          <p>
            Having a digital presence has never been more important than it is now. With consumers shifting more of
            their activities to online you&apos;re missing out on customers and profits if you don&apos; have an online
            presence.
          </p>
          &nbsp;
          <p>
            By partnering with me, you&apos;ll get a responsive, easy to use, functional, SEO optimized website built
            using the most up to date and stable technologies that ensure a great user experience.
          </p>
          &nbsp;
          <p>
            From sprawling, complex web application to something smaller, more custom I&apos;ll put my industry
            knowledge and experience to work for you.
          </p>
          &nbsp;
          <p>
            I provide big agency level work and support with the same care and attention you get from local, hometown
            businesses.
          </p>
          &nbsp;
          <p>
            I communicate well and often in an easily understanable way. I&apos;m comfortable working with your current
            team or in a solo scenario; I&apos;m independent and trustworthy giving you time to do what matters - focus
            on your business.
          </p>
          &nbsp;
          <p>
            This is a partnership that will last beyond this project and I want you to be a part of the process. From
            the initial meeting, through the design and build process, all the way to launching your website I&apos;ll
            be right by your side providing help and support.
          </p>
          &nbsp;
          <p>
            You&apos;re in good hands! I am very proud of the work I do and I&apos;m confident you will love the
            results!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
