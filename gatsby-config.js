require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Codezia Starter`,
    description: `Kick off your next, great Gatsby project with this default starter.`,
    author: '',
    siteUrl: `https://codezia.dev/`,
    image: `/gatsby-icon.png`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-no-index`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        lang: 'de',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
       precachePages: [`/`],
      }
    },
  ],
}
