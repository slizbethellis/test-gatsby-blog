import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { PatternItemTemplate } from '../../components/pattern-item-preview'

const PattItemPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const { body, currentSrc, gauge, itemType, needles, originalPub, published, sizes, title, yarn, yarnWeight, yardage } = data

  return <PatternItemTemplate
    content={body}
    gauge={gauge}
    itemType={itemType}
    needles={needles}
    originalPub={originalPub}
    currentSrc={currentSrc}
    published={moment(published).format("MMMM YYYY")}
    sizes={sizes}
    title={title}
    yarn={yarn}
    yarnWeight={yarnWeight}
    yardage={yardage}
  />
}

PattItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PattItemPreview