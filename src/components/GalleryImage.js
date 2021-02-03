import React from 'react'
import Img from 'gatsby-image'
import { Button } from 'grommet'
import { useLightbox } from 'simple-react-lightbox'

// image buttons that lack an href, used to launch lightbox
const GalleryImage = ({ index, left, top, photo }) => {
  const { openLightbox } = useLightbox()

  const imgStyle = {
    position: "absolute",
    left: left,
    top: top,
    height: photo.height,
    width: photo.width,
    margin: "2px"
  };
  
  return (
    <Button
      plain
      data-attribute="SRL"
      id={index+1}
      onClick={() => openLightbox(index)}
      style={imgStyle}
    >
      <Img
        fluid={photo.fluid}
        src={photo.src}
        alt={photo.alt}
        caption={photo.caption}
      />
    </Button>   
  )
};

export default GalleryImage