import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

export const LinksPageTemplate = ({ buttons, title }) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <div className="buttons">
              {buttons.map((button,index) =>
               (button.external === true ? <div><a href={button.link} key={index}>{button.label}</a></div> :<div><Link to={button.link} key={index}>{button.label}</Link></div>)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

LinksPageTemplate.propTypes = {
  buttons: PropTypes.array,
}