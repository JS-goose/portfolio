import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Borealis = () => <small>* I worked as part of the <a href="http://borealisweb.ca" className="underline hover:bg-myRed" target="_blank" rel="noopener noreferrer">Borealis Web Development</a> team to build this website.</small>
const Tracy = () => <small>* Tracy was the first freelance client I ever had and I&apos;m happy to report she&apos;s now a repeat customer after hiring me for a website redesign! </small>

const projects = [
  {
    projectName: `Northern Ontario First Nations Environment Conference`,
    link: `https://www.nofnec.ca/`,
    imgAlt: ``,
    key: Math.random(),
    problem: `The Northern Ontario First Nations Environment Conference was in need of a website redesign that was easy to use, bright, and most of all engaging to users. With their previous solution, visitors were getting frustrated by not being able to find the information they needed quickly`,
    results: `The new website brings usability, a spiffy new design (all while being responsive), and presents the most important information upfront to visitors without sacrificing on performance. With the new website, users find as much or as little information as they want while being directed towards the sign up section.`,
    number: 1,
  },
  {
    projectName: `Wawakapewin First Nation`,
    link: `https://wawakapewin.netlify.app/`,
    imgAlt: ``,
    key: Math.random(),
    problem: `The Wawakapewin are a First Nation community and wanted a website refresh - one that would provide members with a community hub of resources.  Their previous website was showing it's age and limitations around speed and performance.`,
    results: `The new website (while still under development) is blazingly fast giving users the content they're looking for in no time!  It also has general information about the community, contact information, governance information, news, and links to members services/programs.`,
    number: 2,
  },
  {
    projectName: `Tracy's Upholstery`,
    link: `https://tracys-upholstery.com`,
    imgAlt: ``,
    key: Math.random(),
    problem: `Tracy had operated for years mostly by word of mouth advertisement but wanted a better way to get her services in front of her customers. She needed a website to showcase images of her work and some information about her business.`,
    results: `I built a simple, but effective, website for Tracy that has an image gallery, an overview of her services, and contact information. With that, she increased her customer conversion rate and revenue by almost 20% over 6 months! `,
    number: 3,
  },
  {
    projectName: `Annuity Market Pro`,
    link: `https://annuitymarketpro.netlify.app/`,
    imgAlt: `a website showing two empty chairs on the beach`,
    key: Math.random(),
    problem: `Michael had no online presence and needed a way to bring the services he offers in person to virtual users in an engaging way. He also needed a way for his customers to get relevant information about the legalities of their financial choices.`,
    results: `The website (while still in progress) is functional, easy to use, and responsive. Visitors get information about services, location, supplemental financial information, and contact info in an easy to use format. `,
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
      tracyupholstery: file(relativePath: { eq: "projects/tracyupholstery.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 1000, height: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      wawakpewin: file(relativePath: { eq: "projects/wawakpewin.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 1000, height: 600, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      rightArrow: file(relativePath: { eq: "icons/right_arrow.svg"}) {
        extension
        publicURL
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
                      ? query.tracyupholstery.childImageSharp.gatsbyImageData
                      : item.number === 4
                        ? query.annuity.childImageSharp.gatsbyImageData
                        : ""
              }
              alt={item.imgAlt}
            />
            <div className="flex mb-8">
              <div className="flex flex-1 flex-col pr-1">
                <p className="pb-4">
                  <span className="text-xl bold underline">The problem:</span>
                </p>
                <p>{item.problem}</p>
              </div>
              <div className="flex flex-1 flex-col pl-1">
                <p className="pb-4">
                  <span className="text-xl bold underline">The solution:</span>
                </p>
                <p>{item.results}</p>
                <p className="pt-4">{item.number === 1 || item.number === 2 ? <Borealis /> : null}</p>
                <p className="pt-4">{item.number === 3 ? <Tracy /> : null}</p>
              </div>
            </div>
            <p>
              <a
                href={item.link}
                className="inline-block transform hover:translate-x-3 transition-all duration-700 ease-in-out text-xl hover:underline hover:bg-myRed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex">See the live website <img src={query.rightArrow.publicURL} alt="a right arrow" /></span>
              </a>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
