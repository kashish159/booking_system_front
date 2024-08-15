import React from 'react'
import './hotelscommon-section.css'
import { Container, Row, Col } from 'reactstrap'

const HotelsCommonSection = ({ title }) => {
   return (
      <section className="hotelcommon__section">
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

export default HotelsCommonSection