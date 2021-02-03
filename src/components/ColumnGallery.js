import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import Gallery from 'react-photo-gallery'

import GalleryImage from './GalleryImage'

const imageRenderer = ({ index, left, top, photo }) => (
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
    caption: <div className="SRLCustomCaption" style={{ fontFamily: "DM Sans, sans-serif"}}>{photo.caption}</div>
  }))

  return (
    <React.Fragment>
    <SRLWrapper customCaptions={customCaptions}>
      {imageArray.length > 0 &&
        <Gallery
          photos={imageArray}
          direction={'column'}
          columns={2}
          renderImage={imageRenderer}
        />}
    </SRLWrapper>
    </React.Fragment>
    
  )
};

export default ColumnGallery