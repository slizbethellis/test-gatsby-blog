import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout location={this.props.location}>
        <Helmet title={`Blog | ${data.site.siteMetadata.title}`} />
        <section className="section">
          <div className="columns is-multiline is-centered">
            <div className="column is-10">
              <h1 className="has-text-weight-bold is-size-2">Blog Posts</h1>
            </div>
            <div className="column is-three-quarters">
              {posts
                .map(({ node: post }) => (
                  <div
                    className="box"
                    key={post.id}
                  >
                    <div className="columns is-multiline">
                      <div className="column">
                        <p>
                          <Link className="has-text-primary" to={post.fields.slug}>
                            <span className="header-link">{post.frontmatter.title}</span>
                          </Link>
                          <span> &bull; </span>
                          <small>{post.frontmatter.date}</small>
                        </p>
                        <p>
                          <br />
                          <span>{post.excerpt}</span>
                          <br />
                          <br />
                          <Link className="is-small read-more" to={post.fields.slug}>
                            Keep Reading →
                          </Link>
                        </p>
                      </div>
                      <div className="column is-narrow is-1-mobile">
                        {post.frontmatter.image &&
                          <Img fixed={post.frontmatter.image.childImageSharp.fixed} alt={post.frontmatter.altText} />
                        }
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="column is-one-quarter">
              <Sidebar />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    site: PropTypes.object
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            altText
          }
        }
      }
    }
  }
`