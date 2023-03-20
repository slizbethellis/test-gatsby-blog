import React from 'react'

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