import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const projects = [
  {
    projectName: `Northern Ontario First Nations Environment Conference`,
    link: `https://www.nofnec.ca/`,
    imgAlt: ``,
    key: Math.random(),
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Et leo duis ut diam. Nec feugiat nisl pretium fusce id velit ut. Id diam maecenas ultricies mi eget mauris.`,
    results: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Et leo duis ut diam. Nec feugiat nisl pretium fusce id velit ut. Id diam maecenas ultricies mi eget mauris.`,
    number: 1,
  },
  {
    projectName: `Wawakapewin First Nation`,
    link: `https://wawakapewin.netlify.app/`,
    imgAlt: ``,
    key: Math.random(),
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Et leo duis ut diam. Nec feugiat nisl pretium fusce id velit ut. Id diam maecenas ultricies mi eget mauris.`,
    results: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Et leo duis ut diam. Nec feugiat nisl pretium fusce id velit ut. Id diam maecenas ultricies mi eget mauris.`,
    number: 2,
  },
  {
    projectName: `Tracy's Upholstery`,
    link: `https://tracys-upholstery.com`,
    imgAlt: ``,
    key: Math.random(),
    problem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Et leo duis ut diam. Nec feugiat nisl pretium fusce id velit ut. Id diam maecenas ultricies mi eget mauris.`,
    results: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Et leo duis ut diam. Nec feugiat nisl pretium fusce id velit ut. Id diam maecenas ultricies mi eget mauris.`,
    number: 3,
  },
  {
    projectName: `Annuity Market Pro`,
    link: `https://annuitymarketpro.netlify.app/`,
    imgAlt: `a website showing two empty chairs on the beach`,
    key: Math.random(),
    problem: `This customer had no online presence and needed a way to bring services to customers in an engaging way`,
    results: `Created a web presence that is functional, easy to use, and responsive while helping client extend their reach to customers.`,
    number: 4
  },
  // {
  //   projectName: `Luna Repair`,
  //   link: `https://netlify.lunarepair.com`,
  //  imgAlt: ``,
  //   key: Math.random(),
  //   number: 5,
  // }
];

const ProjectList = () => {
  const query = useStaticQuery(graphql`
    query {
      annuity: file(relativePath: { eq: "projects/annuity.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100, 
            width: 800, 
            placeholder: BLURRED, 
            formats: [AUTO, WEBP]
            )
        }
      }
      nofnec: file(relativePath: { eq: "projects/nofnec.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100, 
            width: 800, 
            placeholder: BLURRED, 
            formats: [AUTO, WEBP]
            )
        }
      }
      tracy: file(relativePath: { eq: "projects/tracy.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100, 
            width: 800, 
            placeholder: BLURRED, 
            formats: [AUTO, WEBP]
            )
        }
      }
      wawakpewin: file(relativePath: { eq: "projects/wawakpewin.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100, 
            width: 800, 
            placeholder: BLURRED, 
            formats: [AUTO, WEBP]
            )
        }
      }
    }
  `);
  return (
    <>
      {projects.map((item) => {
        return (
          <div className="text-white flex flex-auto mx-3 my-10 items-center" key={item?.key}>
            <div className="max-w-2xl">
            <p className="sm:text-xl lg:text-2xl xl:text-3xl text-lg font-bold">{item.projectName}</p>
            <img src="../images/icons/ExternalWebsite.svg" alt="" />
            <p>The problem: {item.problem}</p>
            <p>The solution: {item.results}</p>
            </div>
            <GatsbyImage className="rounded-sm flex-1" image={item.number === 1 ? query.nofnec.childImageSharp.gatsbyImageData : 
            item.number === 2 ? query.wawakpewin.childImageSharp.gatsbyImageData :
            item.number === 3 ? query.tracy.childImageSharp.gatsbyImageData : 
            item.number === 4 ? query.annuity.childImageSharp.gatsbyImageData : ''} alt={item.imgAlt} />
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
