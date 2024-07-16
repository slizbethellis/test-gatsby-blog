import CMS from 'decap-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import LinkPagePreview from './preview-templates/LinkPagePreview'
import PattItemPreview from './preview-templates/PattItemPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('links', LinkPagePreview)
CMS.registerPreviewTemplate('patterns', PattItemPreview)
