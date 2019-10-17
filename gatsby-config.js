module.exports = {
  siteMetadata: {
    title: `Electoraid`,
    description: `Everything you need to boost your local election coverage.`,
    author: `Chicago Reporter`,
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
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`],
        // language file path
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-2350659-1", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          send_pageview: false,
        },
        pluginConfig: {
          // We'll dispatch our own prefixed pageviews
          exclude: ["/*"],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `electoraid`,
        short_name: `electoraid`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
