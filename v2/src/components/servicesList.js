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
    desc: `Communicate openly and honestly with you and/or your stakeholders about the progress of the project.`,
  },
  { number: `9`, desc: `Guarantee my work for a minimum of 6 months after the launch of the project.` },
];

const ServicesList = () => (
  <div className="bg-white flex flex-col justify-between h-full mt-12 p-1 border border-white grid-row-3 rounded-sm">
    <h2>What I Can Do For You and Your Business:</h2>
    <div className="services-list border border-red-500 p-2">
      <ul>
        {services.map((service) => (
          <li key={service.number}>
            {service.number}. {service.desc}
          </li>
        ))}
      </ul>
    </div>
    <h2>Why Should You Hire Me As Your Freelance Developer?</h2>
    <div className="why-hire-me border border-purple-500 p-2">
      <p>
        Having a digital presence has never been more important than it is now. With consumers shifting to online
        purchasing more and more you&apos;re missing out on customers and profits if you don&apos; have a user friendly,
        functional, SEO optimized website. I can provide that for you at a cost much more reasonable than hiring a big
        firm.
      </p>
      <p>
        I bring current industry knowledge with experience and know how. I&apos;ve taught others to do what I do when I
        was a mentor at{" "}
        <a href="https://udacity.com" target="__blank" rel="noopener noreferrer">
          Udacity
        </a>{" "}
        - one of the most prominent web development bootcamps.
      </p>
      <p>
        If you&apos;re built sprawling, complex web applications for businesses and I&apos;ve built smaller projects for
        hobbyists/local businesses so I&apos;m familiar and comfortable with both. I provide agency level work and
        support with the same care and attention you&apos;d get by being my only client.
      </p>
      <p>I communicate well with clients, teams, stakeholders.</p>
    </div>
  </div>
);

export default ServicesList;
