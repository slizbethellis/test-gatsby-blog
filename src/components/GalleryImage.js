import React from 'react'
import Img from 'gatsby-image'
import { Button } from 'grommet'

// image buttons that lack an href, used to launch lightbox
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
    <Button plain data-attribute="SRL" id={index+1}>
      <Img
        fluid={photo.fluid}
        alt={photo.alt}
        caption={photo.caption}
        style={imgStyle}
      />
    </Button>
  )
};

export default GalleryImage