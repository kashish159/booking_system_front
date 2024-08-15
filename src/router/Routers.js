import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import ThankYoue from '../pages/ThankYoue'
import ThankYou1 from '../pages/ThankYou1'
import ThankYou1e from '../pages/ThankYou1e'
import ThankYou2 from '../pages/ThankYou2'
import ThankYou2e from '../pages/ThankYou2e'
import Home from './../pages/Home'
import Login from './../pages/Login'
import YourBookings from '../components/YourBookings/YourBookings'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import SearchResultList1 from './../pages/SearchResultList1'
import SearchResultList2 from './../pages/SearchResultList2'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import Hotels from './../pages/Hotels'
import HotelDetails from './../pages/HotelDetails'
import Flights from './../pages/Flights'
import FlightDetails from './../pages/FlightDetails'
import AboutUs from './../components/About/AboutUs'
import EditBooking from '../components/EditBooking/EditBooking'
import EditBooking1 from '../components/EditBooking/EditBooking1'
import EditBooking2 from '../components/EditBooking/EditBooking2'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/hotels' element={<Hotels/>} />
         <Route path='/hotels/:id' element={<HotelDetails/>} />
         <Route path='/flights' element={<Flights/>} />
         <Route path='/flights/:id' element={<FlightDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/thank-youe' element={<ThankYoue/>} />
         <Route path='/thankyou' element={<ThankYou1/>} />
         <Route path='/thankyoue' element={<ThankYou1e/>} />
         <Route path='/Thankyouu' element={<ThankYou2/>} />
         <Route path='/Thankyouue' element={<ThankYou2e/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path='/hotels/search' element={<SearchResultList1/>} />
         <Route path='/flights/search' element={<SearchResultList2/>} />
         <Route path='/about' element={<AboutUs/>} />
         <Route path='/your-bookings' element={<YourBookings/>} />
         <Route path="/edit-booking/:id" element={<EditBooking/>} />
         <Route path="/edit-hotel-booking/:id" element={<EditBooking1/>} />
         <Route path="/edit-flight-booking/:id" element={<EditBooking2/>} />
         
         
      </Routes>
   )
}

export default Routers