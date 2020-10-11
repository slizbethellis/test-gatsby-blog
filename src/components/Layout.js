import React from 'react'
import { Grommet, Main } from 'grommet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComment, faHeart, faLink, faSearch } from '@fortawesome/free-solid-svg-icons'

import Navbar from './Navbar'
import SiteFooter from './Footer'
import { customTheme } from './Theme'
// import './all.sass'

const TemplateWrapper = ({ children, location }) => (
  <Grommet theme={customTheme} style={{ paddingTop: '6rem' }} full>
    {/* Wrapper-div might seem useless, but removing it messes up styling of Grommet components. */}
    <div className="wrapper-div">
      <Navbar />
      <Main style={{ minHeight: 'calc(100vh - 10.75rem)'}}>
        {children}
      </Main>
      <SiteFooter />
    </div>
  </Grommet>
  
)

export default TemplateWrapper

library.add(fab, faComment, faHeart, faLink, faSearch)