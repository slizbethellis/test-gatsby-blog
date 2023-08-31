import React from 'react'
import rehypeReact from 'rehype-react'
import PropTypes from 'prop-types'
import { Anchor, Heading, Paragraph } from 'grommet'

const Heading1 = ({ children }) => (
  <Heading level={1}>{children}</Heading>
)

const Heading2 = ({ children }) => (
  <Heading level={2}>{children}</Heading>
)

const Heading3 = ({ children }) => (
  <Heading level={3}>{children}</Heading>
)

const Heading4 = ({ children }) => (
  <Heading level={4}>{children}</Heading>
)

const FillParagraph = ({ children }) => (
  <Paragraph fill>{children}</Paragraph>
)

const Content = ({ contentAst }) => {
  const patchedAst = patchHTMLAST(contentAst)
  return (
    renderAst(patchedAst)
  )  
}

const patchHTMLAST = (ast) => {
  // There is a funny bug somewhere in one of the dozens-hundreds of libraries being used to transform markdown which
  // is causing a problem with `srcset`.  Images are being converted into HTML in the markdown which automatically
  // references the sources of the generated resized/converted images.  The generated `srcset` prop is being somehow
  // converted into an array of strings before being passed to `rehype-react` which is then concatenating them and
  // generating invalid HTML.
  //
  // This code handles converting `srcset` arrays into valid strings.
  if (ast.properties?.srcSet && Array.isArray(ast.properties.srcSet)) {
    ast.properties.srcSet = ast.properties.srcSet.join(', ')
  }
  if (ast.children) {
    ast.children = ast.children.map(patchHTMLAST)
  }
  return ast
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: Anchor,
    p: FillParagraph,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
  }
}).Compiler

Content.propTypes = {
  content: PropTypes.node,
}

export default Content
