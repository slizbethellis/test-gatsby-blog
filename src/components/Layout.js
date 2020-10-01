import React from 'react'
import { Grommet } from 'grommet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComment, faHeart, faLink, faSearch } from '@fortawesome/free-solid-svg-icons'
import { grommet, dark } from 'grommet/themes'

import Navbar from '../components/Navbar'
import NewNavbar from '../components/NewNavbar'
import Footer from '../components/Footer'
import { customTheme } from '../components/Theme'
import './all.sass'

const TemplateWrapper = ({ children, location }) => (
  <Grommet theme={customTheme} style={{ paddingTop: '6rem'}} full>
    <div className={location.pathname === '/' ? 'index-body' : 'regular-body'}>
      {/* <Navbar color="is-fixed-top" /> */}
      <NewNavbar />
      <div className={location.pathname === '/' ? 'no-wrapper' : 'wrapper'}>
        <div className="main">{children}</div>
      </div>
      {location.pathname !== '/' ? (
        <Footer className="footer" />
      ) : null}
    </div>
  </Grommet>
  
)

export default TemplateWrapper

library.add(fab, faComment, faHeart, faLink, faSearch)