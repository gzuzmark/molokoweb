"use strict"

const siteConfig = require("./config.js")

module.exports = {
  siteMetadata: {
    title: `Moloko website`,
    description: `Moloko podcast `,
    author: `@gzuzmark @renvrant`,
  },
  plugins: [
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          // This entry template will switch the page template based on
          // a frontmatter value provided in the CMS, allowing users to
          // choose different template layouts.
          default: require.resolve(
            `./src/page-templates/cms-entry.template.js`
          ),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`, // for custom preview in the Netlify CMS
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: "/",
        background_color: "#000c1d",
        theme_color: "#001122",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
