import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComment, faHeart, faLink, faSearch } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar color="is-fixed-top" />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper

library.add(fab, faComment, faHeart, faLink, faSearch)