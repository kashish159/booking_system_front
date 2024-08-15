// import React from 'react'
// import { Card, CardBody } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import './hotel-card.css'
// import calculateAvgRating from '../utils/avgRating'

// const HotelCard = ({ hotel }) => {

//    const { _id, title, city, photo, price, featured, reviews } = hotel
//    // const { _id, hotelname, city, price,rating, featured} = hotel

//    // const { totalRating, avgRating } = calculateAvgRating(reviews)

//    if (!featured) {
//       return null;
//    }

//    return (
//       <div className='hotel__card'>
//          <Card className='card1'>
//             <div className="tour1__img">
//                {/* <img src={photo} alt="tour-img" /> */}
//                {featured && <span>Featured</span>}
//             </div>

//             <CardBody className='card__body px-3'>
//                <div className="card__top d-flex align-items-center justify-content-between">
//                   <span className="tour__location d-flex align-items-center gap-1">
//                      <i class='ri-map-pin-line'></i> {city}
//                   </span>
//                   {/* <span className="tour__rating d-flex align-items-center gap-1">
//                      <i class='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
//                      {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}

//                   </span> */}
//                </div>

//                <h5 className='tour1__title'><Link to={`/hotels/${_id}`}>{title}</Link></h5>

//                <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
//                   <h5>Rs{price} <span> /per person</span></h5>
//                   {/* <h5>Rating {rating} </h5> */}

//                   {/* <button className=' booking__btn'>
//                      <Link to={`/tours/${_id}`}>Book Now</Link>
//                   </button> */}
//                   <Link to={`/hotels/${_id}`}>
//                      <button className=' booking1__btn'>Book Now</button>
//                   </Link>
//                </div>
//             </CardBody>
//          </Card>
//       </div>
//    )
// }

// export default HotelCard

import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './hotel-card.css';
import calculateAvgRating from '../utils/avgRating';

const HotelCard = ({ hotel }) => {
   const { _id, title, city, photo, price, featured, reviews } = hotel;

   // If the hotel is not featured, do not render anything
   if (featured) {

   // const { totalRating, avgRating } = calculateAvgRating(reviews);

      return (
         <div className='hotel__card'>
            <Card className='card1'>
               <div className="tour1__img">
                  {/* <img src={photo} alt="tour-img" /> */}
                  {featured && <span>Featured</span>}
               </div>

               <CardBody className='card__body px-3'>
                  <div className="card__top d-flex align-items-center justify-content-between">
                     <span className="tour__location d-flex align-items-center gap-1">
                        <i className='ri-map-pin-line'></i> {city}
                     </span>
                     {/* <span className="tour__rating d-flex align-items-center gap-1">
                        <i className='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}
                     </span> */}
                  </div>

                  <h5 className='tour1__title'><Link to={`/hotels/${_id}`}>{title}</Link></h5>

                  <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                     <h5>Rs{price} <span> /per person</span></h5>
                     {/* <h5>Rating {rating} </h5> */}

                     {/* <button className=' booking__btn'>
                        <Link to={`/tours/${_id}`}>Book Now</Link>
                     </button> */}
                     <Link to={`/hotels/${_id}`}>
                        <button className=' booking1__btn'>Book Now</button>
                     </Link>
                  </div>
               </CardBody>
            </Card>
         </div>
      );
   }
   return null;
};

export default HotelCard;

