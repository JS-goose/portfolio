/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from "react";
import SEO from "../components/seo";
import ProjectList from "../components/projectList";
import Testimonials from "../components/testimonials";
import ContactForm from "../components/contactForm";

const Projects = () => (
  <>
    <section className="projects-section-container flex flex-col min-w-full max-w-screen items-center text-white">
      <SEO keywords={[`freelance`, `about`, `jonathan`, `sexton`, `development`, `website`]} title="Projects" />
      <article className="projects-list-container">
        <ProjectList />
      </article>
    </section>
    <section id="hire-me" className="flex flex-col min-w-full max-w-screen items-center bg-white">
      <article className="mt-8">
        <ContactForm bgColor={"white"} />
      </article>
    </section>
    <Testimonials bgColor="myPurple" textColor="text-white" sectionTitle="You'll Join a Group of Great Companies and People" />
  </>
);

export default Projects;
