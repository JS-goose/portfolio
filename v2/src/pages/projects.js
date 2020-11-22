import React from 'react';
import SEO from '../components/seo';
import ProjectList from '../components/projectList';

const Projects = () => (
  <>
    <SEO keywords={[`freelance`, `about`, `jonathan`, `sexton`, `development`, `website`]} title='Projects' />
    <div>
      <ProjectList />
    </div>
  </>
);

export default Projects;
