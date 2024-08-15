import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './galleryImage'

const MasonryImagesGallery = () => {
   return (
      <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:1, 992:4}}>
         <Masonry gutter='1rem'>
            {
               galleryImages.map((item, index) => (
                  <img className='masonry__img' src={item} key={index} alt="" 
                  style={{
                     'width':'100%',
                     'display':'block',
                     'borderRadius':'10px',
                     'transform': 'scale(1)', /* Disable scaling on hover */
                     'transition': 'transform 0.3s ease',}}/>
               ))
            }
         </Masonry>
      </ResponsiveMasonry>
   )
}

export default MasonryImagesGallery