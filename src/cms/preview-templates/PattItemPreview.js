import React from 'react'
import PropTypes from 'prop-types'
import { PatternItemTemplate } from '../../templates/pattern-item'

const PattItemPreview = ({ entry, widgetFor }) => (
  <PatternItemTemplate
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

PattItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PattItemPreview