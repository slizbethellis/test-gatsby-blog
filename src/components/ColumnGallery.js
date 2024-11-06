import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MasonryPhotoAlbum } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import 'react-photo-album/masonry.css'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'

import GalleryImage from './GalleryImage'

const ColumnGallery = (images) => {
  const [index, setIndex] = useState(-1)

  const renderCustomSlide = ({ slide }) => {
    return (
      <div className='flex flex-row content-center m-1.5 md:m-3 max-w-full h-full'>
        <GatsbyImage 
          image={slide.fluid}
          alt={slide.alt}
          objectFit="contain"
        />
      </div>
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
        <MasonryPhotoAlbum
          photos={slicedImages}
          spacing={5}
          columns={4}
          render={{ photo: ({ onClick }, { photo }) => (
            <GalleryImage 
              photo={photo}
              onClick={() => setIndex(photo.key)}
              key={`thumb ${photo.key}`}
            />
            ),
          }}
        />
      } 
      <Lightbox 
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={imageArray}
        counter={{ container: { style: { top: 0, bottom: "unset", fontFamily: "Nunito Variable" }}}}
        fullscreen={{ auto: false }}
        plugins={[Counter, Fullscreen]}
        carousel={{ finite: "true" }}
        render={{
          slide: renderCustomSlide
        }}
      />
    </React.Fragment>
  )
};

export default ColumnGallery