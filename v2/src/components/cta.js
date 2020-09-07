import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const CallToAction = () => {
  const query = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me also-min.png" }) {
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
    <section className="bg-white h-full w-full flex rounded-sm">
      <article className="p-3">
        <Image fluid={query.me.childImageSharp.fluid} className="h-72 w-64" />
      </article>
      <article>
        <div className="flex">
          <h4 className="text-2xl">Hi, I{`'`}m Jonathan</h4>
          <Image fluid={query.hand.childImageSharp.fluid} className="h-8 w-8" />
        </div>
        <p>
          I{`'`}m a freelance developer who specializes in helping people and businesses expand
          their online presence, reach more customers, and broaden their audience! If you’re looking
          for a developer to get your business website designed, built, and published for the world
          to see then you’ve come to the right place my friend. Let’s launch your project together!
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Hire Me For Your Project
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          See My Services
        </a>
      </article>
    </section>
  );
};

export default CallToAction;
