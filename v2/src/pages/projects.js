import React from 'react';
import SEO from '../components/seo';
import ProjectList from '../components/projectList'

const Projects = () => (
  <>
    <SEO
      keywords={[
        `freelance`,
        `about`,
        `jonathan`,
        `sexton`,
        `development`,
        `website`,
      ]}
      title="Projects"
    />
    <div>Hello from projects page!
      <ProjectList />
    </div>
  </>
);

export default Projects;
