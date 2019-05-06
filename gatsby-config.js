module.exports = {
  siteMetadata: {
    title: `Wow a title`,
    description: `Wow a description`,
    author: `@lucasjohnston, the og`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-flow',
    'gatsby-plugin-eslint',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#6D6D6E`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'lucasjohnston',
        short_name: 'lucasjohnston',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#6D6D6E',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
