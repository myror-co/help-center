module.exports = {
  siteMetadata: {
    title: `Myror Help Center`,
    author: `Thomas Cosialls`,
    // You'd normally use a description like
    // "Advice and answers by the MyCompany-Team"
    description: `Welcome to Myror Help Center`,
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
    "gatsby-plugin-simple-analytics",
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
