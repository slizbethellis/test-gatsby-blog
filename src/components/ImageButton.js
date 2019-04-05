import React from 'react'

const ImageButton = ({ index, onClick, photo, margin, direction, top, left}) => {
  const imgStyle = { margin: margin };
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  return (
    <div key={index}>
      <button
        className="button-photo thumbnail-pics"
        onClick={(e) => onClick(e, {index: index + 1})} >
        <img
          style={imgStyle}
          {...photo}
          alt={photo.alt}
        />
      </button>
    </div>
  )
}

export default ImageButton