import React from 'react';
import SEO from '../components/seo';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ContactForm from '../components/contactForm';
import SocialList from '../components/socialList';
import AnchorLink from '../components/anchorLink';

const H1 = ({ children }) => <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-6'>{children}</h1>;

function AboutPage() {
  const query = useStaticQuery(graphql`
    query {
      golfing: file(relativePath: { eq: "me_and_wifey_golfing-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      wedding: file(relativePath: { eq: "me_and_wifey_wedding-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      working: file(relativePath: { eq: "me_working-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fcc: file(relativePath: { eq: "fcc-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className='flex flex-col min-w-full max-w-screen items-center'>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title='About' />
      <article className='about-containers bg-white p-6 sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <div className='about-copy-containers'>
          <H1>The Lowdown on yours truly...</H1>
          <p className='text-2xl mb-4'>
            Howdy! I&apos;m Jonathan. I live in Texas and I&apos;ve been creating in one form or another since I began
            exploring the internet in the late 90&apos;s.
          </p>

          <p className='mb-4'>
            My fascination with technology started when my brothers and I received our first PC and modem as a Christmas
            gift in 1998. I remember exploring and learning about the early internet with its seemingly endless
            possibilities.
          </p>
          <p className='mb-4'>
            Out of curiosity, I decided to teach myself to program/code as a hobby.  It soon became an obsession - I couldn&apos;t get enough of it.
            Before teaching myself how to code, I worked in the sales industry where I have over a decade of customer support, service, and lead generation experience.
            Obession quickly turned into a profession when I decided to put that experience and knowledge to use for myself and my clients.
          </p>
          <p className='mb-4'>
            Fast forward almost 5 years and I&apos;m now
            a full time developer working on projects that excite me, fascinate me, and still give me that same sense of
            wonder I got the first time I saw one of my programs run.
          </p>
        </div>
        <Image
          fluid={query.golfing.childImageSharp.fluid}
          className='aboutImg rounded-md shadow-lg border-2 border-solid border-gray-100'
          alt='my wife and I on the golf course with black sunglasses on'
        />
      </article>
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <Image
          fluid={query.working.childImageSharp.fluid}
          className='aboutImg rounded-md shadow-lg border-2 border-solid border-gray-100'
        />
        <div className='about-copy-containers'>
          <H1>What I Do</H1>
          <p className="text-2xl mb-4">
            I&apos;m a freelance web developer who specializes in working with small businesses looking for a &quot;one-stop-shop&quot; for their website/web application solution.
          </p>
          <p className="mb-4">What exactly does that mean you ask?  It means I can design, build, publish, and maintain your website, take care of the technical details involved in that, and provide
            a solution instead of a distraction for you so you can focus on running your business.</p>
          <p className="mb-4">
            I&apos;ve always been passionate about finding creative solutions to problems and I apply that to everything
            I do. My specialty is full website development from the ground up using semantic HTML, CSS, and JavaScript.
          </p>
          <p className="mb-4">
            If you have any questions about me or would like to talk, all my social media links can be found at the top
            and bottom of this page. I would love to connect with you!
          </p>
          <p className="mb-4">
            I also enjoy writing and sharing the knowledge I have gained on my
            &nbsp;
            <AnchorLink linkAddress={'https://jonathansexton.me/blog'} addressText={'blog'} />.
          </p>
        </div>
      </article>
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <div className='about-copy-containers'>
          <H1>What I Love</H1>
          <p className="text-2xl mb-4">
            When I&apos;m not working I enjoy spending time with my <del>girlfriend</del> &nbsp;
            <del>fiance</del> wife, our <del>daughter</del> daughters, and playing a few video games when I get the
            chance (rarely ever :D). </p>

          <p className="mb-4">I love wine, cooking, sports, technology, and the outdoors. If I&apos;m not
          building a project or fixing something around the house you&apos;ll likely find me outside on an adventure
          with the three most important people in my life.
          </p>
          <p>When the circumstances allow, we enjoy visiting parks around the state, going to the river, hiking, fishing, or just sitting
          around the fire sharing stories. Most summers you&apos;ll be hard pressed to find us indoors.  If we are inside, you can bet
          we are playing a board game (read as: I&apos;m losing that board game) or messing around on the <a href="https://en.wikipedia.org/wiki/Nintendo_Switch" rel="noreferrer noopener">Swtich</a> :)
          </p>
        </div>
        <Image
          fluid={query.wedding.childImageSharp.fluid}
          className='aboutImg rounded-md shadow-lg border-2 border-solid border-gray-100'
        />
      </article>
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <Image
          fluid={query.fcc.childImageSharp.fluid}
          className='aboutImg rounded-md shadow-lg border-2 border-solid border-gray-100'
        />
        <div className='about-copy-containers'>
          <H1>Community Involvement</H1>
          <p className="text-2xl mb-4">
            I believe it&apos;s important to be a memeber of the community (virtual and physical) you love.
          </p>

          <p className="mb-4">
            To that end, I try to be active in the online learning community and the self led learning community as that is how I learned to code.</p>
          <ul className="mt-4">
            <li className="mb-4">
              ***This section needs a rework***
              I write articles about programming/coding/technology as a way to give back to the <a href="https://www.freecodecamp.org/js-goose" rel="noopener noreferrer">freeCodeCamp</a> community.
              It&apos;s near and dear to my heart as I leaned on them heavily when I was learning to code.

            </li>
            <li><a href="https://www.freecodecamp.org/news/fcc100-top-contributors-2019/">Top Contributor for 2019</a></li>
            <li><a href="https://www.freecodecamp.org/news/2020-top-contributors/">Top Contributor for 2019</a></li>
            <li><a href="https://www.freecodecamp.org/news/author/jonathan/">Top Contributor for 2019</a></li>
            <li className="mb-4">
              Here&apos; my interview on the <a
                href='https://www.ifelsepodcast.com/episodes/remote-vs-on-site-with-guests-katie-womersley-emily-freeman'
                rel='noopener noreferrer'>
                If/Else Podcast
              </a> about choosing an in person or remote developer position
              </li>
            <li>My DM&apos; are open on all social media platforms where I try to answer any questions I can</li>
          </ul>
          <p className="mb-4 font-bold">
            Connect with me!
          </p>
          <ul className='about-social-list flex align-center mt-4'>
            <SocialList svgClassName={'social-icons'} devIconStyling={'mt-2'} mediumFillColor={'#FFF'} liClassName={'social-list-items mr-6'} />
          </ul>{' '}
        </div>
      </article>
      <article
        className='form-parent-container bg-white p-4 flex flex-col items-center sm:text-base md:text-lg lg:text-xl'
        id='hire-me'>
        <ContactForm formTitle={`I'm available for hire!`} bgColor={`myPurple`} />
      </article>
    </section>
  );
}

export default AboutPage;
