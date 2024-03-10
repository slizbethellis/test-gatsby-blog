import { useEffect, useState } from 'react'

import { modes } from './Modes'

// custom hook to detect if system uses dark mode and/or user's theme preference
export const useDarkMode = () => {
  const [theme, setTheme] = useState(modes[0]);
  const [componentMounted, setComponentMounted] = useState(false);
  
  const setMode = mode => {
    mode.name === 'system' ?
      window.localStorage.removeItem('theme') :
      window.localStorage.setItem('theme', mode.name)
    setTheme(mode)
    // This code is redundant with the script in Layout.js, but necessary to update class name on button toggle
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  };

  const toggleTheme = mode => {
    setMode(mode)
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme === 'dark' ?
      setMode(modes[1]) :
      localTheme === 'light' ?
        setMode(modes[0]) :
        setMode(modes[2]);
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
}