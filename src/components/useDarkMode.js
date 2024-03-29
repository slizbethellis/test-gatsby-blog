import { useEffect, useState } from 'react'

// custom hook to detect if system uses dark mode and/or user's theme preference
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    theme === "light" ?
      setMode('dark') :
      setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setMode('dark') :
      localTheme ?
        setTheme(localTheme) :
        setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
}