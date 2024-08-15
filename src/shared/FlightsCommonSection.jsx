import React from 'react'
import './flightscommon-section.css'
import { Container, Row, Col } from 'reactstrap'

const FlightsCommonSection = ({ title }) => {
   return (
      <section className="flightcommon__section">
         <Container>
            <Row>
               <Col lg='12'>
                  <h1>{title}</h1>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default FlightsCommonSection