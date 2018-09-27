import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import cover from '../img/alfareria.jpg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <div
          className="full-width-image-container"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <p className="display-box has-text-centered">
            <span className="is-size-5 display-font"><a href="http://knitty.com/ISSUEdf18/index.php" className="hero-link" target="_blank" rel='noopener noreferrer'>Alfarería</a></span>
            <span> &bull; </span>
            <span className="is-size-6">featured in <i>Knitty</i>, Deep Fall 2018</span>
          </p>
        </div>
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
    }
  }
`
