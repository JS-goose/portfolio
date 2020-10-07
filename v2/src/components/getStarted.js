import React from "react";

const GetStarted = () => {
  const testimonials = [
    { name: `Tracy Johnson`, company: `Tracy's Upholstery`, comment: `Testimonial here` },
    { name: `Stu Finn`, company: `Borealis Web Development`, comment: `Testimonial here` },
    { name: `Caleb Helton`, company: `Long State Breaks`, comment: `Testimonial here` },
    { name: `Keith Olson`, company: `Conduit PC Shop`, comment: `Testimonial here` },
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`},
  ];
  return (
    <section className="p-2 flex flex-col items-center">
      <article className="border border-1 p-12 rounded shadow mb-8">
        <h2>Let&apos;s get started on your project!</h2>
        <form name="contact" method="POST" data-netlify="true">
          <legend className="invisible">Information About You</legend>
          <fieldset>
            <p className="flex flex-col pb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                aria-required
                required
                className="border border-1 p-2"
                placeholder="First and Last Names"
                aria-placeholder="First and Last Names"
              />
            </p>
            <p className="flex flex-col pb-4">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                aria-required
                required
                className="border border-1 p-2"
                placeholder="name@domain.com"
                aria-placeholder="name@domain.com"
              />
            </p>
            <p className="flex flex-col pb-4">
              <label htmlFor="phone-number">Phone Number (optional)</label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                aria-required
                required
                className="border border-1 p-2"
                placeholder="888-555-1234"
              />
            </p>
            <p className="flex flex-col pb-4">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="50"
                rows="2"
                aria-required
                required
                maxLength="300"
                className="border border-1 p-2"></textarea>
            </p>
          </fieldset>
        </form>
      </article>
      <article>
        <ul>
          {testimonials.map((test) => (
            <li key={test.name}>
              {test.name} - {test.comment}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default GetStarted;
