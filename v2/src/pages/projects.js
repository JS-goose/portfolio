import React from 'react';
import SEO from '../components/seo';
import ProjectList from '../components/projectList';

const Projects = () => (
  <section className="flex flex-col min-w-full max-w-screen items-center">
    <SEO keywords={[`freelance`, `about`, `jonathan`, `sexton`, `development`, `website`]} title='Projects' />
    <div>
      <ProjectList />
    </div>
  </section>
);

export default Projects;
