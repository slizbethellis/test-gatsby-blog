import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
// import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../img/haloroundmyhead-logo.svg'

export default class IndexPage extends React.Component {
  state ={
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    const { data } = this.props

    return (
      <section className="hero hero-foo is-fullheight is-dark">
        <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
        <div className="hero-head">
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img src={logo} alt="Haloroundmyhead Knits" style={{ width: '275px' }} />
                </figure>
              </Link>
              <button className={this.state.isActive ? 'button navbar-burger is-active' : 'button navbar-burger'} onClick={this.toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-start">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <a className="button is-text"
                    href="https://www.ravelry.com/people/haloroundmyhead"
                    target="_blank"
                    rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'ravelry']} />
                    </a>
                    <a className="button is-text"
                    href="https://www.instagram.com/haloroundmyhead/"
                    target="_blank"
                    rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a className="button is-text"
                    href="https://www.facebook.com/Haloroundmyhead-Knits-1814095122152544/"
                    target="_blank"
                    rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
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
