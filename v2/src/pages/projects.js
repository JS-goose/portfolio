import React from "react";
import SEO from "../components/seo";
import ProjectList from "../components/projectList";
import Testimonials from "../components/testimonials";
import ContactForm from "../components/contactForm";

const Projects = () => (
  <>
    <section className="flex flex-col min-w-full max-w-screen items-center text-white">
      <SEO keywords={[`freelance`, `about`, `jonathan`, `sexton`, `development`, `website`]} title="Projects" />
      <p className="sm:text-2xl lg:text-3xl xl:text-4xl font-bold">Projects</p>
      <div className="w-3/4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Et leo duis ut diam. Nec feugiat nisl pretium fusce id velit ut. Id diam maecenas ultricies mi eget mauris.
        </p>
      </div>
      <article>
        <ProjectList />
      </article>
    </section>
    <section id="hire-me" className="flex flex-col min-w-full max-w-screen items-center bg-white">
      <article className="mt-8">
        <ContactForm formTitle="I'm Here to Help" bgColor="white" />
      </article>
    </section>
    {/* Turn the title here into a prop */}
    <Testimonials bgColor="myPurple" textColor="text-white" sectionTitle="You'll Join a Great Group of Companies and People" />
  </>
);

export default Projects;
