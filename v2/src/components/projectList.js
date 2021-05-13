import React from 'react';
import ProjectItem from './projectItem';
// import projectItem from './projectItem';

const projects = [
  {
    projectName: `Annuity Market Pro`,
    image: ``,
    link: `https://www.annuitymarketpro.com/`,
    key: Math.random(),
    problem: `This customer had no online presence and needed a way to bring services to customers in an engaging way`,
    results: `Created a web presence that is functional, easy to use, and responsive while helping client extend their reach to customers.`,
  },
  {
    projectName: `Northern Ontario First Nations Environment Conference`,
    image: ``,
    link: `https://nofnec2020.netlify.com/`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    projectName: `Wawakapewin First Nation`,
    image: ``,
    link: `https://wawakapewin.netlify.app/`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    projectName: `Tracy's Upholstery`,
    image: ``,
    link: `https://tracys-upholstery.com`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    projectName: `Luna Repair`,
    image: ``,
    link: `https://netlify.lunarepair.com`,
    key: Math.random(),
    techSpecs: [],
  }
];

const ProjectList = () => {
  return (
    <ul>
      {projects.map((item) => {
        return (
          <li key={item?.key}>
            <ProjectItem key={item?.key} projects={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
