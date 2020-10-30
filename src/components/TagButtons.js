import React from 'react'
import { kebabCase } from 'lodash'

import RoutedButton from './RoutedButton'

const TagButtons = ({ group, margin, size }) => (
  <ul
    className="tag-list"
    style={{
      listStyle: "none",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      margin: "0 auto 0.5rem",
      paddingLeft: "0"
    }}
  >
    {group.map((tag, index) => (
      <li key={index}>
        <RoutedButton
          to={`/tags/${kebabCase(tag.fieldValue)}/`}
          margin={margin}
          size={!size ? "medium" : size}
          label={`${tag.fieldValue} (${tag.totalCount})`}
        />
      </li>
    ))}
  </ul>
)

export default TagButtons