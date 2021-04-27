import React from "react";
import SEO from "../components/seo";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import ContactForm from "../components/contactForm";
import SocialList from "../components/socialList";
import AnchorLink from "../components/anchorLink";

const H1 = ({ children }) => <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl py-6">{children}</h1>;

function AboutPage() {
  const query = useStaticQuery(graphql`
    query {
      golfing: file(relativePath: { eq: "me_and_wifey_golfing-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      wedding: file(relativePath: { eq: "me_and_wifey_wedding-min.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      working: file(relativePath: { eq: "what-i-do-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fcc: file(relativePath: { eq: "fcc-min.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className="flex flex-col min-w-full max-w-screen items-center">
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="About" />
      <article className="about-containers bg-white p-6 sm:text-base md:text-lg lg:text-xl">
        <p class="mb-4">Howdy! I&apos;m Jonathan Sexton.</p>
        <Image
          fluid={query.golfing.childImageSharp.fluid}
          className="aboutImg justify-self-center rounded-sm shadow-lg border-2 border-solid border-gray-100"
          alt="my wife and I on the golf course with black sunglasses on"
        />
        <H1>The Lowdown on yours truly...</H1>
        <div className="about-copy-containers mt-4">
          <p className="mb-4">
            I live in Texas and I&apos;ve been creating in one form or another since I began exploring the internet in the late
            90&apos;s.
          </p>
          <p className="mb-4">
            My fascination with technology started when my brothers and I received our first PC and modem as a gift in the early 90s.
            I remember exploring and learning about the early internet with its seemingly endless possibilities.
          </p>
          <p className="mb-4">
            Out of curiosity, I decided to teach myself to program/code as a hobby. It soon became an obsession - I couldn&apos;t get
            enough of it. Before teaching myself how to code, I worked in the sales industry where I have over a decade of customer
            support, service, and lead generation experience. Obession quickly turned into a profession when I decided to put that
            experience and knowledge to use for my clients.
          </p>
          <p className="mb-4">
            Fast forward and I&apos;m now a full time developer working on projects that excite me, fascinate me, and
            still give me that same sense of wonder I got the first time I saw one of my programs run.
          </p>
        </div>
      </article>
      <article className="about-containers bg-white p-4 sm:text-base md:text-lg lg:text-xl">
        <Image fluid={query.working.childImageSharp.fluid} className="aboutImg justify-self-center rounded-sm" />
        <H1>What I Do</H1>
        <p className="mb-4">
          <span>I&apos;m a freelance web developer who specializes in working with small businesses</span> looking for a
          &quot;one-stop-shop&quot; for their website/web application solution.
        </p>
        <div className="about-copy-containers">
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
          <p className="mb-4">
            I also enjoy writing and sharing the knowledge I have gained on my &nbsp;
            <a href="http://jonathansexton.me.blog" target="_blank" rel="noopener noreferrer">
              slam
            </a>
            .
          </p>
        </div>
      </article>
      <article className="about-containers bg-white p-4 sm:text-base md:text-lg lg:text-xl">
        <Image
          fluid={query.wedding.childImageSharp.fluid}
          className="transform rotate-3 aboutImg rounded-sm shadow-lg border-2 border-solid border-gray-100"
        />
        <div className="about-copy-containers">
          <H1>What I Love</H1>
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
            can bet we are playing a board game (read as: I&apos;m losing that board game) or messing around on the{" "}
            <a href="https://en.wikipedia.org/wiki/Nintendo_Switch" rel="noreferrer noopener">
              Swtich
            </a>{" "}
            :)
          </p>
        </div>
      </article>
      <article className="about-containers bg-white p-4 sm:text-base md:text-lg lg:text-xl">
        <Image
          fluid={query.fcc.childImageSharp.fluid}
          className="transform -rotate-2 aboutImg rounded-sm shadow-lg border-2 border-solid border-gray-100"
        />
        <div className="about-copy-containers">
          <H1>Community Involvement</H1>
          <p className="mb-4">
            <span>I believe it&apos;s important to be active in the community</span> (virtual and physical) you love.
          </p>
          <p className="mb-4">
            I write articles about programming/coding/technology as a way to give back to the{" "}
            <a href="https://www.freecodecamp.org/js-goose" rel="noopener noreferrer">
              freeCodeCamp
            </a>{" "}
            community. It&apos;s near and dear to my heart as I leaned on them heavily when I was learning to code.
          </p>
          <p className="mb-4">Below you will find some of my recent contributions:</p>
          <p className="mb-4">
            - Here is my{" "}
            <AnchorLink
              linkAddress={"https://www.freecodecamp.org/js-goose"}
              styling={{ height: "before:w-56", beforeBgColor: "before:bg-myPurple" }}
              addressText={"freeCodeCamp Profile"}
            />{" "}
            where you can see my learning journey.
          </p>
          <p className="mb-4">
            - I was a publication author{" "}
            <AnchorLink
              linkAddress={"https://www.freecodecamp.org/news/fcc100-top-contributors-2019/"}
              styling={{ height: "before:w-60", beforeBgColor: "before:bg-myPurple" }}
              addressText={"Top Contributor for 2019"}
            />
            .
          </p>
          <p className="mb-4">
            - I was a publication author{" "}
            <AnchorLink
              linkAddress={"https://www.freecodecamp.org/news/2020-top-contributors/"}
              styling={{ height: "before:w-60", beforeBgColor: "before:bg-myPurple" }}
              addressText={"Top Contributor for 2020"}
            />{" "}
            as well.
          </p>
          <p className="mb-4">
            - You can see all of my fCC articles on my{" "}
            <AnchorLink
              linkAddress={"https://www.freecodecamp.org/news/author/jonathan/"}
              styling={{ height: "before:w-72", beforeBgColor: "before:bg-myPurple" }}
              addressText={"freeCodeCamp Writer Profile"}
            />
          </p>
          <p className="mb-4">
            Here&apos; my interview on the &nbsp;
            <AnchorLink
              linkAddress={"https://www.ifelsepodcast.com/episodes/remote-vs-on-site-with-guests-katie-womersley-emily-freeman"}
              styling={{ height: "before:w-36", beforeBgColor: "before:bg-myPurple" }}
              addressText={"If/Else Podcast"}
            />{" "}
            about choosing an in person or remote developer position
          </p>
          <p className="mb-4">
            <i>If you have a podcast you&apos;d like me to be a guest on use the form below to get in touch! </i>
          </p>
          <p className="mb-4 font-bold">Connect with me!</p>
          <ul className="about-social-list flex align-center mt-4">
            <SocialList
              svgClassName={"social-icons"}
              devIconStyling={"mt-2"}
              mediumFillColor={"#FFF"}
              liClassName={"social-list-items mr-6"}
            />
          </ul>{" "}
        </div>
      </article>
      <article
        className="form-parent-container bg-white p-4 flex flex-col items-center sm:text-base md:text-lg lg:text-xl"
        id="hire-me"
      >
        <ContactForm formTitle={`I'm available for hire!`} bgColor={`myPurple`} />
      </article>
    </section>
  );
}

export default AboutPage;
