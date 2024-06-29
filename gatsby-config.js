module.exports = {
  siteMetadata: {
    title: 'Haloroundmyhead Knits',
    description: `Blog and pattern portfolio for knitting designer Sarah Ellis`,
    siteUrl: `https://festive-lovelace-f360ad.netlify.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(
                sort: {frontmatter: {date: DESC}}
                filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Haloroundmyhead Knits",
          },
        ],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          //charset: "latin",
          //tokenize: "strict",
          resolution: 3,
          minlength: 3,
          //fastupdate: true,
          optimize: !1, //fastupdate: true,
          context: {
            depth: 2, resolution: 1
            //bidirectional: false
          }
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMarkdownRemark (filter: {frontmatter: {templateKey: {ne: "about-page"}}}) {
              nodes {
                id
                excerpt(format: PLAIN, pruneLength: 400)
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                  templateKey
                  description
                  itemType
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'tags', 'excerpt', 'description', 'itemType'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'slug', 'title', 'tags', 'templateKey', 'itemType'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            excerpt: node.excerpt,
            title: node.frontmatter.title,
            tags: node.frontmatter.tags,
            templateKey: node.frontmatter.templateKey,
            description: node.frontmatter.description,
            itemType: node.frontmatter.itemType,
            slug: node.fields.slug,
          })),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1152,
              backgroundColor: 'transparent', // required to display blurred image first
              withWebp: 'true', // to serve images in WebP format where supported
              wrapperStyle: 'width: 90%; margin: 0 5%;',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haloroundmyhead Knits`,
        short_name: `HaloKnits`,
        description: `Blog and pattern portfolio for knitting designer Sarah Ellis`,
        start_url: `/`,
        background_color: `#111b1f`,
        theme_color: `#253435`,
        display: `minimal-ui`,
        icon: `static/img/yarnballcat-icon.svg`, 
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/img*']
         }
      }
    },
    {
      resolve: 'gatsby-plugin-decap-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}