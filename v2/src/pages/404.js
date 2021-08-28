import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
      <div className="max-w-5xl flex flex-col items-center">
        <h2 className="sm:text-2xl lg:text-3xl xl:text-4xl font-bold inline-block my-8 p-3">
          Nothing to see here - not even the page you&apos;re looking for :(
        </h2>
        <div className="my-6">
          <p className="pb-6 sm:text-base md:text-lg lg:text-xl">Let&apos;s get you back on track!
          </p>
        </div>
        <div className="mb-8">
          <Link to="/" className='bg-myRed p-2 rounded-sm mb-4 transform hover:scale-105 transition-all duration-700 ease-in-out sm:w-full sm:text-sm md:text-base xl:text-lg hover:underline hover:bg-myDarkRed'>Take me home</Link>

        </div>          {/* Image courtesy of https://undraw.co */}
        <img src={query.lost.publicURL} alt="three blobs lost in the bushes" />

      </div>
    </section>
  );
}

export default NotFoundPage;
