import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Testimonials = (props) => {
  const testimonials = [
    {
      name: `Stu Finn`,
      company: `Borealis Web Development`,
      title: `Owner/Developer`,
      comment: `"I've hired Jonathan for multiple Borealis Web Development projects and it is always a pleasure working with him.  He's easygoing, incredibly helpful, and is an excellent developer."`,
      website: `https://borealisweb.ca`,
      imgAlt: 'a photo of Stu Finn looking stylish in some dope sunglasses'
    },
    {
      name: `Tracy Johnson`,
      company: `Tracy's Upholstery`,
      title: `Owner`,
      comment: `"Jonathan helped my business see increased growth and revenue with the website he built - I will gladly work with him again on future projects."`,
      website: `https://https://www.tracys-upholstery.com/`,
      imgAlt: 'Tracy Johnson with a beautiful smile and smashing good looking hair'
    },
    {
      name: `Michael Masor`,
      company: `Annuity Market Pro`,
      title: `CEO/Founder`,
      comment: `"Knowledgeable, independent, fair, and trustworthy - working with Jonathan was nothing but a phenomenal experience!"`,
      website: `https://www.annuitymarketpro.com/`,
      imgAlt: 'Michael Masor looking all snazzied up in his business casual attire'
    },
    {
      name: `Caleb Helton`,
      company: `Long State Breaks`,
      title: `Owner/Founder`,
      comment: `"Jonathan was able to identify pain points with our previous website and then remedy those issues with the website he built. He's my go-to for any future projects."`,
      imgAlt: 'A handsome individual named Caleb Helton in a bright orange shirt'
    },
    {
      name: `Keith Olson`,
      company: `Conduit PC Shop`,
      title: `Owner`,
      comment: `"I came to Jonathan with only a vision. He worked with me every step of the way through frequent communication and brought that vision to life. I'm very happy with the results."`,
      imgAlt: 'Keith Olson looking dapper in his military dress uniform'
    },
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`, website: `https://www.localcomputer.expert/`},
  ];

  const query = useStaticQuery(graphql`
    {
      stu: file(relativePath: { eq: "Stu.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 250, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
      tracy: file(relativePath: { eq: "tracy-min.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 250, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
      mike: file(relativePath: { eq: "mike-min.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 250, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
      caleb: file(relativePath: { eq: "caleb-min.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 250, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
      keith: file(relativePath: { eq: "keith.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 250, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <section className={`bg-${props.bgColor} ${props.textColor} w-full flex items-center justify-center`}>
      <article className="testimonials-container w-full items-center p-12 md:gap-4">
        <div className="testimonials-container-1 sm:text-sm md:text-base lg:text-lg sm:mb-6 md:mb-4 lg:mb-0">
          <h3 className="font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
            Some of the Great Companies & People I&apos;ve Helped
          </h3>
        </div>
        <div className="testimonials-container-2">
          {testimonials.map((card, index) => (
            <div
              key={index}
              data-key={index + 1}
              className="customer-testimonial-container flex sm:p-2 md:p-4 lg:p-6 items-center md:justify-center lg:justify-around max-w-3xl sm:text-sm md:text-base"
            >
              {/* //! Need to set the alt for each of these !// */}
              <GatsbyImage
                image={
                  index + 1 === 1
                    ? query.stu.childImageSharp.gatsbyImageData
                    : index + 1 === 2
                      ? query.tracy.childImageSharp.gatsbyImageData
                      : index + 1 === 3
                        ? query.mike.childImageSharp.gatsbyImageData
                        : index + 1 === 4
                          ? query.caleb.childImageSharp.gatsbyImageData
                          : index + 1 === 5
                            ? query.keith.childImageSharp.gatsbyImageData
                            : ""
                }
                className="testimonials-images rounded-sm shadow-lg"
                alt={card.imgAlt}
              />
              <div className="pl-4 sm:text-lg md:text-xl">
                <h4 className="lg:text-2xl font-bold">{card.name}</h4>
                <p className="text-sm hidden md:inline">{card.title} - </p>
                <p className="text-sm hidden md:inline">{card.company}</p>
                <p className="sm:max-w-full md:max-w-md lg:max-w-lg italic">{card.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-container-3 pt-6">
          <p className="font-bold sm:text-xl lg:text-2xl xl:text-3xl">Ready to Turn Your Idea Into a Reality?</p>
          <p className="pt-6 sm:text-base md:text-xl">
            If you have a project idea, I&apos;d love to work with you to bring it to life. In an effort to give my absolute best to the people and companies I work with, 
            I take on a limited number of clients each month.  Don&apos;t take the chance on missing out.
          </p>
          <p className="pt-4 sm:text-base md:text-xl">How do we start the process? Glad you asked!</p>
          <div className="mt-10">
            <span
              className="inline-block shadow-lg pt-3 pl-4 pr-4 pb-2 bg-myRed rounded-sm text-white max-w-3/4
            justify-center mb-4 transform hover:scale-105 transition-all duration-700 ease-in-out sm:text-sm md:text-base xl:text-lg hover:bg-myDarkRed
             hover:underline"
            >
              <a href="#hire-me">Take your business to the next level!</a>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
