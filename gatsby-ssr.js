import React from 'react'

const HtmlAttributes = {
  lang: "en",
  className: "dark:[scrollbar-color:#689999_#0d141a]"
}

const BodyAttributes = {
  className: "bg-phthalo-50 text-phthalo-950 dark:bg-phthalo-950 dark:text-phthalo-50"
}

export const onRenderBody = ({
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setBodyAttributes(BodyAttributes)
}