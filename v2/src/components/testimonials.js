import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const Testimonials = () => {
  const testimonials = [
    {
      name: `Stu Finn`,
      company: `Borealis Web Development`,
      title: `Owner/Developer`,
      comment: `"I have hired Jonathan for multiple Borealis Web Development projects and it is always a pleasure working with him.  Jonathan is easygoing, incredibly helpful, and is an excellent developer."`,
      website: `https://borealisweb.ca`,
    },
    {
      name: `Tracy Johnson`,
      company: `Tracy's Upholstery`,
      title: `Owner`,
      comment: `"Jonathan helped my business see increased growth and revenue with the website he built - I will gladly work with him again on future projects."`,
      website: `https://https://www.tracys-upholstery.com/`,
    },
    {
      name: `Michael Masor`,
      company: `Annuity Market Pro`,
      title: `CEO/Founder`,
      comment: `"Knowledgeable, independent, fair, and trustworthy - working with Jonathan was nothing but a phenomenal experience!"`,
      website: `https://www.annuitymarketpro.com/`,
    },
    {
      name: `Caleb Helton`,
      company: `Long State Breaks`,
      title: `Owner/Founder`,
      comment: `"Jonathan was able to identify pain points with our previous website and then address those issues with the website he built. He's my go-to for any future projects."`,
    },
    {
      name: `Keith Olson`,
      company: `Conduit PC Shop`,
      title: `Owner`,
      comment: `"I came to Jonathan with only a vision. He worked with me every step of the way through frequent communication and brought that vision to life. I'm very happy with the results."`,
    },
    // {name: `Steve Flannery`, company: `Steve's PC Shop`, comment: `Testimonial here`, website: `https://www.localcomputer.expert/`},
  ];

  const query = useStaticQuery(graphql`{
  stu: file(relativePath: {eq: "Stu.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 250
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  tracy: file(relativePath: {eq: "tracy-min.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 250
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  mike: file(relativePath: {eq: "mike-min.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 250
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  caleb: file(relativePath: {eq: "caleb-min.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 250
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  keith: file(relativePath: {eq: "keith.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        width: 250
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
}
`);

  return (
    <section className='bg-white w-full flex items-center justify-center'>
      <article className='testimonials-container w-full items-center p-12 md:gap-4'>
        <div className='testimonials-container-1 sm:text-sm md:text-base lg:text-lg sm:mb-10 md:mb-8 lg:mb-0'>
          <h3 className='text-myPurple font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            Here Are Just A Few of the Great Companies & People I&apos;ve Helped
          </h3>
          <p className='pt-4 sm:text-base md:text-xl'>
            If you have a project or an idea, I&apos;d love to work with you to bring it to life. My passon is helping
            people and small businesses get up and running with a fast, reliable, customer focused website.
          </p>
          <p className='pt-4 sm:text-base md:text-xl'>Let me put that passion to work for you.</p>
          <div className='testimonials-container-link-container transform hover:scale-105 transition-all duration-700 ease-in-out mt-6'>
            <a
              href='#hire-me'
              className='shadow-lg pt-3 pl-4 pr-4 pb-2 rounded-sm sm:text-base md:text-xl text-lg shadow text-white hover:underline bg-myRed hover:bg-myDarkRed'>
              Get Started Today!
            </a>
          </div>
        </div>
        <div className='testimonials-container-2'>
          {testimonials.map((card, index) => (
            <div
              key={index}
              data-key={index + 1}
              className='customer-testimonial-container flex sm:p-2 md:p-4 lg:p-6 items-center md:justify-center lg:justify-around max-w-2xl sm:text-sm md:text-base'>
                {/* //! Need to set the alt for each of these !// */}
              <GatsbyImage
                image={index + 1 === 1
                  ? query.stu.childImageSharp.gatsbyImageData
                  : index + 1 === 2
                    ? query.tracy.childImageSharp.gatsbyImageData
                    : index + 1 === 3
                      ? query.mike.childImageSharp.gatsbyImageData
                      : index + 1 === 4
                        ? query.caleb.childImageSharp.gatsbyImageData
                        : index + 1 === 5
                          ? query.keith.childImageSharp.gatsbyImageData
                          : ''}
                className='testimonials-images rounded-sm shadow-lg border-2 border-solid border-black-100' 
                alt=''/>
              <div className='pl-4 sm:text-lg md:text-xl'>
                <h4 className='lg:text-2xl text-myPurple font-bold'>{card.name}</h4>
                <p className='text-myBlack hidden md:inline'>{card.title} - </p>
                <p className='text-myBlack hidden md:inline'>{card.company}</p>
                <p className='sm:max-w-full md:max-w-sm lg:max-w-lg italic'>{card.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
