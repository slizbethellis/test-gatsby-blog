// Import React so that you can use JSX in HeadComponents
const React = require("react")
const { SimpleReactLightbox } = require("simple-react-lightbox")

exports.wrapRootElement = ({ element }) => {
  return (
    <SimpleReactLightbox>
      {element}
    </SimpleReactLightbox>
  )
}

const HtmlAttributes = {
  lang: "en"
}

const BodyAttributes = {

}

exports.onRenderBody = ({
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) => {
  setHtmlAttributes(HtmlAttributes)
  setBodyAttributes(BodyAttributes)
}