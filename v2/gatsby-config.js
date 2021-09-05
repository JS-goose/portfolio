const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Jonathan Sexton | Freelance Web Developer`,
    description: `A Gatsby website for a freelance web developer specializing in establishing & extending the web presence of small businesses`,
    author: `@JS-goose`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Roboto', 'Kumbh Sans', 'Rubik'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        // theme_color: fullConfig.theme.colors.teal['400'],
        display: `minimal-ui`,
        icon: `src/images/icons/logoPNG.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-sitemap`,
    // ! *** This was commented out because the plugins need to be updated *** ! //
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     url: 'https://jonathansexton.me/blog',
    //     protocol: 'https',
    //     hostingWPCOM: false,
    //     useACF: false,
    //     acfOptionPageIds: [],
    //     verboseOutput: false,
    //     perPage: 100,
    //     searchAndReplaceContentUrls: {
    //       sourceUrl: 'https://www.jonathansexton.me/blog',
    //       replacementUrl: 'https://localhost:8000',
    //     },
    //     concurrentRequests: 10,
    //     includedRoutes: ['**/categories', '**/posts', '**/pages', '**/media', '**/tags', '**/taxonomies', '**/users'],
    //     excludedRoutes: [],
    //     normalizer: function ({ entities }) {
    //       return entities;
    //     },
    //   },
    // },
  ],
};
