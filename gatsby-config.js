module.exports = {
  siteMetadata: {
    title: 'Haloroundmyhead Knits',
    description: `Blog and pattern portfolio for knitting designer Sarah Ellis`,
    siteUrl: `https://festive-lovelace-f360ad.netlify.com/`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cousine', 'Rubik', 'Prompt:600,600i,800,800i']
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [
          'title',
          'path',
          'tags'
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            path: node => node.fields.slug,
            tags: node => node.frontmatter.tags
          },
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
