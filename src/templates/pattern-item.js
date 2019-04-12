import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ImageButton from '../components/ImageButton'

export class PatternItemLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
    };
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }

  openLightbox = (e, obj) => {
    e.preventDefault()
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
		})
  }

  closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		})
  }
  
  gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		})
  }
  
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		})
  }
  
  gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
  }
  
	handleClickImage = () => {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}
  
  render () {
    const PostContent = this.props.contentComponent || Content
    const details = this.props.frontmatter

    return (
      <section className="section">
        {this.props.helmet || ''}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={true}
        />
        <div className="columns is-centered">
          <div className="column is-10">
            <h1 className="is-size-2 has-text-weight-bold">
              {this.props.title}
            </h1>
            <div className="columns">
              <div className="column is-5">
                <button className="button-photo main-photo"
                  onClick={e => this.openLightbox(e, {index: 0})} >
                  <Img
                    fluid={this.props.firstImage.patternPhoto.photo.childImageSharp.fluid}
                    alt={this.props.firstImage.patternPhoto.altText}
                  />
                </button>
                <Gallery photos={this.props.slicedImages} direction={'column'} columns={4} ImageComponent={ImageButton} onClick={this.openLightbox} />
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
                <div className="buttons is-centered">
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
                <PostContent className="content" content={this.props.content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

PatternItemLayout.propTypes = {
  content: PropTypes.node.isRequired,
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
    caption: photo.patternPhoto.altText,
    alt: photo.patternPhoto.altText
  }))
  // This variable passes image array minus first image to gallery component
  const slicedImages = lightboxSet.slice(1)

  return (
    <Layout>
      <PatternItemLayout
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
            width
            height
          }
        }
      }
    }
  }
`