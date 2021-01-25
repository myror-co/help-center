module.exports = {
  siteMetadata: {
    title: `Myror Help Center`,
    author: `Thomas Cosialls`,
    // You'd normally use a description like
    // "Advice and answers by the MyCompany-Team"
    description: `Find answers to your questions and discover Myror features!`,
    siteUrl: `https://help.myror.co/`,
    language: "en",
    texts: {
      allCollectionsText: "All Collections",
      searchPlaceholderText: "Search for answers…",
      lastModifiedText: "Last edited",
      publishedOnText: "Published on",
      writtenByText: "Written by",
      articlesInCollectionZeroText: "articles in this collection",
      articlesInCollectionOneText: "article in this collection",
      articlesInCollectionTwoText: "articles in this collection",
      articlesInCollectionMultipleText: "articles in this collection",
    },
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsYaml`,
    "MarkdownRemark.frontmatter.collection": `CollectionsYaml`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '255d78bb-2b92-44bf-9056-b2108ef1f4c2',
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-H3BRCJRZSN", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          send_page_view: true
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `mappings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Myror Help Center`,
        short_name: `Myror`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#250F2B`,
        display: `minimal-ui`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
