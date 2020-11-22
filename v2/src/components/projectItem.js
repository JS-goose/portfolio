import React from 'react';
import propTypes from 'prop-types';
// import Image from 'gatsby-image';
// import BackgroundImage from 'gatsby-background-image';

const ProjectItem = (props) => {
  return <div>{props.projects.companyName}</div>;
};

ProjectItem.propTypes = {
  projects: propTypes.object.isRequired,
};

export default ProjectItem;
