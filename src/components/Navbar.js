import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../img/haloroundmyhead-logo.svg'

class Navbar extends React.Component {
  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Haloroundmyhead Knits" style={{ width: '275px' }} />
            </figure>
          </Link>
          <button aria-label="menu" aria-expanded="false" className={this.state.isActive ? 'button navbar-burger is-active' : 'button navbar-burger'} data-target="navbarMenu" onClick={this.toggleNav}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id="navbarMenu" className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/patterns">
              Patterns
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                {/* Disabling Ravelry link at least temporarily
                <a className="button is-text"
                href="https://www.ravelry.com/people/haloroundmyhead"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'ravelry']} />
                  <span className="is-sr-only">Ravelry</span>
                </a> */}
                <a className="button is-text"
                href="https://www.instagram.com/haloroundmyhead/"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                  <span className="is-sr-only">Instagram</span>
                </a>
                <a className="button is-text"
                href="https://www.facebook.com/Haloroundmyhead-Knits-1814095122152544/"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                  <span className="is-sr-only">Facebook</span>
                </a>
                <a className="button is-text"
                href="https://twitter.com/haloroundmyhead"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                  <span className="is-sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar