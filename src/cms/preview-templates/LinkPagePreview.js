import React from 'react'
import PropTypes from 'prop-types'
import { LinksPageTemplate } from '../../components/links-page-preview'

const LinkPagePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS()
  const { buttons, heroAltText, title } = data

  return (
    <LinksPageTemplate
      heroImage={getAsset(entry.getIn(['data', 'image']))}
      heroAltText={heroAltText}
      title={title}
      buttons={buttons}
    />
  )
}

LinkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LinkPagePreview