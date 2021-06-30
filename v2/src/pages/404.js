import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from '../components/seo';


function NotFoundPage() {
  const query = useStaticQuery(graphql`{
    lost: file(relativePath: { eq: "Lost404.svg"}) {
      extension
      publicURL
    }
  }`
  )
  return (
    <section className="flex flex-col min-w-full max-w-screen h-full items-center text-left text-white">
      <SEO
        keywords={["boerne web developer", "small business website", "tile laying website", "freelance", "home", "jonathan", "sexton", "development", "website", "small business"]}
        title="404: Not found" />
      <div className="max-w-5xl">
        <h2 className="sm:text-2xl lg:text-3xl xl:text-4xl font-bold inline-block my-8 p-3">
          Oh no!  It looks like this page didn&apos;t make the cut :(
        </h2>
        {/* Image courtesy of https://undraw.co */}
        <img src={query.lost.publicURL} alt="three blobs lost in the bushes" />

        <p>Let me help guide you back to the right path :)</p>
        <a href="https://jonathansexton.me" target="_blank" rel="noopener noreferrer">Take me home</a>
      </div>
    </section>
  );
}

export default NotFoundPage;
