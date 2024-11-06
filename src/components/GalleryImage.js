import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// image buttons used to launch lightbox
const GalleryImage = ({ photo, first, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={!first ? 'my-0' : 'mb-[5px]'}
    >
      <GatsbyImage
        image={photo.thumbFluid}
        alt={photo.alt}
      />
    </button>
  );
};

export default GalleryImage