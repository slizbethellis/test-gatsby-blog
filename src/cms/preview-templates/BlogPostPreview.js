import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../components/blog-post-preview'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  const { description, tags, title } = data

  return <BlogPostTemplate
    content={widgetFor('body')}
    description={description}
    tags={tags}
    title={title}
  />
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
