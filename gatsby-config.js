module.exports = {
  siteMetadata: {
    title: `lucas johnston`,
    description: `lucas johnston is the 19 year old founder of umber.`,
    author: `@lucasjohnston`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`
  ],
}
