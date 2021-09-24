/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from 'react';
import SEO from '../components/seo';
import { graphql, useStaticQuery, Link } from 'gatsby';

export default function ContactError() {
    const query = useStaticQuery(graphql`{
        email: file(relativePath: {eq: "contact_error.svg"}) {
            extension
            publicURL
        }
    }`)
    return (
        <section className="flex flex-col min-w-full max-w-screen items-center text-white h-screen">
            <SEO
                description="The page displayed to a user after an error in sending an email to Jonathan Sexton"
                lang="en"
                title="Contact Error"
                keywords={[
                    `error`
                ]}
            />
            <article className="h-full p-6 sm:text-base md:text-lg lg:text-xl flex flex-col justify-evenly">
                <h1 className="pb-2 sm:pb-4 md:pb-6 lg:pb-10 md:pt-6 lg:pt-6 sm:text-2xl lg:text-3xl xl:text-4xl">Oh no!</h1>
                <p className="pb-2 sm:pb-4 md:pb-6 lg:pb-8  sm:text-base md:text-lg lg:text-xl">There was an error and your email was not sent, please try again or send an email to me directly: hello@jonathansexton.me</p>
                <div className="flex justify-center">
                    <button type="button" className="shadow-lg bg-myDarkRed p-2 rounded transform hover:scale-105 transition-all duration-700 ease-in-out hover:underline hover:bg-myRed">
                        <Link to="/">Take Me Home</Link>
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src={query.email.publicURL} className="w-10/12 h-10/12" alt="a person holding a flag, wearing a hard hat, standing in front of some rocks" />
                </div>
            </article>
        </section>
    )
}

