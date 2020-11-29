import React from 'react';
import SEO from '../components/seo';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

function AboutPage() {
  const query = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me_in_dallas.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className='flex flex-col min-w-full max-w-screen items-center content-center'>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title='About' />
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <div>
          <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 mb-8'>Who I Am</h1>
          <p className='text-2xl mb-4'>
            Hello! I&apos;m Jonathan and I&apos;ve been creating in one form or another since I began exploring the
            internet in the late 90&apos;s.
          </p>

          <p>
            It all started when my brothers and I received our first PC and 56kb modem as a gift one year. As I explored
            and grew older, I started to realize the power and reach of the internet could be so much more than just
            chatting to people around the world (which was a blast!).
          </p>
        </div>

        <Image fluid={query.me.childImageSharp.fluid} className='me-in-dallas' />
      </article>
      <article className='about-containers bg-white p-4 flex flex-col sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>What I Love</h1>
        <p>
          When I&apos;m not working I enjoy spending time with my <del>girlfriend</del>
          <del>fiance</del> wife, our <del>daughter</del> daughters, and playing a few video games when I get the chance
          (rarely ever :D). I love wine, cooking, sports, technology, and the outdoors. If I&apos;m not building a
          project or fixing something around the house you&apos;ll likely find me outside on an adventure with the two
          most important people in my life.
        </p>
      </article>
      <article className='about-containers bg-white p-4 flex flex-col sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>What I Do</h1>
        <p>
          I&apos;m a freelance web developer who primarily works with small businesses to generate more leads, reach
          their customers, and increase revenue.
        </p>
        <p>
          I&apos;m passionate about designing, developing, and deploying easy to use and user friendly websites.
          I&apos;ve always been passionate about finding creative solutions to problems and I apply that to everything I
          do. My specialty is full website development from the ground up using semantic HTML, CSS, and JavaScript.
        </p>
        <p>
          If you have any questions about me or would like to talk, all my social media links can be found at the top
          and bottom of this page. I would love to connect with you! You can also swing by my blog and read some
          articles to see what I&apos;m up to.
        </p>
        <p>
          I love using technology to bring people together and sharing everything I&apos;ve learned. I even have a
          &nbsp;
          <a href='https://jonathansexton.me/blog' target='_blank' rel='noopener noreferrer'>
            blog
          </a>
          &nbsp; where I write articles and share resources.
        </p>
      </article>
      <article
        className='about-containers md:p-2 flex flex-col items-center sm:text-base md:text-lg lg:text-xl'
        id='hire-me'>
        <div className='about-form-container border border-1 p-12 rounded-sm shadow mb-8'>
          <h2 className='text-myRed sm:text-xs md:text-xl lg:text-2xl xl:text-4xl'>
            Let&apos;s get started on your project!
          </h2>
          <form name='contact' method='POST' data-netlify='true' netlify-honeypot='bots-say-what'>
            <p className='invisible'>
              <label htmlFor='bots-say-what'>
                Bots say what? <input type='text' name='bots-say-what' id='bots-say-what' />
              </label>
            </p>
            <legend className='invisible'>Information About You</legend>
            <fieldset>
              <p className='flex flex-col pb-4'>
                <label htmlFor='name'>What you like to be addressed as</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  aria-required
                  required
                  minLength='5'
                  maxLength='100'
                  className='border border-1 p-2 rounded-sm'
                  placeholder='First and Last (optional) Names'
                  aria-placeholder='First and Last (optional) Names'
                />
              </p>
              <p className='flex flex-col pb-4'>
                <label htmlFor='email'>Your Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  aria-required
                  required
                  minLength='5'
                  maxLength='100'
                  className='border border-1 p-2 rounded-sm'
                  placeholder='e.g. dave@gmail.com'
                  aria-placeholder='e.g. dave@gmail.com'
                />
              </p>
              <p className='flex flex-col pb-4'>
                <label htmlFor='message'>Message</label>
                <textarea
                  name='message'
                  id='message'
                  cols='50'
                  rows='2'
                  aria-required
                  required
                  maxLength='300'
                  className='border border-1 p-2 rounded-sm'
                  placeholder='Tell me about your project :)'
                  aria-placeholder='Tell me about your project :)'></textarea>
              </p>
            </fieldset>
            <button
              type='submit'
              className='flex border border-1 bg-white shadow-md text-lg p-4 rounded-sm transition duration-300 hover:underline hover:text-white hover:bg-gradient-to-r from-myPurple to-myRed'>
              <span className='pr-2'>Submit Request</span>{' '}
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='done_outline_24px'>
                  <path
                    id='icon/action/done_outline_24px'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.43005 13.44L19.77 2.1L24 6.33L8.43005 21.9L0 13.47L4.22998 9.24L8.43005 13.44ZM21.1699 6.33L19.7699 4.93L8.42993 16.27L4.22998 12.07L2.82996 13.47L8.42993 19.07L21.1699 6.33Z'
                    fill='white'
                    fillOpacity='0.54'
                  />
                </g>
              </svg>
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}

export default AboutPage;
