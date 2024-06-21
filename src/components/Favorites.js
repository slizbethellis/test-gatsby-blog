import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Favorites = () => {
  const posts = useStaticQuery(graphql`
    query FavQuery {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {favorite: {eq: true}}}
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)
  const favs = posts.allMarkdownRemark.nodes

  return (
    <div className='flex flex-col m-6'>
      <h2 className='text-center text-2xl font-bold'>Favorites</h2>
      {favs.map(( fav ) => (
        <article key={fav.id} className='mt-3 [&:first-child]:mt-5'>
          <h3 className='text-lg font-semibold'><Link to={fav.fields.slug}>{fav.frontmatter.title}</Link></h3>
          <span className='text-sm'>{fav.frontmatter.date}</span>
        </article>
      ))}
    </div>
  )
}

export default Favorites