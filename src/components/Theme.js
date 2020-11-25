import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'DM Sans',
    },
    drop: {
      background: { dark: 'dark-1', light: '#ffffff' },
      border: {
        color: {
          dark: 'light-6',
          light: 'dark-6'
        },
        size: 'small',
        side: 'all',
      },
      elevation: 'none',
    },
  },
  table: {
    body: {
      border: {
        color: {
          dark: 'dark-6',
          light: 'light-6'
        },
        side: 'horizontal',
      },
      pad: { vertical: 'xsmall' }
    }
  },
});