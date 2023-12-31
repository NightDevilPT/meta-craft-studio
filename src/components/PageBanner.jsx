import Image from 'next/image'
import React from 'react'


const PageBanner = ({title,image }) => {
  return (
    <div className="page-banner-section">
        <Image
          className="page-banner-img"
          src={image}
          alt="about-banner-image"
        />
        <div className="page-banner-opacity"></div>
        <div className='container'><h1 className="page-banner-title">{title}</h1></div>
      </div>
  )
}

export default PageBanner