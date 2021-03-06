import React from 'react'
import Img from 'gatsby-image'
import { SRLWrapper } from "simple-react-lightbox"
import Gallery from 'react-photo-gallery'
import GalleryImage from '../components/GalleryImage'

const imageRenderer = ({ index, left, top, key, photo }) => (
  <GalleryImage 
    index={index}
    left={left}
    top={top}
    key={index+1}
    photo={photo}
  />
);

const ColumnGallery = (images) => {
  // Extracts image array from object
  const imageArray = images.photos
  // Creates captions array
  const customCaptions = imageArray.map((photo, index) => ({
    id: (index*2)+1,
    caption: <div className="SRLCustomCaption">{photo.caption}</div>
  }))

  // First photo is handled differently than rest of image array
  const firstImage = imageArray[0]
  // This variable passes image array minus first image to gallery component
  const slicedImages = imageArray.slice(1)

  return (
    <SRLWrapper customCaptions={customCaptions}>
      <button className="button-photo main-photo" data-attribute="SRL" id="0" >
        <Img
          fluid={firstImage.fluid}
          alt={firstImage.alt}
          caption={firstImage.caption}
          key="0"
        />
      </button>
      {imageArray.length > 0 &&
        <Gallery
          photos={slicedImages}
          direction={'column'}
          columns={4}
          renderImage={imageRenderer}
        />}
    </SRLWrapper>
  )
};

export default ColumnGallery