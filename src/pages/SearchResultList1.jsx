import React, { useState } from 'react'
import HotelsCommonSection from './../shared/HotelsCommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import HotelCard from '../shared/HotelCard'
import Newsletter from './../shared/Newsletter'


const SearchResultList1 = () => {
   const location = useLocation()

   const [data] = useState(location.state)

   return (
      <>
         <HotelsCommonSection title={'Hotel Search Result'} />
         <section>
            <Container>
               <Row>
                  {
                     data.length === 0 ? <h4 className='text-center'>No Hotel Found</h4> : data?.map(hotel => 
                     <Col lg='3' className='mb-4' key={hotel._id}> <HotelCard hotel={hotel}/> </Col>)
                  }
               </Row>
            </Container>
         </section>
         <Newsletter />
      </>
   )
}

export default SearchResultList1