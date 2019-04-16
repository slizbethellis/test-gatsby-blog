import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <Img
          fluid={data.fluidImages.childImageSharp.fluid}
          style={{ width: `100vw`, height: `100vh`, marginTop: `-3.25rem` }}
          alt="Alfarería shawl in front of Battle Hall at UT-Austin" />
        <p className="display-box has-text-centered">
          <span className="is-size-5 display-font">
            <a href="http://knitty.com/ISSUEdf18/index.php" className="hero-link" target="_blank" rel='noopener noreferrer'>Alfarería</a>
          </span>
          <span> &bull; </span>
          <span className="is-size-6">featured in <i>Knitty</i>, Deep Fall 2018</span>
        </p>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
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
    fluidImages: file(
      relativePath: { regex: "/alfareria.jpg/" }
    ) {
      childImageSharp {
        fluid (maxWidth: 1440
          traceSVG: {
            color: "#bdbf09"
            turnPolicy: TURNPOLICY_MINORITY
            blackOnWhite: true
          }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
