import React from 'react'
import { func, string } from 'prop-types'
import { Box, Button } from 'grommet'
import { Moon, Sun } from 'grommet-icons'

// switch that lets user control dark/light mode, also receives state as prop from layout
const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <Box direction="row" gap="xsmall" justify="center">
      <Button
        icon={isDark ?
          <Moon color={{ dark: "accent-1", light: "brand" }} />
          : <Sun color={{ dark: "accent-1", light: "brand" }} /> }
        onClick={toggleTheme}
      />
    </Box>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle