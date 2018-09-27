import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../img/haloroundmyhead-logo.svg'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isActive: false,
    };
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      // use color prop to toggle between 'is-transparent' and 'is-fixed-top'
      <nav className={`navbar ${this.props.color}`}>
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
    )
  }
}

export default Navbar
