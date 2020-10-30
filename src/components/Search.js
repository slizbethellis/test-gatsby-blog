import React, { Component, Fragment } from 'react'
import { Index } from 'elasticlunr'
import { Search as FormSearch } from 'grommet-icons'
import { Box, TextInput } from 'grommet'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    };
  }

  render() {
    return (
      <Fragment>
      <Box
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
          plain
          placeholder="Search..."
        />
      </Box>
      {/* <div className="field">
        <div className={this.state.query !== '' ? 'dropdown dropdown-search is-active' : 'dropdown dropdown-search'}>
          <div className="dropdown-trigger">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input input-search is-primary is-rounded"
                type="search"
                aria-label="Search"
                placeholder="Search"
                value={this.state.query}
                onChange={this.search}
              />
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="search" />
              </span>
            </p>
          </div>
          <div className="dropdown-menu" id="dropdown-menu2" role="menu">
            <div className="dropdown-content">
              <div className="dropdown-item">
                <button className="delete is-small is-pulled-right" onClick={this.toggleSearch}></button>
                 Search results for <strong>'{this.state.query}'</strong>
              </div>
              <hr className="dropdown-divider hr-custom" />
              {this.state.results.length > 0 &&
                <div>
                  {this.state.results.map(page => (
                    <div key={page.id}>
                      <div className="dropdown-item">
                        <Link className="search-link" to={page.path}>{page.title}</Link>
                        {": " + page.tags.join(`, `)}
                      </div>
                      <hr className="dropdown-divider hr-custom" />
                    </div>
                  ))}
                </div>
              }
              <div className="dropdown-item">
                <span className="search-footer">Tip: search results might not appear until the first complete word is typed</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </Fragment>
    );
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query)
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    })
  }

  toggleSearch = () => {
    this.setState ({
      query: ''
    })
  }
}