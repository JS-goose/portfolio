const path = require('path');
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve(`src/components/blog-post.js`);
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            wordpress_id
          }
        }
      }
    }
  `);
  const BlogPosts = result.data.allWordpressPost.edges;
  BlogPosts.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: BlogPostTemplate,
      context: {
        title: edge.node.title,
        id: edge.node.wordpress_id,
      },
    });
  });
};
