import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
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
                <span className="is-size-5 display-font">Diamond Kite</span>
                <span> &bull; </span>
                <span className="is-size-6">pattern coming soon!</span>
              </p>
            </div>
          </div>
        </section>
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
                  <article className="media">
                    <figure className="media-content">
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
                    </figure>
                    <figure className="media-right">
                      {post.frontmatter.image &&
                        <div
                          className="preview-image"
                          style={{ backgroundImage: `url(${post.frontmatter.image})` }}
                        />
                      }
                    </figure>
                  </article>
                </div>
              ))}
          </div>
        </section>
      </div>
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
