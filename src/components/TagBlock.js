import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Accordion, AccordionPanel, Box, Heading, ResponsiveContext, ThemeContext } from 'grommet'

import Link from './Link'
import TagButtons from './TagButtons'

// group of featured tags for top level blog sidebar
const TagBlock = () => (
  <StaticQuery
    query={graphql`
      query TagBlockQuery {
        allMarkdownRemark(
          limit: 20,
          filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <ThemeContext.Extend
              value={{
                accordion: {
                  heading : {
                    level: 2,
                    size: "small",
                    margin: {
                      horizontal: "large",
                    },
                  },
                },
              }}
            >
              <Box alignSelf="center">
                <Accordion>
                  <AccordionPanel label="Tags">
                    <Box pad="medium">
                      <TagButtons
                        group={data.allMarkdownRemark.group}
                        margin="xxsmall"
                        size="small"
                      />
                      <Link alignSelf="center" to="/tags">
                        all tags →
                      </Link>
                    </Box>
                    
                  </AccordionPanel>
                </Accordion>
              </Box>
            </ThemeContext.Extend>
          ) : (
            <Box alignSelf="center" border="bottom">
              <Heading level={2} size="small" textAlign="center">Tags</Heading>
              <TagButtons
                group={data.allMarkdownRemark.group}
                margin="xxsmall"
                size="small"
              />
              <Link alignSelf="center" margin={{"bottom": "1.5rem"}} to="/tags">
                all tags →
              </Link>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    )}
  />
)

export default TagBlock