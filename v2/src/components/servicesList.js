import React from "react";

const services = [
  {
    number: `1`,
    desc: `Provide a consultation to discuss any current pain points you currently have with your web presence (or lack of).`,
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
  { number: `9`, desc: `Guarantee my work for a minimum of 6 months after the launch of the project.` },
];

const ServicesList = () => (
  <div className="bg-white flex flex-col items-center h-full grid-row-3 rounded-sm self-start">
    <div className="services-list text-lg h-full max-w-4xl">
      <h2>What I Can Do For You and Your Business:</h2>
      <ul>
        {services.map((service) => (
          <li key={service.number} className="pb-4">
            {service.number}. {service.desc}
          </li>
        ))}
      </ul>
    </div>
    <div className="why-hire-me text-lg h-full max-w-4xl">
      <h2>Why Should You Hire Me As Your Freelance Developer?</h2>
      <p>
        Having a digital presence has never been more important than it is now. With consumers shifting to online
        purchasing more and more you&apos;re missing out on customers and profits if you don&apos; have a user friendly,
        functional, SEO optimized website. I can provide that for you at a cost much more reasonable than hiring a big
        firm.
      </p>
      &nbsp;
      <p>
        I bring current industry knowledge with experience and know how. I&apos;ve taught others to do what I do when I
        was a mentor at{" "}
        <a href="https://udacity.com" target="__blank" rel="noopener noreferrer">
          Udacity
        </a>{" "}
        - one of the most prominent web development bootcamps.
      </p>
      &nbsp;
      <p>
        If you&apos;re project involves a sprawling, complex web application or something smaller, more custom I&apos;m
        familiar and comfortable with both. I provide big agency level work and support with the same care and attention
        you get from local, hometown businesses.
      </p>
      &nbsp;
      <p>
        I communicate well on an individual or team basis, I&apos;m comfortable working with your current team or in a
        solo scenario, I&apos;m independent & capable of managing myself so you can focus on your business.
      </p>
      &nbsp;
      <p>
        This is a partnership that I want to last beyond this project and I want you to be a part of the process. From
        the initial meeting, through the design and build process, all the way to launching your website I&apos;ll be
        right by your side providing help and support.
      </p>
      &nbsp;
      <p>
        I want you to know you&apos;re in good hands! I am very proud of the work I do and I know you&apos;ll love the
        result!
      </p>
    </div>
  </div>
);

export default ServicesList;
