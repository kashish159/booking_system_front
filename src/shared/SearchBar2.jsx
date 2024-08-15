import React, { useRef } from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

const SearchBar2 = () => {
   const fromRef = useRef('')
   const toRef = useRef('')
//    const distanceRef = useRef(0)
//    const maxGroupSizeRef = useRef(0)
   const navigate = useNavigate()

   const searchHandler = async() => {
      const from = fromRef.current.value
      const to = toRef.current.value
    //   const distance = distanceRef.current.value
    //   const maxGroupSize = maxGroupSizeRef.current.value

      if (from === '' || to ==='') {
         return alert('All fields are required!')
      }
    //   if (location === '') {
    //      return alert('All fields are required!')
    //   }
    // getFlightBySearch
    //   const res = await fetch(`${BASE_URL}/flights/search/getFlightBySearch?city=${to}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
      const res = await fetch(`${BASE_URL}/flights/search/getFlightBySearch?from=${from}&to=${to}`)
    //   const res = await fetch(`${BASE_URL}/hotels/search/getHotelBySearch?city=${location}`)
      
      if(!res.ok) alert('Something went wrong')

      const result = await res.json()

    //   navigate(`/flights/search?city=${to}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data})
      navigate(`/flights/search?from=${from}&to=${to}`, {state: result.data})
    //   navigate(`/hotels/search?city=${location}`, {state: result.data})
   }

   return <Col lg="12">
      <div className="search__bar">
         <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class='ri-map-pin-line'></i></span>
               <div>
                  <h6>From</h6>
                  <input type="text" placeholder='Departing place?' ref={fromRef} />
               </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class='ri-map-pin-line'></i></span>
               <div>
                  <h6>To</h6>
                  <input type="text" placeholder='Arriving place?' ref={toRef} />
               </div>
            </FormGroup>
            {/* <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class='ri-map-pin-time-line'></i></span>
               <div>
                  <h6>Distance</h6>
                  <input type="number" placeholder='Distance k/m' ref={distanceRef} />
               </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
               <span><i class='ri-group-line'></i></span>
               <div>
                  <h6>Max People</h6>
                  <input type="number" placeholder='0' ref={maxGroupSizeRef} />
               </div>
            </FormGroup> */}

            <span className='search__icon' type='submit' onClick={searchHandler}>
               <i class='ri-search-line'></i>
            </span>
         </Form>
      </div>
   </Col>
}

export default SearchBar2