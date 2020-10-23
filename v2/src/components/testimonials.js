import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const Testimonials = () => {
  const testimonials = [
    {
      name: `Stu Finn`,
      company: `Borealis Web Development`,
      title: `Owner/Developer`,
      comment: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
      website: `https://borealisweb.ca`,
    },
    {
      name: `Tracy Johnson`,
      company: `Tracy's Upholstery`,
      title: `Owner`,
      comment: `"Jonathan helped my business see increased growth and revenue with the website he built - I will gladly work with him again on future projects."`,
      website: `https://https://www.tracys-upholstery.com/`,
    },
    {
      name: `Michael Masor`,
      company: `Annuity Market Pro`,
      title: `CEO/Founder`,
      comment: `"Knowledgeable, independent, fair, and trustworthy - working with Jonathan was nothing but a phenomenal experience!"`,
      website: `https://www.annuitymarketpro.com/`,
    },
    {
      name: `Caleb Helton`,
      company: `Long State Breaks`,
      title: `Owner/Founder`,
      comment: `"Jonathan was able to identify pain points with our previous website and then address those issues with the website he built. He's my go-to for any future projects."`,
    },
    {
      name: `Keith Olson`,
      company: `Conduit PC Shop`,
      title: `Owner`,
      comment: `"I came to Jonathan with only a vision. He worked with me every step of the way through frequent communication and brought that vision to life. I'm very happy with the results."`,
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
          <p className="pt-4">
            If you have a project or an idea, I&apos;d love to work with you to bring it to life. My passon is helping
            people and small businesses get up and running with a fast, reliable, customer focused website.
          </p>
          <p className="pt-4">Let me put that passion to work for you.</p>
          <div className="testimonials-container-link-container mt-6">
            <a
              href="#hire-me"
              className="bg-myPurple pt-3 pl-4 pr-4 pb-2 rounded-sm text-lg border-transparent shadow text-white hover:underline hover:bg-gradient-to-r from-myRed to-myPurple hover:text-white">
              Get Started Today!
            </a>
          </div>
        </div>
        {testimonials.map((card, index) => (
          <div
            key={index}
            data-key={index + 1}
            className="testimonials-container-2 flex rounded-sm p-6 items-center justify-around max-w-2xl">
            <Image
              className="testimonials-images shadow-lg"
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
            <div className="pl-4">
              <h4 className="text-2xl text-myRed">{card.name}</h4>
              <p className="text-myPurple">{card.title}</p>
              <p className="text-myPurple">{card.company}</p>
              <p className="sm:max-w-xs md:max-w-sm lg:max-w-lg italic">{card.comment}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Testimonials;
