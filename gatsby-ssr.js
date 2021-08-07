import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import SimpleReactLightbox from 'simple-react-lightbox-pro'

export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)

const HtmlAttributes = {
  lang: "en"
}

const BodyAttributes = {

}

export const onRenderBody = ({
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setBodyAttributes(BodyAttributes)
}