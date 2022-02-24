import React from 'react'
import { Grommet, Main, ResponsiveContext } from 'grommet'
import Navbar from './Navbar'
import SiteFooter from './Footer'
import { customTheme } from './Theme'
import { useDarkMode } from './useDarkMode'

const TemplateWrapper = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? 'light' : 'dark';

  // possible FOUC fix
  if (!componentMounted) {
    return <div />
  };

  return (
    <Grommet theme={customTheme} themeMode={themeMode} full>
      {/* Wrapper-div might seem useless, but removing it messes up styling of Grommet components. */}
      <div className="wrapper-div">
        <Navbar theme={theme} toggleTheme={toggleTheme} componentMounted={componentMounted} />
        <ResponsiveContext.Consumer>
          {/*
            Non-small navbar height: 4.875rem
            Non-small footer height: 4.875rem
            Small navbar height: 4.125rem
            Small footer height: 4.125rem
          */}
          {responsive =>
            responsive === 'small' ? (
              <Main style={{ minHeight: 'calc(100vh - 8.25rem)'}}>
                {children}
              </Main>
            ) : (
              <Main style={{ minHeight: 'calc(100vh - 9.75rem)'}}>
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