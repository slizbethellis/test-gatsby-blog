import React, { useContext } from 'react'
import { Grommet, Main, ResponsiveContext } from 'grommet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

import Navbar from './Navbar'
import SiteFooter from './Footer'
import { customTheme } from './Theme'
import { useDarkMode } from './useDarkMode'


const TemplateWrapper = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? 'light' : 'dark';

  return(
    <Grommet theme={customTheme} themeMode={themeMode} style={{ paddingTop: '6rem' }} full>
      {/* Wrapper-div might seem useless, but removing it messes up styling of Grommet components. */}
      <div className="wrapper-div">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <ResponsiveContext.Consumer>
          {responsive =>
            responsive === 'small' ? (
              <Main style={{ minHeight: 'calc(100vh - 10rem)'}}>
                {children}
              </Main>
            ) : (
              <Main style={{ minHeight: 'calc(100vh - 10.75rem)'}}>
                {children}
              </Main>
            )
          }
        </ResponsiveContext.Consumer>
        <SiteFooter />
      </div>
    </Grommet>
  )
}

export default TemplateWrapper

library.add(fab, faComment, faHeart)