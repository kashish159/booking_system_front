import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './hotel-card.css';
import {UilArrowRight } from '@iconscout/react-unicons';
import * as Unicons from '@iconscout/react-unicons';
// import calculateAvgRating from '../utils/avgRating';

const FlightCard = ({ flight }) => {
   const { _id, title, from, to, price, featured, flight_no} = flight;

   // If the hotel is not featured, do not render anything
   if (featured) {


      return (
         <div className='hotel__card'>
            <Card className='card1'>
               <div className="tour1__img">
                  {featured && <span>Frequented</span>}
               </div>

               <CardBody className='card__body px-3'>
                  <div className="card__top d-flex align-items-center justify-content-between">
                     <span className="tour__location d-flex align-items-center gap-1">
                        <i className='ri-map-pin-line'></i> {from}
                        <i className=''></i> <UilArrowRight />
                        <i className='ri-map-pin-line'></i> {to}
                        {/* <i className=''></i> {flight_no} */}
                     </span>
                  </div>

                  <h5 className='tour1__title'><Link to={`/flights/${_id}`}>{title}</Link></h5>

                  <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                     <h5>Rs{price} <span> /per person</span></h5>
        
                     <Link to={`/flights/${_id}`}>
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

export default FlightCard;

