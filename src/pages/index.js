import BannerFrame from '@/components/BannerFrame'
import Image from 'next/image'
import React from 'react'

import gif from "../../public/gif-video.gif";

const index = () => {
  return (
    <div className='main-section'>
      <BannerFrame />

      <div className='home-intro-section'>
        <div className='home-intro-gif'>
          <Image src={gif} alt='home-intro-gif' />
        </div>
        <div className='home-intro-data-section'>
          <h3 className='home-intro-subtitle'>Welcome To</h3> 
          <h1 className='home-intro-title'>Metal Craft Studio</h1>
          <span className='home-intro-description'>Metal Craft Studio (MCS), a Narela Delhi-based company, Provides high-quality metal job work services to those who manufacture Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles Parts, Lift & Elevators, Electricity Panels and Medical equipment within Delhi-NCR. MCS is also a prominent manufacturer and supplier of Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets etc with PAN India presence. We are one of the few businesses in Delhi with a CNC laser cutting system that can design and cut various metals, including brass, copper, zinc, and aluminium, with a bed size of up to 2*4 metres.</span>
          <button className='home-intro-readmore-btn'>Read More</button>
        </div>
       
      </div>
    
      <div className='home-product-section'>
        
      </div>
    </div>
  )
}

export default index