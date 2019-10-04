import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComment, faHeart, faLink, faSearch } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children, location }) => (
  <div className={location.pathname === '/' ? 'index-body' : 'regular-body'}>
    <Navbar color="is-fixed-top" />
    <div className={location.pathname === '/' ? 'no-wrapper' : 'wrapper'}>
      <div className="main">{children}</div>
    </div>
    {location.pathname !== '/' ? (
      <Footer className="footer" />
    ) : null}
  </div>
)

export default TemplateWrapper

library.add(fab, faComment, faHeart, faLink, faSearch)