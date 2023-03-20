import React, { useContext } from 'react'
import { Grid, ResponsiveContext } from 'grommet'

import HomeImage from './HomeImage'

// a responsive grid of image buttons for the home page
const HomeGallery = ({ posts }) => {
  const size = useContext(ResponsiveContext)
  const columns = calcColumns(size)
  const homePosts = slicePosts(size, posts)

  function slicePosts (size, posts) {
    switch (size) {
      case 'small':
        return posts.slice(0,3);
      case 'medium':
        return posts.slice(0,4);
      default:
        return posts;
    }
  }

  function calcColumns (size) {
    switch (size) {
      case 'small':
        return ['1/3', '1/3', '1/3'];
      case 'medium':
        return ['1/4', '1/4', '1/4', '1/4'];
      default:
        return ['20%', '20%', '20%', '20%', '20%']
    }
  }

  return (
    <Grid
      as="ul"
      columns={columns}
      gap="none"
      style={{
        listStyle: "none",
        paddingLeft: "0",
      }}
      height="574px"
      width="100%"
      margin={{
        vertical: "0"
      }}
    >
      {/* Breakpoints larger than "small" get 4 pattern photo buttons, smaller breakpoints get only 3. */}
      {homePosts
        .map(({ node: post }) => (
          <li key={post.id}>
            <HomeImage
              fixed={post.frontmatter.pattImage.childImageSharp.gatsbyImageData}
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