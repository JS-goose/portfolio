import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: `Stu Finn`,
      company: `Borealis Web Development`,
      comment: `Testimonial here`,
      website: `https://borealisweb.ca`,
    },
    {
      name: `Tracy Johnson`,
      company: `Tracy's Upholstery`,
      comment: `Testimonial here`,
      website: `https://https://www.tracys-upholstery.com/`,
    },
    {
      name: `Michael Masor`,
      company: `Annuity Market Pro`,
      comment: `Testimonial here`,
      website: `https://www.annuitymarketpro.com/`,
    },
    { name: `Caleb Helton`, company: `Long State Breaks`, comment: `We're a niche market company`, website: `` },
    { name: `Keith Olson`, company: `Conduit PC Shop`, comment: `Testimonial here`, website: `` },
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`, website: `https://www.localcomputer.expert/`},
  ];

  return (
    <section className="bg-white w-full h-full flex items-center justify-center">
      <article className="items-center">
        <ul>
          {testimonials.map((card, index) => (
            <li key={index} data-key={index + 1}>
              <div className="border border-myPurple ">
                <h4 className="text-2xl">{card.name}</h4>
                <p>{card.comment}</p>
                <p>
                  <a href={card.website}>{card.company}</a>
                </p>
              </div>{" "}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Testimonials;
