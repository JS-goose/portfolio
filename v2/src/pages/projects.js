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
      <SEO 
      description="I help businesses and people see increased traffic, customers, and revenue with their projects.  Hire me today and let's make your project a success!"
      lang="en"
      title="Client Project I Have Worked On | Jonathan Sexton"
      keywords={["jonathan sexton projects","boerne web developer", "web developer", "web developer in boerne", "developer in boerne", "small business website", "small business", "how to build small business website", "small business consultant", "tile laying website", "freelance", "home", "jonathan sexton", "jonathan", "sexton", "development", "website"]} 
       />
      <article className="projects-list-container p-2 md:p-4 lg:p-6 sm:text-base md:text-lg lg:text-xl">
        <ProjectList />
      </article>
    </section>
    <section id="hire-me" className="flex flex-col min-w-full max-w-screen items-center bg-white">
      <article className="mt-8 ml-8 md:ml-0">
        <ContactForm bgColor={"white"} />
      </article>
    </section>
    <Testimonials bgColor="myPurple" textColor="text-white" sectionTitle="You'll Join a Group of Great Companies and People" />
  </>
);

export default Projects;
