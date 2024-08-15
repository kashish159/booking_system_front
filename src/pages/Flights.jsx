// import flight from '../assets/images/flights.jpg'
// import taxi from '../assets/images/taxi.jpg'
// import food from '../assets/images/food.jpg'
// import trident from '../assets/images/trident.jpg'
// import paris from '../assets/images/paris.jpg';
// import melbourne from '../assets/images/melbourne.jpg';
// import seoul from '../assets/images/seoul.jpg';
// import london from '../assets/images/london.jpg';
// import amsterdam from '../assets/images/amsterdam.jpg';
// import india from '../assets/images/india.jpg';
// import madrid from '../assets/images/madrid.jpg';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function Flights(){

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 400,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       };

//     return(
//         <div className="flight-section">
//             <div className="Main--2_custom ">
//                 <h1 className="text-3xl font-bold section__subtitle">Offers</h1>
//                 <h3 className="text-xl font-bold pb-4">Deals and special offers for you</h3>
//             </div>
//             <div className="Main-3">
//                 <div className="slide-container">
//                 <Slider {...settings}>
//                     <div className="card">
//                     <div className="card-image">
//                         <img src={flight} alt="Flight" className="card-img" />
//                         <h2 className="name">30% off on flights to special destinations!</h2>
//                     </div>
//                     </div>
//                     <div className="card">
//                     <div className="card-image">
//                         <img src={taxi} alt="Taxi" className="card-img" />
//                         <h2 className="name">Upto 15kms off on your first ride!</h2>
//                     </div>
//                     </div>
//                     <div className="card">
//                     <div className="card-image">
//                         <img src={food} alt="Food" className="card-img" />
//                         <h2 className="name">Free meals in hotels upto Rs 3000 !</h2>
//                     </div>
//                     </div>
//                     <div className="card">
//                     <div className="card-image">
//                         <img src={trident} alt="Trident" className="card-img" />
//                         <h2 className="name">Upto 30% savings on trident hotels!</h2>
//                     </div>
//                     </div>
//                     {/* Add more slides here */}
//                 </Slider>
//                 </div>
//             </div>
//             <div className='Main--2_custom'>
//                 <h1 className='text-3xl font-bold section__subtitle'>Explore the world</h1>
//                 <h3 className='text-md font-bold pb-4 pt-1'>These popular destinations have a lot to offer</h3>
//             </div>
//             <div className='Main-3'>
//                 <div className="slide-container">
//                         <Slider {...settings}>
//                             <div className="card">
//                                 <div className="card-image">
//                                     <img src={paris} alt="Paris" className="card-img" />
//                                     <h2 className="name">Paris</h2>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <div className="card-image">
//                                     <img src={melbourne} alt="Melbourne" className="card-img" />
//                                     <h2 className="name text-2xl m-2">Melbourne</h2>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <div className="card-image">
//                                     <img src={seoul} alt="Seoul" className="card-img" />
//                                     <h2 className="name text-2xl m-2">Seoul</h2>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <div className="card-image">
//                                     <img src={london} alt="London" className="card-img" />
//                                     <h2 className="name text-2xl m-2">London</h2>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <div className="card-image">
//                                     <img src={amsterdam} alt="Amsterdam" className="card-img" />
//                                     <h2 className="name text-2xl m-2">Amsterdam</h2>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <div className="card-image">
//                                     <img src={india} alt="India" className="card-img" />
//                                     <h2 className="name text-2xl m-2">India</h2>
//                                 </div>
//                             </div>
//                             <div className="card">
//                                 <div className="card-image">
//                                     <img src={madrid} alt="Madrid" className="card-img" />
//                                     <h2 className="name text-2xl m-2">Madrid</h2>
//                                 </div>
//                             </div>
//                             {/* Add more slides here */}
//                         </Slider>
//                 </div>
//                 </div>
//         </div>
//     )
// }

// export default Flights;

import React, { useState, useEffect } from 'react'
import FlightsCommonSection from '../shared/FlightsCommonSection'
import '../styles/tour.css'
import FlightCard from './../shared/FlightCard'
import SearchBar2 from './../shared/SearchBar2'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
// import { getFeaturedHotelCount } from '../../../backend/Controllers/hotelControllers'

function Flights(){

      const [pageCount, setPageCount] = useState(0)
      const [page, setPage] = useState('')
      // const {featured}=hotel;
      const { data: flights, loading, error } = useFetch(`${BASE_URL}/flights?page=${page}`)
      const { data: FlightCount } = useFetch(`${BASE_URL}/flights/search/getFlightCount`)
   
      useEffect(() => {
         console.log(FlightCount)
         const pages = Math.ceil(FlightCount / 500)
         setPageCount(pages)
         // window.scrollTo(0,0)
         // console.log(pageCount)
      }, [page, FlightCount, flights])

    return(
        <div className="hotel-section">
            <FlightsCommonSection title={"All Flights"} />
            <section>
                <Container>
                    <Row>
                        <SearchBar2 />
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
            <Container>
               {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     {
                        flights?.map(flight => (<Col lg='3' md='6' sm='6' className='mb-4' key={flight._id}> <FlightCard flight={flight} /> </Col>))
                     }

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           
                              {[...Array(pageCount).keys()].map(number => (
                                 <span key={number} onClick={() => setPage(number)}
                                    className={page === number ? 'active__page' : ''}
                                 >
                                    {number + 1}
                                 </span>
                              ))}
                        </div>
                     </Col>
                  </Row>
               }
            </Container>
         </section>
         <Newsletter />
        </div>
    )
}

export default Flights;