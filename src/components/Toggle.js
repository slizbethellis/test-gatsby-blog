import React from 'react'
import { func, string } from 'prop-types'
import { Box, Button, Text, Tip } from 'grommet'
import { Moon, Sun } from 'grommet-icons'

// switch that lets user control dark/light mode, also receives state as prop from layout
const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <Box
      direction="row"
      background={{ dark: "#111b1f", light: "light-3" }}
      gap="xsmall"
      justify="center"
    >
      {/* Tip appears when hovering on button to indicate functionality */}
      <Tip
        content={
          <Box
            background={{ dark: "dark-3", light: "dark-3" }}
            pad="xxsmall"
            round="xsmall"
            elevation="none"
          >
            <Text size="xsmall">Toggle light/dark mode</Text>
          </Box>
        }
        dropProps={{align: {"top": "bottom"}}}
        plain
      >
        <Button
          a11yTitle="Toggle light/dark mode"
          icon={isDark ?
            <Sun color={{ dark: "accent-1", light: "brand" }} size="medium" />
            : <Moon color={{ dark: "accent-1", light: "brand" }} size="medium" /> }
          hoverIndicator={{dark: "dark-1", light: "light-4"}}
          onClick={toggleTheme}
        />
      </Tip>
    </Box>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle