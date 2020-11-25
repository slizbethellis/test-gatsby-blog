import React from 'react'
import { func, string } from 'prop-types'
import { Box, CheckBox, ThemeContext } from 'grommet'
import { Moon, Sun } from 'grommet-icons'

// switch that lets user control dark/light mode, also receives state as prop from layout
const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <Box direction="row" gap="xsmall" justify="center">
      <Sun color={{ dark: "accent-1", light: "brand" }} />
      <ThemeContext.Extend
        value={{
          checkBox: {
            gap: '4px',
          }
        }}
      >
        <CheckBox
          a11yTitle="Dark Mode toggle"
          label={<Moon color={{ dark: "accent-1", light: "brand" }} />}
          checked={isDark}
          onChange={toggleTheme}
          toggle
        />
      </ThemeContext.Extend> 
    </Box>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle