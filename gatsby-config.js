module.exports = {
  siteMetadata: {
    author: 'Diogenes Teufelsdröckh',
    description: 'Transcendentalist musings on the future of robots',
    siteUrl: 'https://knightjdr.github.io/gatsby-starter-scientist',
    title: 'Teufelsdröckh laboratory',
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete all array items, except for the 'Dummy',
    // to disable footer links.
    links: [
      { text: 'GitHub', link: 'https://github.com/knightjdr' },
      { text: 'Google Scholar', link: 'https://scholar.google.ca/citations?user=M6Y_Y5cAAAAJ' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/james-knight-174996156' },
      { text: 'Dummy', link: '' }, // Do not remove.
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-scientist',
        short_name: 'scientist',
        start_url: '/',
        background_color: '#3d8183',
        theme_color: '#3d8183',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
};
