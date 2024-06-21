import React from 'react'

import { useDarkMode } from './useDarkMode'
import Navbar from './Navbar'
import Footer from './Footer'

const TemplateWrapper = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  // possible FOUC fix
  if (!componentMounted) {
    return <div />
  };

  return (
    <React.Fragment>
      <Navbar theme={theme} toggleTheme={toggleTheme} componentMounted={componentMounted} />
      {/* Navbar height: 4rem
        Footer height: 4rem */}
      <div className='flex flex-wrap mx-auto overflow-auto justify-center w-full min-h-[calc(100dvh_-_8rem)] dark:[scrollbar-color:#689999_#0d141a]'>
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default TemplateWrapper