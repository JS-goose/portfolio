import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const Testimonials = () => {
  const testimonials = [
    {
      name: `Stu Finn`,
      company: `Borealis Web Development`,
      title: `Owner/Developer`,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      website: `https://borealisweb.ca`,
    },
    {
      name: `Tracy Johnson`,
      company: `Tracy's Upholstery`,
      title: `Owner`,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      website: `https://https://www.tracys-upholstery.com/`,
    },
    {
      name: `Michael Masor`,
      company: `Annuity Market Pro`,
      title: `CEO/Founder`,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      website: `https://www.annuitymarketpro.com/`,
    },
    {
      name: `Caleb Helton`,
      company: `Long State Breaks`,
      comment: `We're a niche market company, so it was nice to find someone like Jonathan who could narrow down pain points and address them quickly`,
      website: ``,
    },
    {
      name: `Keith Olson`,
      company: `Conduit PC Shop`,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      website: ``,
    },
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`, website: `https://www.localcomputer.expert/`},
  ];

  const query = useStaticQuery(graphql`
    query {
      stu: file(relativePath: { eq: "Stu.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      tracy: file(relativePath: { eq: "tracy-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      mike: file(relativePath: { eq: "mike-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      caleb: file(relativePath: { eq: "caleb-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      keith: file(relativePath: { eq: "keith.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <section className="bg-white w-full flex items-center justify-center">
      <article className="testimonials-container w-full items-center p-12">
        <div className="testimonials-container-1">
          <h3>Here&apos;s Some of the Great Companies & People I&apos;ve Helped</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {testimonials.map((card, index) => (
          <div
            key={index}
            data-key={index + 1}
            className="testimonials-container-2 flex rounded-sm p-8 items-center justify-around max-w-2xl">
            <div>
              <Image
                className="h-64 w-64 rounded-full"
                fluid={
                  index + 1 === 1
                    ? query.stu.childImageSharp.fluid
                    : index + 1 === 2
                    ? query.tracy.childImageSharp.fluid
                    : index + 1 === 3
                    ? query.mike.childImageSharp.fluid
                    : index + 1 === 4
                    ? query.caleb.childImageSharp.fluid
                    : index + 1 === 5
                    ? query.keith.childImageSharp.fluid
                    : ""
                }
              />
              <h4 className="text-2xl">{card.name}</h4>
              <p>{card.title}</p>
              <p>
                <a href={card.website}>{card.company}</a>
              </p>
              <p className="sm:max-w-xs md:max-w-sm lg:max-w-lg">{card.comment}</p>
            </div>
          </div>
        ))}
        <div className="testimonials-container-link-container">
          <a href="#hire-me">Contact Me</a>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
