import React from "react"

import "../../styles/hero.css"

const ImageOffset = ({data}) => {
  const src     = data.src,
        offset  = data.offset

  return (
    <div className={`image-offset ${offset ? 'offset' : ''}`} style={{backgroundImage: `url("${src}")`}}>
      <span className="scroll-indicator"></span>
    </div>
  )
}

export default ImageOffset
