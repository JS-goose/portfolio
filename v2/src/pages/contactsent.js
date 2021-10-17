/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from 'react';
import SEO from '../components/seo';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
                description="Your email was successfully sent to me - I respond to all contact for freelance web consulting within 24 hours"
                lang="en"
                title="Contact Sent"
                keywords={[
                    `contact sent`
                ]}
            />
            <article className="h-full p-6 sm:text-base md:text-lg lg:text-xl flex flex-col justify-evenly">
                <h1 className="pb-2 sm:pb-4 md:pb-6 lg:pb-10 md:pt-6 lg:pt-6 sm:text-2xl lg:text-3xl xl:text-4xl">Thank you!</h1>
                <p className="pb-2 sm:pb-4 md:pb-6 lg:pb-8  sm:text-base md:text-lg lg:text-xl">Your email has been sent.  I respond to all contact within 24 hours, so keep an eye on your inbox!</p>
                <div className="flex justify-center">
                    <button type="button" className="shadow-lg bg-myDarkRed p-2 rounded transform hover:scale-105 transition-all duration-700 ease-in-out hover:underline hover:bg-myRed">
                        <Link to="/">Take Me Home</Link>
                    </button>
                </div>
                <img src={query.email.publicURL} alt="a person leaning against a huge envelop with a green checkmark on it" />
            </article>
        </section>
    )
}

