import React from 'react';
import propTypes from 'prop-types';
// import Image from 'gatsby-image';
// import BackgroundImage from 'gatsby-background-image';

const ProjectItem = (props) => {
  return (
    <article className='text-white border border-2 h-full w-full p-2'>
      {props.projects.projectName} - {props.projects.link}
    </article>
  );
};

ProjectItem.propTypes = {
  projects: propTypes.object.isRequired,
};

export default ProjectItem;
