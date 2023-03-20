import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Box } from 'grommet'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import 'yet-another-react-lightbox/styles.css'

import GalleryImage from './GalleryImage'

const ColumnGallery = (images) => {
  const [index, setIndex] = useState(-1)

  const renderAlbumThumb = ({ photo }) => (
    <GalleryImage 
      photo={photo}
      onClick={() => setIndex(photo.key)}
    />
  )

  const renderCustomSlide = (slide) => {
    return (
      <Box
        alignContent="center"
        direction="row"
        margin="small"
        height='100%'
      >
        <GatsbyImage 
          image={slide.fluid}
          alt={slide.alt}
          objectFit="contain"
        />
      </Box>
    )
  }

  // Extracts image array from object
  const imageArray = images.images

  // This variable passes image array minus first image to gallery component
  const slicedImages = imageArray.slice(1)

  return (
    <React.Fragment>
      <GalleryImage
        key={imageArray[0].key}
        photo={imageArray[0]}
        alt={imageArray[0].alt}
        first
        onClick={() => setIndex(imageArray[0].key)}
      />
      {slicedImages.length > 0 &&
        <PhotoAlbum
          layout='masonry'
          photos={slicedImages}
          spacing={5}
          columns={4}
          renderPhoto={renderAlbumThumb}
        />
      } 
      <Lightbox 
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={imageArray}
        plugins={[Fullscreen]}
        carousel={{ finite: "true" }}
        render={{
          slide: renderCustomSlide
        }}
      />
    </React.Fragment>
  )
};

export default ColumnGallery