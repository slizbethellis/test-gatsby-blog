import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

export const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'DM Sans',
    },
  },
  table: {
    body: {
      border: {
        color: 'neutral-3',
        side: 'horizontal',
      },
      pad: { vertical: 'xsmall' }
    }
  },
});