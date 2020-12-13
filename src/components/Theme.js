import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'DM Sans',
    },
    colors: {
      active: 'rgba(215,230,227, 0.5)',
      background: {
        dark: '#00100d',
        light: '#f8fbfa',
      },
      'background-back': {
        dark: '#00100d',
        light: '#f8fbfa',
      },
      
      'brand': '#791089',
      'accent-1': '#fdab7c',
      'accent-3': '#39a78e',
      'accent-4': '#a3cd74',
      'dark-1': '#202e2b',
      'dark-2': '#404c4a',
      'dark-3': '#606a68',
      'dark-4': '#808886',
      'light-1': '#f2f7f6',
      'light-2': '#ebf3f1',
      'light-3': '#e4eeed',
      'light-4': '#d7e6e3',
      'neutral-2': '#074646',
      'neutral-3': '#ff7073',
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