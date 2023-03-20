import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Button } from 'grommet'

// image buttons used to launch lightbox
const GalleryImage = ({ photo, first, onClick }) => {
  return (
    <Button
      plain
      margin={!first ? { vertical: '2.5px'} : { bottom: '2.5px' }}
      onClick={onClick}
    >
      <GatsbyImage
        image={photo.thumbFluid}
        alt={photo.alt}
      />
    </Button>
  );
};

export default GalleryImage