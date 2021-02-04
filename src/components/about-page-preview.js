import React from 'react'
import PropTypes from 'prop-types'
import Content from '../components/Content'

export const AboutPageTemplate = ({ title, content, headshot }) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="columns">
                <div className="column is-5">
                  {headshot}
                </div>
              </div>
              <Content contentAst={content} fill/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  seo: PropTypes.object
}