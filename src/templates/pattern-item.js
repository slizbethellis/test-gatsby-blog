import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PatternItemTemplate = ({
  content,
  contentComponent,
  frontmatter,
  mainImage,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const details = frontmatter

  return (
    <section className="section">
      {helmet || ''}
      <div className="columns is-centered">
        <div className="column is-10">
          <h1 className="is-size-2 has-text-weight-bold">
            {title}
          </h1>
          <div className="columns">
            <div className="column is-5">
              {mainImage}
            </div>
            <div className="column is-7">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Published in</th>
                    <td>{details.originalPub}</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>{details.itemType}</td>
                  </tr>
                  <tr>
                    <th>Published</th>
                    <td>{details.published}</td>
                  </tr>
                  <tr>
                    <th>Yarn(s)</th>
                    <td>{details.yarn.map((yar, index) =>(<span>{yar}{index !== (details.yarn.length - 1) && ', '}</span> ))}</td>
                  </tr>
                  <tr>
                    <th>Yarn Weight</th>
                    <td>{details.yarnWeight.map((yar, index) =>(<span>{yar}{index !== (details.yarnWeight.length - 1) && ', '}</span> ))}</td>
                  </tr>
                  <tr>
                    <th>Gauge</th>
                    <td>{details.gauge}</td>
                  </tr>
                  <tr>
                    <th>Needles</th>
                    <td>{details.needles}</td>
                  </tr>
                  <tr>
                    <th>Sizes</th>
                    <td>{details.sizes}</td>
                  </tr>
                </tbody>
              </table>
              <div className="buttons are-medium is-centered">
                <a className="button is-rounded is-primary"
                href={details.patternSource.link}
                target="_blank"
                rel="noopener noreferrer">
                  Pattern ({details.patternSource.price})
                </a>
                <a className="button is-rounded is-success"
                href={details.ravelryLink}
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon className="pattern-btn" icon={['fab', 'ravelry']} />
                  Ravelry
                </a>
              </div>
              <PostContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
}

const PatternItem = ({ data }) => {
  const { markdownRemark: post } = data
  const pic = post.frontmatter.pictures[0].patternPhoto

  return (
    <Layout>
      <PatternItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        frontmatter={post.frontmatter}
        helmet={<Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />}
        mainImage={<Img fluid={pic.photo.childImageSharp.fluid} alt={pic.altText}/>}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

PatternItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PatternItem

export const pattQuery = graphql`
  query PattItemByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    },
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        published(formatString: "MMMM YYYY")
        title
        originalPub
        itemType
        yarn
        yarnWeight
        gauge
        needles
        sizes
        ravelryLink
        patternSource {
          link
          price
        }
        pictures {
          patternPhoto {
            photo {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
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