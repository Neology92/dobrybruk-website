module.exports = {
  siteMetadata: {
    title: `DobryBruk | Kostka Brukowa Iwona Legner`,
    description: `W naszym asortymencie: kostka brukowa, płyty tarasowe, kruszywa, dodatki ogrodowe, elementy małej architektury i inne. Wstąp do nas, a pokochasz wakacje we własnym ogrodzie.`,
    author: `@neology`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`, // Allows to use absolute path

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        diplayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-stylelint`,
      options: { files: ['**/*.js'] },
    },

    //
    //   resolve: `gatsby-plugin-manifest`,
    //   options:
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   ,
    // ,
    // this optional plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};