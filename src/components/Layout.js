import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <body className="has-navbar-fixed-top">
    <Navbar color="is-fixed-top" />
    <div>{children}</div>
  </body>
)

export default TemplateWrapper

library.add(fab, faSearch)
