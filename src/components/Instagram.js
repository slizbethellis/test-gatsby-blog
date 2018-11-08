import React from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Instagram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  
  componentDidMount() {
    axios.get(`https://www.instagram.com/haloroundmyhead/`)
      .then(res => {
        const $ = cheerio.load(res.data)
        const jsonData = $(`html > body > script`)
          .get(0).children[0].data
          .replace(/window\._sharedData\s?=\s?{/, `{`)
          .replace(/;$/g, ``)
        const json = JSON.parse(jsonData).entry_data.ProfilePage[0].graphql
        let photos = []
        json.user.edge_owner_to_timeline_media.edges.forEach((edge) => {
          if (edge.node) {
            let datum = this.processDatum(edge.node)
            photos.push(datum)
          }
        })
        this.setState({ items: photos.slice(0,9) });
        console.log(this.state.items);
      })
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  processDatum(datum) {
    const node = {
      id: datum.shortcode,
      parent: `__SOURCE__`,
      internal: { type: `InstaNode` },
      children: [],
      likes: _.get(datum, 'edge_liked_by.count') || datum.like_count || '0',
      thumbnails: datum.thumbnail_resources,
      original: datum.display_url || datum.media_url,
      timestamp: datum.taken_at_timestamp || new Date(datum.timestamp).getTime() / 1000,
      dimensions: datum.dimensions,
      comments: _.get(datum, 'edge_media_to_comment.count') || datum.comments_count || '0',
    }

    return node
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-12">
          <h2 className="has-text-weight-bold has-text-centered is-size-4 insta-padding">Instagram</h2>
          <div>
            {this.state.items ? (
              <div className="columns is-centered is-gapless is-multiline is-mobile">
                {this.state.items.map((post) => (
                  <div className="column is-one-third" key={post.id}>
                    <a href={`https://www.instagram.com/p/${post.id}`}
                    target="_blank"
                    rel="noopener noreferrer">
                      <figure className="image is-square">
                        <img src={post.thumbnails[2].src} alt={`${post.id} - Instagram`} />
                        <div className="insta-pic is-overlay">
                          <div className="insta-pic-caption-container">
                            <span className="insta-pic-caption insta-gap">
                              <FontAwesomeIcon className="insta-icon" icon="heart" />
                              {`${post.likes !== null ? post.likes : '0'}`}
                            </span>
                            <span className="insta-pic-caption">
                              <FontAwesomeIcon className="insta-icon" icon="comment" />
                              {`${post.comments !== null ? post.comments : '0'}`}
                            </span>
                          </div>
                        </div>
                      </figure>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <a className="read-more insta-link has-text-centered"
            href="https://www.instagram.com/haloroundmyhead/"
            target="_blank"
            rel="noopener noreferrer">
            see more photos →
          </a>
        </div>
      </div>
    )
  }
}

export default Instagram