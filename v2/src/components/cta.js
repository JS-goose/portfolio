import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import checkmark from "../images/icons/check.svg";
import scroll from "../images/icons/scroll.svg";

const CallToAction = () => {
  const query = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      hand: file(relativePath: { eq: "waving hand.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className="cta bg-white w-full flex mt-10 md:mt-16 lg:mt-32 justify-center rounded shadow-2xl">
      <article className="p-4">
        <Image fluid={query.me.childImageSharp.fluid} className="h-72 w-64" />
      </article>
      <span className="border border-right border-myRed inline-block mt-6 mb-8 ml-1 mr-4" />
      <article className="p-3">
        <div className="flex flex-row justify-center">
          <h4 className="text-2xl">Hi, I&apos;m Jonathan</h4>
          <Image fluid={query.hand.childImageSharp.fluid} className="h-8 w-8 ml-2" />
        </div>
        <div className="flex flex-col w-full h-full mt-2">
          <p className="mt-4">
            I&apos;m a freelance developer who specializes in helping people and businesses expand their online
            presence, reach more customers, and broaden their audience!
          </p>
          <p className="mt-4">
            If you’re looking for a developer to get your business website designed, built, and published for the world
            to see then you’ve come to the right place my friend.
          </p>
          <h4 className="mt-4 font-bold"> Let’s launch your project together!</h4>
          <div className="flex mt-10 text-white w-full">
            <span className="flex bg-myPurple p-2 rounded cta-buttons text-lg border-2 border-transparent hover:underline transform hover:scale-105">
              <a
                href="https://jonathan135406.typeform.com/to/LNZI5h"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center font-semibold">
                Hire Me For Your Project
                <img src={checkmark} alt="" className="pl-2" />
              </a>
            </span>
            <span className="ml-48 bg-white p-2 rounded cta-buttons text-lg border-2 border-myRed hover:underline hover:border-white hover:border-8 text-myRed">
              <a
                href="https://localhost"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center font-semibold">
                See My Services
                <img src={scroll} alt="" className="pl-2" />
              </a>
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CallToAction;
