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
      as="ul"
      align="center"
      columns={size !== 'small' ? ['1/4', '1/4', '1/4', '1/4'] : ['1/3', '1/3', '1/3']}
      gap="none"
      style={{
        listStyle: "none",
        paddingLeft: "0",
        margin: "0"
      }}
    >
      {/* Breakpoints larger than "small" get 4 pattern photo buttons, smaller breakpoints get only 3. */}
      {homePosts
        .map(({ node: post }) => (
          <li key={post.id}>
            <HomeImage
              fixed={post.frontmatter.image.childImageSharp.gatsbyImageData}
              altText={`Pattern info for ${post.frontmatter.title}`}
              patternName={post.frontmatter.title}
              slug={post.fields.slug}
            />
          </li>
        ))}
    </Grid>
  );
}

export default HomeGallery