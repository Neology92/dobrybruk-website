module.exports = {
  siteMetadata: {
    title: `DobryBruk.pl | Kostka Brukowa IWONA LEGNER`,
    description: `W naszym asortymencie: kostka brukowa, płyty tarasowe, kruszywa, dodatki ogrodowe, elementy małej architektury i inne. Wstąp do nas, a pokochasz wakacje we własnym ogrodzie.`,
    author: `@neology`,
    keywords: `kostka brukowa, kostka brukowa semmelrock, płyty tarasowe, kostka brukowa oleśnica, kostka brukowa wrocław, oleśnica kostka brukowa, wrocław kostka brukowa, namysłów kostka brukowa, kostka brukowa namysłów, syców kostka brukowa, kostka brukowa syców, kostka brukowa wrocław sprzedaż, kostka brukowa wrocław cena, kostka brukowa wrocław semmelrock, kostka brukowa olesnica semmelrock`,
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
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DobryBruk.pl | Kostka Brukowa IWONA LEGNER`,
        short_name: `DobryBruk`,
        start_url: `/`,
        background_color: `#005526`,
        theme_color: `#005526`,
        display: `minimal-ui`,
        icon: `src/assets/images/logoGreen.png`, // This path is relative to the root of the site.
      },
    },
    // this optional plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

