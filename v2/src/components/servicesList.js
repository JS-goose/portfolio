/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const services = [
  {
    number: `1`,
    title: "Website Audit",
    desc:
      `A thorough review of your current website to identify any performance/user experience issues that could be pain points for users.`,
    imgAlt: `two people having a great conversation with chat bubbles above their heads`,
  },
  {
    number: `2`,
    title: "User Focused Design",
    desc: `The designs I create are focused on user experience from the start to ensure ease of use and get users the information they need.`,
    imgAlt: `a pencil and a ruler`
  },
  {
    number: `3`,
    title: "Personalized Development",
    desc: `With your goals at the forefront of development, I build a website that's easy to maintain, update, and grow.`,
    imgAlt: `a computer monitor with a page popping off it`
  },
  {
    number: `4`,
    title: "Marketing Solutions",
    desc: `Getting your message and products in front of your audience is essential to your business. That's why SEO is always a priority in my work.`,
    imgAlt: `a letter with a dollar sign on paper`
  },
  {
    number: `5`,
    title: "Content Solutions",
    desc: `Filling your website with written content like articles or blog posts can be tedious. Let me handle it while you focus on your business.`,
    imgAlt: `a book with an image icon`
  },
  {
    number: `6`,
    title: "Continued Support",
    desc: `I guarantee my work for 6 months after the launch of your project (and on a monthly basis after that to help with any changes).`,
    imgAlt: `a head with a headset on`
  },
];

const ServicesList = () => {
  const query = useStaticQuery(graphql`
    query {
      decisions: file(relativePath: { eq: "business_decisions.svg" }) {
        extension
        publicURL
      }
      shop: file(relativePath: { eq: "business_shop.svg" }) {
        extension
        publicURL
      }
      meeting: file(relativePath: { eq: "icons/consulting_transparentBG.svg" }) {
        extension
        publicURL
      }
      design: file(relativePath: { eq: "icons/design.svg" }) {
        extension
        publicURL
      }
      development: file(relativePath: { eq: "icons/development.svg" }) {
        extension
        publicURL
      }
      marketing: file(relativePath: { eq: "icons/marketing.svg" }) {
        extension
        publicURL
      }
      content: file(relativePath: { eq: "icons/content.svg" }) {
        extension
        publicURL
      }
      support: file(relativePath: { eq: "icons/support.svg" }) {
        extension
        publicURL
      }
    }
  `);

  return (
    <section className="flex flex-col mt-16 mb-16 bg-white grid-row-3 items-center w-full tracking-wide">
      <article className="services-list-container text-lg items-center">
        <div className="services-list">
          <h1 id="services" className="md:pb-6 lg:pb-12 sm:text-2xl lg:text-3xl xl:text-4xl">
            How Can I Help Your Business and Customer Base Grow?
          </h1>
          <div>
            {/* Image courtesy of https://undraw.co */}
            <img src={query.decisions.publicURL} alt="a man in a suit pointing at charts" />
          </div>
          <div className="flex flex-row flex-wrap w-100 mt-8">
            {services.map((service) => (
              <article key={service.number} className="w-full xl:max-w-md mb-12 mr-12 sm:text-base md:text-lg lg:text-xl">
                <div className="flex flex-col">
                  <div className="flex p-1 mb-2 w-100">
                    <img
                      src={service.number === "1" ? query.meeting.publicURL :
                        service.number === "2" ? query.design.publicURL :
                          service.number === "3" ? query.development.publicURL :
                            service.number === "4" ? query.marketing.publicURL :
                              service.number === "5" ? query.content.publicURL :
                                service.number === "6" ? query.support.publicURL : ""}
                      alt={service.imgAlt}
                    />
                    <p className="pl-4 font-bold text-xl xl:text-2xl">{service.title}</p>
                  </div>
                  <div className="p-1">
                    <p className="text-base md:text-lg lg:text-xl">{service.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="pt-6 sm:text-base md:text-lg lg:text-xl">
            Need more information about my services or ready to start working together? Get in touch today and let&apos;s grow your business!
          </p>
          <div className="mt-10">
            <a href="#hire-me" className="inline-block shadow-lg pt-3 pl-4 pr-4 pb-2 bg-myDarkRed rounded-sm text-white max-w-3/4
            justify-center mb-4 transform hover:scale-105 transition-all duration-700 ease-in-out sm:text-sm md:text-base xl:text-lg hover:bg-myRed
             hover:underline">Take me to the form</a>
          </div>
        </div>
      </article>
      <article className="why-hire-me-container items-center sm:text-base md:text-lg lg:text-xl">
        <div>
          <h1 className="md:pb-6 lg:pb-12 sm:text-2xl lg:text-3xl xl:text-4xl">Why Should You Hire Me As Your Developer?</h1>
          <div className="mb-8">
            {/* Image courtesy of https://undraw.co */}
            <img src={query.shop.publicURL} alt="a man standing outside a shop of books" className="why-hire-me-container-books-img" />
          </div>
          <p>
            Having a digital presence has never been more important than it is now. With consumers shifting more activities online you
            could be missing out on customers and profits if you don&apos; have an online presence.
          </p>
          &nbsp;
          <p>
            By partnering with me, you&apos;ll get a responsive, easy to use, functional, SEO optimized website that will ensure a
            great user experience.
          </p>
          &nbsp;
          <p>
            From sprawling, complex web applications to custom landing pages and sales funnels I&apos;ll put my industry knowledge and
            experience to work for you.
          </p>
          &nbsp;
          <p>
            I provide big agency level service and support with the same care and attention you get from local, hometown businesses.
          </p>
          &nbsp;
          <p>
            I communicate well and often in an easily understanable way. I&apos;m comfortable working with your current team or in a
            solo scenario; I&apos;m independent and trustworthy giving you time to do what matters - focus on your business.
          </p>
          &nbsp;
          <p>This is a partnership and I want you to be a part of the process.</p>
          &nbsp;
          <p>
            From the initial meeting, through the design and build process, all the way to launching your website we&apos;ll be there
            together.
          </p>
        </div>
      </article>
    </section>
  );
};

export default ServicesList;
