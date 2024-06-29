import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { PatternItemTemplate } from '../../components/pattern-item-preview'

const PattItemPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const { currentSrc, finalMeasure, gauge, itemType, needles, originalPub, date, sizes, title, yarn, yarnWeight, yardage } = data

  return <PatternItemTemplate
    content={widgetFor('body')}
    finalMeasure={finalMeasure}
    gauge={gauge}
    itemType={itemType}
    needles={needles}
    originalPub={originalPub}
    currentSrc={currentSrc}
    published={moment(date).format("MMMM YYYY")}
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