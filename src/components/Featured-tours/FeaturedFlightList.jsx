import React from 'react'
import FlightCard from '../../shared/FlightCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'

const FeaturedFlightList = () => {
   const {data: featuredFlights, loading, error} = useFetch(`${BASE_URL}/flights/search/getFeaturedFlight`)
   // console.log(featuredFlights)

   return (
      <>
         { loading && <h4>Loading.....</h4> }
         { error && <h4>{error}</h4> }
         {
            !loading && !error &&
            featuredFlights?.map(flight => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={flight._id}>
                  <FlightCard flight={flight} />
               </Col>
            ))
         }
      </>
   )
}

export default FeaturedFlightList 