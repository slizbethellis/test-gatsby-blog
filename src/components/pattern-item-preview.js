import React from 'react'
import PropTypes from 'prop-types'

export const PatternItemTemplate = ({
  content,
  currentSrc,
  finalMeasure,
  gauge,
  itemType,
  needles,
  originalPub,
  published,
  sizes,
  title,
  yarn,
  yarnWeight,
  yardage
}) => {

  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-10">
          <h1 className="has-text-weight-bold is-size-2 title-padding">
            {title}
          </h1>
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <th>Original source</th>
                <td>{originalPub}</td>
              </tr>
              {currentSrc && (
                <tr>
                  <th>Current source</th>
                  <td>{currentSrc}</td>
                </tr>
              )}
              <tr>
                <th>Category</th>
                <td>{itemType}</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{published}</td>
              </tr>
              <tr>
                <th>Sizes</th>
                <td>{sizes}</td>
              </tr>
              <tr>
                <th>Yarn(s)</th>
                <td>{yarn.join(', ')}</td>
              </tr>
              <tr>
                <th>Yarn Weight</th>
                <td>{yarnWeight.join(', ')}</td>
              </tr>
              <tr>
                <th>Yardage</th>
                <td>
                  {yardage.map((yard,index)=>(
                    <span key={index}>{yard.variantYardage.variant}: {yard.variantYardage.yards} yds / {yard.variantYardage.meters} m</span>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Needles</th>
                <td>{needles}</td>
              </tr>
              <tr>
                <th>Gauge</th>
                <td>
                  {gauge.map((gauge,index)=>(
                    <span key={index}>{gauge}</span>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Measurements</th>
                <td>
                  {finalMeasure.map((measure,index)=>(
                    <span key={index}>{measure.dimGroup.dimName}: {measure.dimGroup.inches} inches / {measure.dimGroup.cm} cm</span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="content">{content}</div>
        </div>
      </div>
    </section>
  )
}

PatternItemTemplate.propTypes = {
  content: PropTypes.node,
  currentSrc: PropTypes.string,
  gauge: PropTypes.array,
  itemType: PropTypes.string,
  needles: PropTypes.string,
  originalPub: PropTypes.string,
  published: PropTypes.string,
  sizes: PropTypes.string,
  title: PropTypes.string,
  yarn: PropTypes.array,
  yarnWeight: PropTypes.array,
  yardage: PropTypes.array
}