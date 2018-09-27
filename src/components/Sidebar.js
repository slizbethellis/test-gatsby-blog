import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TagBlock from '../components/TagBlock'

const Sidebar = () => (
  <section>
    <div className="columns is-centered">
      <div className="column is-four-fifths">
        <div className="field has-addons">
          <p className="control">
            <input className="input is-primary is-rounded" type="text" placeholder="Search" />
          </p>
          <p className="control">
            <button className="button is-primary is-rounded">
              <FontAwesomeIcon icon="search" />
            </button>
          </p>
        </div>
      </div>
    </div>
    <hr className="hr-custom" />
    <TagBlock />
    <hr className="hr-custom" />
  </section>
)

export default Sidebar