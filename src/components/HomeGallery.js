import React, { useContext } from 'react'
import { Grid, ResponsiveContext } from 'grommet'

import HomeImage from './HomeImage'

// a responsive grid of image buttons for the home page
const HomeGallery = ({ posts }) => {
  const size = useContext(ResponsiveContext)
  const smallPosts = posts.slice(0,3)
  const homePosts = (size !== 'small' ? posts : smallPosts)

  return (
    <Grid
      as="section"
      align="center"
      columns={size !== 'small' ? ['1/4', '1/4', '1/4', '1/4'] : ['1/3', '1/3', '1/3']}
      gap="none"
    >
      {/* Breakpoints larger than "small" get 4 pattern photo buttons, smaller breakpoints get only 3. */}
      {homePosts
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
  )
}

export default HomeGallery