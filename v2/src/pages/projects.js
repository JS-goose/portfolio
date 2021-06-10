import React from 'react';
import SEO from '../components/seo';
import ProjectList from '../components/projectList';
import Testimonials from '../components/testimonials';
import ContactForm from '../components/contactForm'

const Projects = () => (
  <>
    <section className="flex flex-col min-w-full max-w-screen items-center">
      <SEO keywords={[`freelance`, `about`, `jonathan`, `sexton`, `development`, `website`]} title='Projects' />
      <article>
        <ProjectList />
      </article>
    </section>
    <section id="hire-me" className="flex flex-col min-w-full max-w-screen items-center bg-white">
      <article className="mt-8">
        <ContactForm formTitle="I'm Here to Help" bgColor='white' />
      </article>
    </section>
    {/* Turn the title here into a prop */}
    <Testimonials bgColor='myPurple' textColor='text-white' sectionTitle="You'll Join a Great Group of Companies and People"/>
  </>
);

export default Projects;
