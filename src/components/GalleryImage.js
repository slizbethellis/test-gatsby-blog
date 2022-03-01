import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Button } from 'grommet'
import { useLightbox } from 'simple-react-lightbox'

// image buttons used to launch lightbox
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
      id={index+1}
      onClick={() => openLightbox(index)}
      style={imgStyle}
      href={photo.src}
    >
      <GatsbyImage
        image={photo.fluid}
        src={photo.src}
        alt={photo.alt}
        caption={photo.caption}
        srl_gallery_image="true"
      />
    </Button>
  );
};

export default GalleryImage