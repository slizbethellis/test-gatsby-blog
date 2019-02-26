import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

export default class PatternPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <Layout>
        <Helmet title={`Patterns | ${data.site.siteMetadata.title}`} />
        <section className="section">
          <div className="columns is-centered">
            <div className="column is-10">
              <h1 className="has-text-weight-bold is-size-2">
                Patterns
              </h1>
            </div>
          </div>
          <div className="columns is-multiline">
            {posts
              .map(({ node: post }) => (
                <div className="column is-one-quarter" key={post.id}>
                  <div className="card">
                    <Link to={post.fields.slug}>
                      <div className="card-image">
                        <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} />
                      </div>
                    </Link>
                    <div className="card-content has-text-centered">
                      <Link className="title is-6" to={post.fields.slug}>
                        <span className="header-link search-link">{post.frontmatter.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

PatternPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    site: PropTypes.object
  }),
}

export const PageQuery = graphql`
  query PatternPage {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "pattern-item" } }}
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
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`