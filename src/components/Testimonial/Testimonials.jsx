import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/tour-img01.jpg'
import ava02 from '../../assets/images/tour-img08.jpg'
import ava03 from '../../assets/images/tour-img03.jpg'
import ava04 from '../../assets/images/tour-img04.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1500,
      swipeToSlide:true,
      autoplaySpeed:3000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
     

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-75 h-75 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 pt-6'>Kerala</h6>
            
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
      

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-75 h-75 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Amsterdam</h6>
        
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
       
         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} className='w-75 h-75 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Abu Dhabi</h6>
              
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
       
         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-75 h-75 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Thailand</h6>
           
            </div>
         </div> 
      </div>

   </Slider>
}

export default Testimonials