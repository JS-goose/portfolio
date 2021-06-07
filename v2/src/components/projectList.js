import React from 'react';


const projects = [
  {
    projectName: `Annuity Market Pro`,
    image: ``,
    link: `https://annuitymarketpro.netlify.app/`,
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
          <div className="shadow-xl text-white" key={item?.key}>
            <p>{item.projectName}</p>
            <p>{item.link}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default ProjectList;
