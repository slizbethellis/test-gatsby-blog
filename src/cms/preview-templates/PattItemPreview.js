import React from 'react'
import PropTypes from 'prop-types'
import { PatternItemTemplate } from '../../components/pattern-item-preview'

const PattItemPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const { content, contentComponent, frontmatter, title } = data

  return <PatternItemTemplate
    content={content}
    contentComponent={contentComponent}
    frontmatter={frontmatter}
    title={title}
  />
}

PattItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PattItemPreview