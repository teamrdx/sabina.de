module.exports = {
  flags: {
    FUNCTIONS: true,
  },
  siteMetadata: {
    siteUrl: "https://www.sabinalama.de",
    title: "Sabina Lama | Nursing consultant",
    description: "Nursing in Germany",
    author: "Sabina Lama",
    keywords: [
      "Nursing","Registration","Nepal"
    ],
  },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: "UC1pjc7hSw7qWuHj_hng3CxQ",
        apiKey: "AIzaSyDfiMrCXbLaqSeWttq_QUVs4r-40VjfyAY",
        maxVideos: 50, // Defaults to 50
      },
    },
  ],
};
