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
      <Layout location={this.props.location}>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <Img
          fluid={data.fluidImages.childImageSharp.fluid}
          style={{ width: `100vw`, height: `100vh`, marginTop: `-3.25rem` }}
          alt="woman wearing dark red crescent-shaped shawl standing in front of railing at Austin Public Library" />
        <p className="display-box has-text-centered">
          <span className="is-size-5 display-font">
            <a href="https://www.ravelry.com/patterns/library/feuille-morte" className="hero-link" target="_blank" rel='noopener noreferrer'>Feuille-morte</a>
          </span>
          <span> &bull; </span>
          <span className="is-size-6">featured in <a href="http://knitty.com/ISSUEdf19/PATTfeuillemorte/PATTfeuillemorte.php" className="hero-link" target="_blank" rel='noopener noreferrer'><i>Knitty</i>, Deep Fall 2019</a></span>
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
      relativePath: { regex: "/feuille-morte.jpg/" }
    ) {
      childImageSharp {
        fluid (maxWidth: 1440, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
