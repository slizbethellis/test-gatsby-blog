import React from 'react'
import Img from 'gatsby-image'

const GalleryImage = ({ index, left, top, photo }) => {
  const imgStyle = {
    position: "absolute",
    left: left,
    top: top,
    height: photo.height,
    width: photo.width,
    margin: "2px"
  };
  
  return (
    <button className="button-photo main-photo" data-attribute="SRL" id={index+1}>
      <Img
        fluid={photo.fluid}
        alt={photo.alt}
        caption={photo.caption}
        style={imgStyle}
      />
    </button>
  )
};

export default GalleryImage