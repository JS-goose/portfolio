import React from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Image from 'gatsby-image';
// import BackgroundImage from 'gatsby-background-image';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  return (
    <div>
      <SEO
        keywords={[data.wordpressPost.categories.name]}
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <h1>{data.wordpressPost.title}</h1>
      {/* !This needs work as the images are not loading */}
        {/* <Image fluid={} /> */}
      <div>{data.wordpressPost.excerpt}</div>
      <div className='text-white'>
        Categories here:
        {data.wordpressPost.categories.map((category) => {
          return category.name;
        })}
      </div>
      <p>
        Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
      </p>
    </div>
  );
};

BlogPost.propTypes = {
  data: propTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      excerpt
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
      }
      author {
        name
      }
      tags {
        name
      }
    }
  }
`;
