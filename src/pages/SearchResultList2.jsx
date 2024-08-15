import React, { useState } from 'react'
import FlightsCommonSection from './../shared/FlightsCommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import FlightCard from '../shared/FlightCard'
import Newsletter from './../shared/Newsletter'


const SearchResultList2 = () => {
   const location = useLocation()

   const [data] = useState(location.state)

   return (
      <>
         <FlightsCommonSection title={'Flight Search Result'} />
         <section>
            <Container>
               <Row>
                  {
                     data.length === 0 ? <h4 className='text-center'>No Flight Found</h4> : data?.map(flight => 
                     <Col lg='3' className='mb-4' key={flight._id}> <FlightCard flight={flight}/> </Col>)
                  }
                 
               </Row>
            </Container>
         </section>
         <Newsletter />
      </>
   )
}

export default SearchResultList2