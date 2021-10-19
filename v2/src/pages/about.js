/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from "react";
import SEO from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import ContactForm from "../components/contactForm";
import SocialList from "../components/socialList";

const H1 = ({ children }) => <p className="text-md md:text-xl lg:text-2xl xl:text-3xl py-10 font-bold">{children}</p>;
function AboutPage() {
  const svgSizes = { height: 35, width: 35, devHeight: 23, devWidth: 53 }
  const query = useStaticQuery(graphql`{
  golfing: file(relativePath: {eq: "me_and_wifey_golfing-min.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  wedding: file(relativePath: {eq: "me_and_wifey_wedding-min.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  working: file(relativePath: {eq: "what-i-do-min.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  fcc: file(relativePath: {eq: "fcc-min.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}
`);
  return (
    <section className="flex flex-col min-w-full max-w-screen items-center text-left">
      <SEO
        description="I'm a freelance web development consultant working with businesses and individuals from my home near San Antonio, Texas"
        lang="en"
        title="About Jonathan Sexton | Freelance Web Developer"
        keywords={["about jonathan sexton", "boerne web developer", "web developer", "web developer in boerne", "developer in boerne", "small business website", "small business", "how to build small business website", "small business consultant", "tile laying website", "freelance", "home", "jonathan sexton", "jonathan", "sexton", "development", "website"]} />
      <article className="about-containers bg-myPurple text-white p-6 sm:text-base md:text-lg lg:text-xl">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">Howdy! I&apos;m Jonathan Sexton</h1>
        <GatsbyImage
          image={query.golfing.childImageSharp.gatsbyImageData}
          className="aboutImg justify-self-center rounded-sm shadow-lg"
          alt="my wife and I on the golf course with black sunglasses on" />
        <H1>The Lowdown on yours truly...</H1>
        <div className="about-copy-containers">
          <p className="mb-4">
            I live in Texas and I&apos;ve been creating in one form or another since I began exploring the internet in the late
            90&apos;s.
          </p>
          <p className="mb-4">
            My fascination with technology started when my brothers and I received our first PC and modem as a gift in the early 90s. I
            remember exploring and learning about the early internet with its seemingly endless possibilities.
          </p>
          <p className="mb-4">
            Out of curiosity, I decided to teach myself to program/code as a hobby. It soon became an obsession - I couldn&apos;t get
            enough of it. Before teaching myself how to code, I worked in the sales industry where I have over a decade of customer
            support, service, and lead generation experience. Obession quickly turned into a profession when I decided to put that
            experience and knowledge to use for my clients.
          </p>
          <p className="mb-4">
            Fast forward and I&apos;m now a full time developer working on projects that I love, helping my clients with the projects I build, and still fascinated with technology.
          </p>
        </div>
      </article>
      <article className="about-containers bg-white p-6 sm:text-base md:text-lg lg:text-xl">
        <GatsbyImage
          image={query.working.childImageSharp.gatsbyImageData}
          className="aboutImg justify-self-center rounded-sm"
          alt="a computer with stickers on it" />
        <div className="about-copy-containers">
          <H1>What I Do</H1>
          <p className="mb-4">
            <span>I&apos;m a freelance web developer who specializes in working with small businesses</span> looking for a
            &quot;one-stop-shop&quot; for their website/web application solution.
          </p>
          <p className="mb-4">
            What exactly does that mean you ask? It means I can design, build, publish, and maintain your website, take care of the
            technical details involved in that, and provide a solution instead of a distraction for you so you can focus on running
            your business.
          </p>
          <p className="mb-4">
            I&apos;ve always been passionate about finding creative solutions to problems and I apply that to everything I do. My
            specialty is full website development from the ground up using semantic HTML, CSS, and JavaScript.
          </p>
          <p className="mb-4">
            If you have any questions about me or would like to talk, all my social media links can be found at the top and bottom of
            this page. I would love to connect with you!
          </p>
          {/* <em>(Side note - If you'd like to know what tech I use check out this <a href="/uses">page</a>)</em>. */}
          <p className="mb-4">
            I also enjoy writing and sharing the knowledge I have gained on my &nbsp;
            <a href="http://jonathansexton.me/blog" target="_blank" rel="noopener noreferrer">
              blog
            </a>
            .
          </p>
        </div>
      </article>
      <article className="about-containers bg-myPurple text-white p-6 sm:text-base md:text-lg lg:text-xl">
        <GatsbyImage
          image={query.wedding.childImageSharp.gatsbyImageData}
          className="aboutImg justify-self-center rounded-sm"
          alt="Jonathan kissing his wife at their wedding" />
        <H1>What I Love</H1>
        <div className="about-copy-containers">
          <p className="mb-4">
            <span>
              When I&apos;m not working I enjoy spending time with my <del>girlfriend</del> &nbsp;
              <del>fiance</del> wife, our <del>daughter</del> daughters
            </span>
            , and playing a few video games when I get the chance (rarely ever :D).{" "}
          </p>

          <p className="mb-4">
            I love wine, cooking, sports, technology, and the outdoors. If I&apos;m not building a project or fixing something around
            the house you&apos;ll likely find me outside on an adventure with the three most important people in my life.
          </p>
          <p>
            When the circumstances allow, we enjoy visiting parks around the state, going to the river, hiking, fishing, or just
            sitting around the fire sharing stories. Most summers you&apos;ll be hard pressed to find us indoors. If we are inside, you
            can bet we are playing a board game (read as: I&apos;m losing at that game) or playing something on the{" "}
            <a href="https://en.wikipedia.org/wiki/Nintendo_Switch" rel="noreferrer noopener">
              Nintendo Swtich
            </a>{" "}
            :)
          </p>
        </div>
      </article>
      <article className="about-containers bg-white p-6 sm:text-base md:text-lg lg:text-xl">
        <GatsbyImage
          image={query.fcc.childImageSharp.gatsbyImageData}
          className="aboutImg fcc"
          alt="Jonathan Sexton's free code camp profile" />
        <div className="about-copy-containers">
          <H1>Community Involvement</H1>
          <p className="mb-4">
            <span>I believe it&apos;s important to be active in the communities you love.</span>
          </p>
          <p className="mb-4">
            I write articles about programming/coding/technology as a way to give back to the{" "}
            <a href="https://www.freecodecamp.org/js-goose" target="__blank" rel="noopener noreferrer">
              freeCodeCamp
            </a>{" "}
            community. It&apos;s near and dear to my heart as I leaned on them heavily when I was learning to code.
          </p>
          <p className="mb-4">Below you will find some of my recent contributions:</p>
          <p className="mb-4">
            Here is my{" "}
            <a href="https://www.freecodecamp.org/js-goose" target="_blank" rel="noopener noreferrer">
              freeCodeCamp Profile
            </a>{" "}
            where you can see my learning journey and learn to code for yourself as well. I was a publication author{" "}
            <a href="https://www.freecodecamp.org/news/fcc100-top-contributors-2019/" target="_blank" rel="noopener noreferrer">
              Top Contributor for 2019
            </a>{" "}
            and{" "}
            <a href="https://www.freecodecamp.org/news/2020-top-contributors/" target="_blank" rel="noopener noreferrer">
              2020
            </a>{" "}
            as well.{" "}
          </p>
          <p className="mb-4">
            You can see all of my fCC articles on my{" "}
            <a href="https://www.freecodecamp.org/news/author/jonathan/" target="_blank" rel="noopener noreferrer">
              freeCodeCamp Author Profile
            </a>
          </p>
          <p className="mb-4">
            I also have an interview on the &nbsp;
            <a
              href="https://www.ifelsepodcast.com/episodes/remote-vs-on-site-with-guests-katie-womersley-emily-freeman"
              target="_blank"
              rel="noopener noreferrer"
            >
              If/Else Podcast
            </a>{" "}
            about choosing an in person or remote developer position.
          </p>
          <p className="mb-4">
            <i>
              If you have a podcast you&apos;d like me to be a guest on or are interested in me writing a guest article on your blog
              please use the form below to get in touch!{" "}
            </i>
          </p>
          <div className="h-20 p-2 items-center justify-around hidden sm:flex">
            <p className="text-myPurple font-bold sm:text-2xl lg:text-3xl xl:text-4xl">Let&apos;s be friends!</p>
            <ul className="about-social-list flex align-center">
              <SocialList
                svgClassName={"social-icons"}
                devIconStyling={"mt-2"}
                mediumFillColor={"#FFF"}
                liClassName={"mr-6"}
                svgSizes={svgSizes}
              />
            </ul>{" "}
          </div>
        </div>
      </article>
      <article
        className="form-parent-container p-6 flex flex-col items-center sm:text-base md:text-lg lg:text-xl"
        id="hire-me"
      >
        <ContactForm bgColor={`white`} />
      </article>
    </section>
  );
}

export default AboutPage;
