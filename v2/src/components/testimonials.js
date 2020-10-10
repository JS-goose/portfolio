import react from "React";

const Testimonials = () => {
  const testimonials = [
    { name: `Tracy Johnson`, company: `Tracy's Upholstery`, comment: `Testimonial here` },
    { name: `Stu Finn`, company: `Borealis Web Development`, comment: `Testimonial here` },
    { name: `Caleb Helton`, company: `Long State Breaks`, comment: `Testimonial here` },
    { name: `Keith Olson`, company: `Conduit PC Shop`, comment: `Testimonial here` },
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`},
  ];

  return (
    <article>
      <ul>
        {testimonials.map((test) => (
          <li key={test.name}>
            {test.name} - {test.comment}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Testimonials;
