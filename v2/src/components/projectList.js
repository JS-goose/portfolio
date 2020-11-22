import React from 'react';
import ProjectItem from './projectItem';
// import projectItem from './projectItem';

const projects = [
  {
    companyName: `Annuity Market Pro`,
    image: ``,
    link: `https://www.annuitymarketpro.com/`,
    key: Math.random(),
    problem: `This customer had no online presence and needed a way to bring services to customers in an engaging way`,
    results: `Created a web presence that is functional, easy to use, and responsive while helping client extend their reach to customers.`,
  },
  {
    companyName: `Northern Ontario First Nations Environment Conference`,
    image: ``,
    link: `https://nofnec2020.netlify.com/`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    companyName: `Wawakapewin First Nation`,
    image: ``,
    link: `https://wawakapewin.netlify.app/`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    companyName: `Tracy's Upholstery`,
    image: ``,
    link: `https://tracys-upholstery.com`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    companyName: `React Todo List`,
    image: ``,
    link: `https://github.com`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    companyName: `Arcade Game Replica`,
    image: ``,
    link: `https://github.com`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    companyName: `Matching Game`,
    image: ``,
    link: `https://github.com`,
    key: Math.random(),
    techSpecs: [],
  },
  {
    companyName: `RGB Color Guessing Game`,
    image: ``,
    link: `https://github.com`,
    key: Math.random(),
    techSpecs: [],
  },
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
