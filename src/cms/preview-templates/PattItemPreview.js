import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { PatternItemTemplate } from '../../components/pattern-item-preview'

const PattItemPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const { content, gauge, itemType, needles, originalPub, published, sizes, title, yarn, yarnWeight } = data

  return <PatternItemTemplate
    content={content}
    gauge={gauge}
    itemType={itemType}
    needles={needles}
    originalPub={originalPub}
    published={moment(published).format("MMMM YYYY")}
    sizes={sizes}
    title={title}
    yarn={yarn}
    yarnWeight={yarnWeight}
  />
}

PattItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PattItemPreview