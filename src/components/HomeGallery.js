import React from 'react'
import { Grid, ResponsiveContext } from 'grommet'

import HomeImage from './HomeImage'

const HomeGallery = ({ posts, smallPosts }) => (
  <ResponsiveContext.Consumer>
    {/* Breakpoints larger than "small" get 4 pattern photo buttons, smaller breakpoints get only 3. */}
    {responsive =>
      responsive === "small" ? (
        <Grid
          as="section"
          align="center"
          columns={['1/3', '1/3', '1/3']}
          gap="none"
        >
          {smallPosts
            .map(({ node: post }) => (
              <HomeImage
                fixed={post.frontmatter.image.childImageSharp.fixed}
                altText={`Pattern info for ${post.frontmatter.altText}`}
                patternName={post.frontmatter.title}
                key={post.id}
                slug={post.fields.slug}
              />
            ))}
        </Grid>
      ) : (
        <Grid
          as="section"
          align="center"
          columns={['1/4', '1/4', '1/4', '1/4']}
          gap="none"
        >
          {posts
            .map(({ node: post }) => (
              <HomeImage
                fixed={post.frontmatter.image.childImageSharp.fixed}
                altText={`Pattern info for ${post.frontmatter.title}`}
                patternName={post.frontmatter.title}
                key={post.id}
                slug={post.fields.slug}
              />
            ))}
        </Grid>
    )}
  </ResponsiveContext.Consumer>
)

export default HomeGallery