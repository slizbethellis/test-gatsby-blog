// @jsx glam
// eslint-disable-next-line
import glam from 'glam'
import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PatternItemTemplate = ({
  content,
  contentComponent,
  frontmatter,
  firstImage,
  images,
  slicedImages,
  title,
  helmet
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const PostContent = contentComponent || Content
  const details = frontmatter

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index+1);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section className="section">
      {helmet || ''}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}
            allowFullscreen={true}
            closeOnBackdropClick={true}
            className="is-overlay"
            styles={{
              blanket: base => ({
                ...base,
                zIndex: 40,
              }),
              positioner: base => ({
                ...base,
                zIndex: 40,
              }),
            }}
          >
            <Carousel
              currentIndex={currentImage}
              views={images}
              styles={{
              footerCaption: base => ({
                ...base,
                fontFamily: 'Montserrat',
              }),
              footerCount: base => ({
                ...base,
                fontFamily: 'Montserrat',
              }),
            }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div className="columns is-centered">
        <div className="column is-10">
          <h1 className="is-size-2 has-text-weight-bold">
            {title}
          </h1>
          <div className="columns">
            <div className="column is-5">
              <button className="button-photo main-photo"
                onClick={e => openLightbox(e, {index: -1})} >
                <Img
                  fluid={firstImage.patternPhoto.photo.childImageSharp.fluid}
                  alt={firstImage.patternPhoto.altText}
                />
              </button>
              {slicedImages.length > 0 && <Gallery photos={slicedImages} direction={'column'} columns={4} onClick={openLightbox} />}
              <h5 className="has-text-centered lightbox-instructions top-padding">
                (click or tap to enlarge thumbnails)
              </h5>
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
              <article class="message is-primary">
                <div class="message-body">
                  The Ravelry button links to the classic look version of the pattern page, but this workaround won't help if you're not logged in. It pains me to have to say this, but if you have any medical conditions triggered by visual stimuli (i.e. epilepsy and migraine) and don't know if the Ravelry redesign causes problems for you, DO NOT click any Ravelry links. The pattern button next to it is still safe.
                </div>
              </article>
              <div className="buttons is-centered">
                <a className="button is-rounded is-primary"
                href={details.patternSource.link}
                target="_blank"
                rel="noopener noreferrer">
                  Pattern ({details.patternSource.price})
                </a>
                {/* Ravelry's redesign has some major accessibility issues, and the string added to the following href is a temporary workaround to link to the old look */}
                <a className="button is-rounded is-success"
                href={details.ravelryLink + "?newlook=0"}
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
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  frontmatter: PropTypes.object,
  firstImage: PropTypes.object,
  images: PropTypes.array,
  slicedImages: PropTypes.array,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const PatternItem = ({ data }) => {
  const { markdownRemark: post } = data
  const photos = post.frontmatter.pictures
  const firstImage = photos[0]

  const lightboxSet = photos.map(photo => ({
    src: photo.patternPhoto.photo.childImageSharp.fluid.src,
    srcSet: photo.patternPhoto.photo.childImageSharp.fluid.srcSet,
    sizes: photo.patternPhoto.photo.childImageSharp.fluid.sizes,
    width: photo.patternPhoto.width,
    height: photo.patternPhoto.height,
    caption: photo.patternPhoto.caption,
    alt: photo.patternPhoto.altText
  }))
  // This variable passes image array minus first image to gallery component
  const slicedImages = lightboxSet.slice(1)

  return (
    <Layout location={post.fields.slug}>
      <PatternItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        frontmatter={post.frontmatter}
        helmet={<Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />}
        firstImage={firstImage}
        images={lightboxSet}
        slicedImages={slicedImages}
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
                  ...GatsbyImageSharpFluid
                  src
                  srcSet
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