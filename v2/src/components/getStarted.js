import React from "react";

const GetStarted = () => {
  const testimonials = [
    { name: `Tracy`, company: `Tracy's Upholstery`, comment: `Testimonial here` },
    { name: `Stu`, company: `Borealis Web Development`, comment: `Testimonial here` },
    {name: `Caleb Helton`, company: `Long State Breaks`, comment: `Testimonial here`},
    {name: `Keith Olson`, company: `Conduit PC Shop`, comment: `Testimonial here`},
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`},
  ];
  return (
    <section className="bg-white p-2 rounded">
      <article>
        <h2>Let&apos;s get started on your project!</h2>
        <button>TypeForm Button</button>
      </article>
      <article>
        <ul>
          {testimonials.map((test) => (
            <li key={test.name}>{test.name} - {test.comment}</li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default GetStarted;
