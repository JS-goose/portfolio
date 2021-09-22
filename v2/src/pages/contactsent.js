/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from 'react';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';

export default function ContactSent() {
    const query = useStaticQuery(graphql`{
        email: file(relativePath: {eq: "message_sent.svg"}) {
            extension
            publicURL
        }
    }`)
    return (
       <section className="flex flex-col min-w-full max-w-screen items-center text-white h-screen">
            <SEO
            keywords={[
                `boerne web developer`,
                `web developer`,
                `web developer in boerne, tx`,
                `small business website`,
                `freelance developer`,
                `build website for tile laying`,
                `freelance web developer`,
                `jonathan`,
                `jonathan sexton`,
                `consulting`,
            ]}
            title="Consulting"
        />
        <article className="h-full p-6 sm:text-base md:text-lg lg:text-xl flex flex-col justify-evenly">
            <h1 className="md:pb-6 lg:pb-10 md:pt-6 lg:pt-6 sm:text-2xl lg:text-3xl xl:text-4xl">Thank you!</h1>
            <p className="pb-6 sm:text-base md:text-lg lg:text-xl">Your email has been sent.  I respond to all contact within 24 hours, so keep an eye on your inbox!</p>
            <img src={query.email.publicURL} alt="a person leaning against a huge envelop with a green checkmark on it" />
        </article>
       </section>
    )
}

