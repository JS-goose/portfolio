import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Testimonials = () => {
  const testimonials = [
    {
      name: `Stu Finn`,
      company: `Borealis Web Development`,
      title: `Owner/Developer`,
      comment: `Testimonial here`,
      website: `https://borealisweb.ca`,
    },
    {
      name: `Tracy Johnson`,
      company: `Tracy's Upholstery`,
      title: `Owner`,
      comment: `Testimonial here`,
      website: `https://https://www.tracys-upholstery.com/`,
    },
    {
      name: `Michael Masor`,
      company: `Annuity Market Pro`,
      title: `CEO/Founder`,
      comment: `Testimonial here`,
      website: `https://www.annuitymarketpro.com/`,
    },
    { name: `Caleb Helton`, company: `Long State Breaks`, comment: `We're a niche market company`, website: `` },
    { name: `Keith Olson`, company: `Conduit PC Shop`, comment: `Testimonial here`, website: `` },
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`, website: `https://www.localcomputer.expert/`},
  ];

  const query = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "undraw_profile_pic_ic5t.svg" }) {
        extension
        publicURL
      }
      icon2: file(relativePath: { eq: "undraw_female_avatar_w3jk.svg" }) {
        extension
        publicURL
      }
    }
  `);

  return (
    <section className="bg-white w-full flex items-center justify-center">
      <article className="items-center">
        <ul>
          {testimonials.map((card, index) => (
            <li key={index} data-key={index + 1}>
              <div className="flex shadow rounded-sm p-6">
                {/* Avatars courtesy of Undraw.co */}
                {index + 1 === 2 ? (
                  <img src={query.icon2.publicURL} className="sm:h-26 md:h-24 lg:h-32 mr-4" alt="a female avatar " />
                ) : (
                  <img src={query.icon.publicURL} className="sm:h-26 md:h-24 lg:h-32 mr-4" alt="a male avatar" />
                )}
                <div>
                  <h4 className="text-2xl">{card.name}</h4>
                  <p>{card.title}</p>
                  <p>
                    <a href={card.website}>{card.company}</a>
                  </p>
                  <p>{card.comment}</p>
                </div>
              </div>{" "}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Testimonials;
