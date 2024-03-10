import React from 'react'
import { Main, ResponsiveContext } from 'grommet'
import { Script } from 'gatsby'
import SiteFooter from './Footer'
import { useDarkMode } from './useDarkMode'
import Navbar from './Navbar'

const TemplateWrapper = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  // possible FOUC fix
  if (!componentMounted) {
    return <div />
  };

  return (
    <React.Fragment>
      <Script>
        {`
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
          } else {
              document.documentElement.classList.remove('dark')
          }
        `}
      </Script>
      {/* Wrapper-div might seem useless, but removing it messes up styling of Grommet components. */}
      <div className="bg-white dark:bg-black">
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
              <Main style={{ minHeight: 'calc(100vh - 8.25rem)'}}>
                {children}
              </Main>
            )
          }
        </ResponsiveContext.Consumer>
        <SiteFooter />
      </div>
    </React.Fragment>
  )
}

export default TemplateWrapper