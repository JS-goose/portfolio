import React from "react";
import SEO from "../components/seo";
import ProjectList from "../components/projectList";
import Testimonials from "../components/testimonials";
import ContactForm from "../components/contactForm";

const Projects = () => (
  <>
    <section className="projects-section-container flex flex-col min-w-full max-w-screen items-center text-white">
      <SEO keywords={[`freelance`, `about`, `jonathan`, `sexton`, `development`, `website`]} title="Projects" />
      {/* <p className="sm:text-2xl lg:text-3xl xl:text-4xl font-bold">Projects</p> */}
      {/* <div className="w-3/4">
        <p>
          This was left in because I might want to add something here in the future
        </p>
      </div> */}
      <article className="projects-list-container">
        <ProjectList />
      </article>
    </section>
    <section id="hire-me" className="flex flex-col min-w-full max-w-screen items-center bg-white">
      <article className="mt-8">
        <ContactForm formTitle="Let's get started today!" bgColor="white" />
      </article>
    </section>
    {/* Turn the title here into a prop */}
    <Testimonials bgColor="myPurple" textColor="text-white" sectionTitle="You'll Join a Great Group of Companies and People" />
  </>
);

export default Projects;
