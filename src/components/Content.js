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
  return (
    renderAst(contentAst)
  )  
}

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
