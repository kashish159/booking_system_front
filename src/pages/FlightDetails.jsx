import React, {  useEffect, useContext } from 'react'
import '../styles/tour-details.css'
// import tourData from '../assets/data/tours'
import { Container, Row, Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
// import calculateAvgRating from '../utils/avgRating'
// import avatar from '../assets/images/avatar.jpg'
import Booking2 from '../components/Booking/Booking2'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'

const FlightDetails = () => {
   const { id } = useParams()

   const { user } = useContext(AuthContext)

   // fetch data from database
   const { data: flight, loading, error } = useFetch(`${BASE_URL}/flights/${id}`)

   // const { photo, title, desc, price, city, address, distance, maxGroupSize } = flight  // CHECK THIS ONCE !!!!!!!!!!!
   const { title, price, from, to, departure, flight_no } = flight  // CHECK THIS ONCE !!!!!!!!!!!
   // const {flightname,price, city, address, distance, maxGroupSize } = flight
   // const {title,price, city, address } = flight




   useEffect(() => {
      window.scrollTo(0, 0)
   }, [flight])

   return (
      <section>
         <Container>
            {loading && <h4 className='text-center pt-5'>LOADING.........</h4>}
            {error && <h4 className='text-center pt-5'>{error}</h4>}
            {
               !loading && !error &&
               <Row>
                  <Col lg='8'>
                     <div className="tour__content">
                        {/* <img src={photo} alt="" style={{width: '855px',height:'auto'}}/> */}

                        <div className="tour__info">
                           <h2>{title}</h2>
                           <div className="d-flex align-items-center gap-5">

                              <span><i class='ri-map-pin-fill'></i> {departure}</span>
                           </div>

                           <div className="tour__extra-details">
                              <span><i class='ri-map-pin-2-line'></i> {from}</span>
                              <span><i class='ri-map-pin-2-line'></i> {to}</span>
                              <span><i class='ri-money-dollar-circle-line'></i> {price}/ per person</span>
                              <span><i class='ri-map-pin-time-line'></i> {flight_no} </span>
                              {/* <span><i class='ri-group-line'></i> {maxGroupSize} people</span> */}
                           </div>
                           {/* <h5>Description</h5>
                           <p>{desc}</p> */}
                        </div>
                     </div>
                  </Col>

                  <Col lg='4'>
                     <Booking2 flight={flight}  />
                  </Col>
               </Row>
            }
         </Container>
         <Newsletter />
      </section>

   )
}

export default FlightDetails