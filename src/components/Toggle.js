import React from 'react'
import { func, string } from 'prop-types'
import { Box, CheckBox } from 'grommet'
import { Moon, Sun } from 'grommet-icons'

// switch that lets user control dark/light mode, also receives state as prop from layout
const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <Box direction="row" gap="small" justify="center">
      <Sun color="brand" />
      <CheckBox
        label={<Moon color="brand" />}
        checked={isDark}
        onChange={toggleTheme}
        toggle
      />
    </Box>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle