import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

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
    <section className="cta bg-white w-full flex mt-10 md:mt-16 lg:mt-32 justify-center rounded-sm shadow-2xl">
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
          <p className="mt-4"> Let’s launch your project together!</p>
          <div>
            <a href="https://localhost" className="cta-buttons pr-48" target="_blank" rel="noopener noreferrer">
              Hire Me For Your Project
            </a>
            <a href="https://localhost" className="cta-buttons" target="_blank" rel="noopener noreferrer">
              See My Services
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CallToAction;
