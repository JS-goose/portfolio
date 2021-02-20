import React from 'react';
import SEO from '../components/seo';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import ContactForm from '../components/contactForm';
import SocialList from '../components/socialList';

const H1 = ({ children }) => <h1 className='sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{children}</h1>;

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
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <div className='about-copy-containers'>
          <H1>Who I Am</H1>
          <p className='text-2xl mb-4'>
            Hello! I&apos;m Jonathan and I&apos;ve been creating in one form or another since I began exploring the
            internet in the late 90&apos;s.
          </p>

          <p>
            My fascination with technology started when my brothers and I received our first PC and modem as a Christmas
            gift one year. We explored and learned about the early internet with its seemingly endless possibilities.
          </p>
          <p>
            As I explored the open web and got older, I realized the power and reach of the internet could be so much
            more than just chatting with people around the world (which was a blast in and of itself!). The internet
            could be used to connect and help people.
          </p>
          <p>
            In college I moved through several majors/minors, with a brief stint in web design, but never found anything
            I loved. After graduation I spend the next years in customer service/support and some retail. It wasn&apos;t
            until I found myself with an enormous amount of free time on my hands that I decided to teach myself how to
            code. I had some experience playing around with the styling on MySpace (dating myself here) but no formal
            training in the field.
          </p>
          <p>
            I found that the internet was a wealth of information and instruction - all I needed to do was start digging
            in. I started with resources like{' '}
            <a href='https://freecodecamp.org' rel='noopener noreferrer'>
              freeCodeCamp
            </a>{' '}
            and couldn&apos;t help myself from there. I consumed knowledge left and right. Fast forward and I&apos;m now
            a full time developer working on projects that excite me, fascinate me, and still give me that same sense of
            wonder I got the first time I saw one of my programs run.
          </p>
        </div>
        <Image
          fluid={query.golfing.childImageSharp.fluid}
          className='aboutImg aboutImg-odd w-full h-auto'
          alt='my wife and I on the golf course with black sunglasses on'
        />
      </article>
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <Image fluid={query.working.childImageSharp.fluid} className='aboutImg aboutImg-even w-full h-auto' />
        <div className='about-copy-containers'>
          <H1>What I Do</H1>
          <p>
            I&apos;m a freelance web developer who primarily works with small businesses to generate more leads, reach
            their customers, and increase revenue.
          </p>
          <p>
            I&apos;m passionate about designing, developing, and deploying easy to use and user friendly websites.
            I&apos;ve always been passionate about finding creative solutions to problems and I apply that to everything
            I do. My specialty is full website development from the ground up using semantic HTML, CSS, and JavaScript.
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
        </div>
      </article>
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <div className='about-copy-containers'>
          <H1>What I Love</H1>
          <p>
            When I&apos;m not working I enjoy spending time with my <del>girlfriend</del> &nbsp;
            <del>fiance</del> wife, our <del>daughter</del> daughters, and playing a few video games when I get the
            chance (rarely ever :D). I love wine, cooking, sports, technology, and the outdoors. If I&apos;m not
            building a project or fixing something around the house you&apos;ll likely find me outside on an adventure
            with the three most important people in my life.
          </p>
        </div>
        <Image fluid={query.wedding.childImageSharp.fluid} className='aboutImg aboutImg-even w-full h-auto' />
      </article>
      <article className='about-containers bg-white p-4 flex sm:leading-8 sm:text-base md:text-lg lg:text-xl'>
        <Image fluid={query.fcc.childImageSharp.fluid} className='aboutImg aboutImg-odd w-full h-auto' />
        <div className='about-copy-containers'>
          <H1>Community Involvement</H1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <a
            href='https://www.ifelsepodcast.com/episodes/remote-vs-on-site-with-guests-katie-womersley-emily-freeman'
            rel='noopener noreferrer'>
            If/Else Podcast
          </a>
          <ul className="about-social-list">
              <SocialList svgClassName={'social-icons'} mediumFillColor={'#FFF'} liClassName={'social-list-items'} />
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
