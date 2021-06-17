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
    problem: `Michael had no online presence and needed a way to bring services to his customers in an engaging way. He also needed a way for his customers to schedule meetings with him.`,
    results: `The website (while still in progress) is functional, easy to use, and responsive and presents visitors with the information they're looking for right up front.`,
    number: 4,
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
          gatsbyImageData(quality: 100, width: 1000, height: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      nofnec: file(relativePath: { eq: "projects/nofnec.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 1000, height: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      tracy: file(relativePath: { eq: "projects/tracy.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 1000, height: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      wawakpewin: file(relativePath: { eq: "projects/wawakpewin.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 1000, height: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);
  return (
    <>
      {projects.map((item) => {
        return (
          <div className="text-white flex flex-col md:my-8" key={item?.key}>
            <p className="py-10 sm:text-xl lg:text-2xl xl:text-3xl text-lg font-bold underline">{item.projectName}</p>
            <GatsbyImage
              className="project-image rounded-sm shadow-xl mb-8"
              image={
                item.number === 1
                  ? query.nofnec.childImageSharp.gatsbyImageData
                  : item.number === 2
                  ? query.wawakpewin.childImageSharp.gatsbyImageData
                  : item.number === 3
                  ? query.tracy.childImageSharp.gatsbyImageData
                  : item.number === 4
                  ? query.annuity.childImageSharp.gatsbyImageData
                  : ""
              }
              alt={item.imgAlt}
            />
            <div className="flex mb-8">
              <div className="flex flex-col">
                <p className="pb-4">
                  <span className="text-xl bold">The problem:</span>
                </p>
                <p>{item.problem}</p>
              </div>
              <div className="flex flex-col">
                <p className="pb-4">
                  <span className="text-xl bold">The solution:</span>
                </p>
                <p>{item.results}</p>
              </div>
            </div>
            <p>
              <a
                href={item.link}
                class="inline-block transform hover:translate-x-3 transition-all duration-700 ease-in-out text-xl hover:underline hover:bg-myRed"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the live website <span className="text-3xl">&#8594;</span>
              </a>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
