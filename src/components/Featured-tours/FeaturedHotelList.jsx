import React from 'react'
import HotelCard from '../../shared/HotelCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'

const FeaturedHotelList = () => {
   const {data: featuredHotels, loading, error} = useFetch(`${BASE_URL}/hotels/search/getFeaturedHotel`)
   // console.log(featuredTours)

   return (
      <>
         { loading && <h4>Loading.....</h4> }
         { error && <h4>{error}</h4> }
         {
            !loading && !error &&
            featuredHotels?.map(hotel => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={hotel._id}>
                  <HotelCard hotel={hotel} />
               </Col>
            ))
         }
      </>
   )
}

export default FeaturedHotelList 