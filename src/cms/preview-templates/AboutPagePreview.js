import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../components/about-page-preview'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const { title } = data

  return <AboutPageTemplate
    title={title}
    content={widgetFor('body')}
  />
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
