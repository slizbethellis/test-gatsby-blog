import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Index } from 'elasticlunr'
import { Search as FormSearch } from 'grommet-icons'
import { Box, Text, TextInput } from 'grommet'

import Link from './Link'

// Search component
const Search = ({ searchIndex, size }) => {
  const index = Index.load(searchIndex);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const boxRef = useRef();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, [forceUpdate]);

  function searchResults (searchQuery) {
    const res = index.search(searchQuery, { expand: true }).map(({ ref }) => {
      return index.documentStore.getDoc(ref);
    });
    setResults(res);
  }

  const renderSuggestions = () => {
    return results.map(({ id, path, tags, title, itemType }, index, list) => ({
      label: (
        <Box 
          direction="column"
          align="start"
          gap="none"
          border={index < list.length - 1 ? 'bottom' : undefined}
          pad="small"
          width={size !== 'small' ? 'medium' : '100%'}
          wrap
        >
          <Link to={path}>{title}</Link>
          <Text>{(itemType === undefined ? "Blog Post | " : `Pattern | ${itemType} | `) + tags.join(`, `)}</Text>
        </Box>
      )
    }))
  }
  
  return (
    <Box
      ref={boxRef}
      direction="row"
      align="center"
      round="large"
      background="light-1"
      border={{ "color": "neutral-3" }}
      pad={{ "horizontal": "small" }}
      margin={{ "top": "none", "horizontal": "medium", "bottom": "medium" }}
    >
      <FormSearch color="brand" />
      <TextInput
        type="search"
        dropTarget={boxRef.current}
        plain
        onChange={(event) => {
          const searchQuery = event.target.value;
          setQuery(searchQuery);
          searchResults(searchQuery);
        }}
        placeholder="Search..."
        value={query}
        suggestions={renderSuggestions()}
      />
    </Box>
  );
}

export default Search