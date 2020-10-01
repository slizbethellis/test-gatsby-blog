import React from 'react'
import Img from 'gatsby-image'
import { Box, ResponsiveContext, Stack, Text } from 'grommet'

const HomeImage = ({ photo, patternName }) => {
  <ResponsiveContext.Consumer>
    {size => (
      <Stack anchor="right">
        <Box
          round="xlarge"
          overflow="hidden"
          align="center"
          margin="small"
          height="large"
        >
          <Img 
            fluid={photo.fluid}
            alt={photo.alt}
          />
        </Box>
        <Box>
          {size !== "small" && size !== "xsmall" && (
            <Text
              margin={{ bottom: "30px" }}
              weight="bold"
              color="white"
              size="large"
            >
              {patternName}
            </Text>
          )}
        </Box>
      </Stack>
    )}
  </ResponsiveContext.Consumer>
}

export default HomeImage