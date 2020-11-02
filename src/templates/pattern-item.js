import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import SimpleReactLightbox from 'simple-react-lightbox'
import { Markdown } from 'grommet'

import Layout from '../components/Layout'
import ColumnGallery from '../components/ColumnGallery'

export const PatternItemTemplate = ({
  content,
  frontmatter,
  images,
  title,
  helmet
}) => {
  const details = frontmatter

  return (
    <SimpleReactLightbox>
      <section className="section">
        {helmet || ''}
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="is-size-2 has-text-weight-bold">
              {title}
            </h1>
            <div className="columns">
              <div className="column is-5">
                {/* Gallery grid of pattern photos goes here */}
                <ColumnGallery photos={images} />
                <h2 className="has-text-centered lightbox-instructions top-padding is-5">
                  (click or tap to enlarge thumbnails)
                </h2>
              </div>
              <div className="column is-7">
                <table className="table is-fullwidth">
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
                      <td>{details.yarn.map((yar, index) =>(<span key={index}>{yar}{index !== (details.yarn.length - 1) && ', '}</span> ))}</td>
                    </tr>
                    <tr>
                      <th>Yarn Weight</th>
                      <td>{details.yarnWeight.map((yar, index) =>(<span key={index}>{yar}{index !== (details.yarnWeight.length - 1) && ', '}</span> ))}</td>
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
                {/* I'm leaving Ravelry stuff commented out until they do more to fix their accessibility issues.
                <article class="message is-primary">
                  <div class="message-body">
                    The Ravelry button links to the classic look version of the pattern page, but this workaround won't help if you're not logged in. It pains me to have to say this, but if you have any medical conditions triggered by visual stimuli (i.e. epilepsy and migraine) and don't know if the Ravelry redesign causes problems for you, DO NOT click any Ravelry links. The pattern button next to it is still safe.
                  </div>
                </article> */}
                <div className="buttons is-centered">
                  <a className="button pattern-btn is-rounded is-primary"
                  href={details.patternSource.link}
                  target="_blank"
                  rel="noopener noreferrer">
                    Pattern ({details.patternSource.price})
                  </a>
                  {/* Ravelry's redesign has some major accessibility issues, and the string added to the following href is a temporary workaround to link to the old look. I'm leaving Ravelry stuff commented out for now. */}
                  {/* <a className="button is-rounded is-success"
                  href={details.ravelryLink + "?newlook=0"}
                  target="_blank"
                  rel="noopener noreferrer">
                    <FontAwesomeIcon className="pattern-btn" icon={['fab', 'ravelry']} />
                    Ravelry
                  </a> */}
                </div>
                <Markdown
                  components={{
                    "p": {
                      "props": {"fill": true}
                    }
                  }}
                >
                  {content}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SimpleReactLightbox>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.node,
  frontmatter: PropTypes.object,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const PatternItem = ({ data }) => {
  const { markdownRemark: post } = data
  const photos = post.frontmatter.pictures

  const images = photos.map(photo => ({
    src: photo.patternPhoto.photo.childImageSharp.fluid.src,
    fluid: photo.patternPhoto.photo.childImageSharp.fluid,
    width: photo.patternPhoto.width,
    height: photo.patternPhoto.height,
    caption: photo.patternPhoto.caption,
    alt: photo.patternPhoto.altText
  }))

  return (
    <Layout location={post.fields.slug}>
      <PatternItemTemplate
        content={post.rawMarkdownBody}
        frontmatter={post.frontmatter}
        helmet={<Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />}
        images={images}
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
      fields {
        slug
      }
      html
      rawMarkdownBody
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
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            altText
            caption
            width
            height
          }
        }
      }
    }
  }
`