import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div>
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <Navbar />
        <section className="hero hero-foo is-fullheight is-dark">
          <div className="hero-head">
            <span></span>
          </div>
          <div className="hero-body">
            <div className="container">
              <span></span>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container has-text-centered">
              <p>
                <span className="is-size-5 display-font"><a href="http://knitty.com/ISSUEdf18/index.php" className="hero-link" target="_blank" rel='noopener noreferrer'>Alfarería</a></span>
                <span> &bull; </span>
                <span className="is-size-6">featured in <i>Knitty</i>, Deep Fall 2018</span>
              </p>
            </div>
          </div>
        </section>
      </div>
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
