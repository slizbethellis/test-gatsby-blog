import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <a href="http://knitty.com/ISSUEdf18/PATTalfareria/PATTalfareria.php" target="_blank" rel="noopener noreferrer">
          <section className="hero hero-foo is-large is-dark">
            <div className="hero-head">
              <div className="container">
                <span></span>
              </div>
            </div>
            <div className="hero-body">
              <div className="container">
                <span></span>
              </div>
            </div>
            <div className="hero-foot">
              <div className="container has-text-centered">
                <p className="">
                  <span className="is-size-5 display-font">Alfarería</span>
                  <span> &bull; </span>
                  <span className="is-size-6">featured in <i>Knitty</i>, Deep Fall 2018</span>
                </p>
              </div>
            </div>
          </section>
        </a>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-3">Latest Blog Posts</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="box"
                  key={post.id}
                >
                <div className="columns is-multiline">
                  <div className="column is">
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        <span className="header-link">{post.frontmatter.title}</span>
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                    <br />
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="is-small read-more" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                  <div className="column is-narrow">
                    {post.frontmatter.image &&
                      <div
                        className="preview-image"
                        style={{ backgroundImage: `url(${post.frontmatter.image})` }}
                      />
                    }
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    site: PropTypes.object
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(
      limit: 5,
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
            image
          }
        }
      }
    }
  }
`
