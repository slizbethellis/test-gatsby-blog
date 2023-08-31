import React, { useCallback, useEffect, useRef, useState } from 'react'
import { navigate } from 'gatsby'
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

  const onChange = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
    searchResults(searchQuery);
  }

  const onSelect = event => {
    navigate(event.suggestion.path)
    event.preventDefault()
  }

  const renderSuggestions = () => {
    return results.map(({ path, tags, title, itemType }, index, list) => ({
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
      ),
      path: path,
    }))
  }

  const horizonMargin =  (size !== "small" ? "medium" : "large")
  const bottomMargin = (size !== "small" ? "medium" : "large")
  
  return (
    <Box
      alignContent="center"
      margin={{ "top": "medium" }}
      border={size !== 'small' ? false : {"side": "bottom", "color": { dark: "light-4", light: "dark-4" }}}
    >
      <Box
        ref={boxRef}
        direction="row"
        align="center"
        round="large"
        background={{ dark: "dark-2", light: "#ffffff" }}
        border={{ "color": {dark: "accent-3", light: "neutral-3"} }}
        pad={{ "horizontal": "small" }}
        margin={{ "top": "none", "horizontal": horizonMargin, "bottom": bottomMargin }}
      >
        <FormSearch color={{ dark: "accent-1", light: "brand" }} />
        <TextInput
          a11yTitle="Search"
          type="search"
          dropTarget={boxRef.current}
          plain
          onChange={onChange}
          onSuggestionSelect={onSelect}
          placeholder="Search..."
          value={query}
          suggestions={renderSuggestions()}
        />
      </Box>
    </Box>
  );
}

export default Search