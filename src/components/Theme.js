import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Nunito',
    },
    colors: {
      active: 'rgba(203,213,225, 0.5)',
      background: {
        dark: '#0d141a',
        light: '#f8fafc',
      },
      'background-back': {
        dark: '#0d141a',
        light: '#f8fafc',
      },
      
      'brand': '#791089',
      'accent-1': '#fdab7c',
      'accent-3': '#39a78e',
      'accent-4': '#a3cd74',
      'dark-1': '#253435',
      'dark-2': '#304547',
      'dark-3': '#425f63',
      'dark-4': '#5b848d',
      'light-1': '#f8fafc',
      'light-2': '#f1f5f9',
      'light-3': '#e2e8f0',
      'light-4': '#cbd5e1',
      'neutral-2': '#074646',
      'neutral-3': '#ff7073',
      text: {
        dark: '#f8f8f8',
        light: '#121212',
      },
    },
    drop: {
      background: { dark: 'dark-1', light: '#ffffff' },
      border: {
        color: {
          dark: 'light-4',
          light: 'dark-4'
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
          dark: 'light-4',
          light: 'dark-4'
        },
        side: 'horizontal',
      },
      pad: { vertical: 'xsmall' }
    }
  },
});