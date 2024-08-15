import { useParams } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'
function EditBooking({}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState({
        fullName: '',
        phone: '',
        bookAt: '',
        guestSize: 0,
      // initialize your state properties here
    });
    const [tour, setTour] = useState({
        price: 0,
    });
  
    useEffect(() => {
      const fetchBookingDetails = async () => {
        try {
          if (!user || user === undefined || user === null) {
            return alert('Please sign in');
          }
  
          const token = localStorage.getItem('userToken'); // You might want to handle this more securely
  
          const response = await fetch(`${BASE_URL}/booking/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            credentials: 'include',
          });
  
          if (response.ok) {
            const bookingdata = await response.json();
            setBooking(bookingdata.data);
            console.log(bookingdata.data); 
            const tourId = bookingdata.data.tourId; // Make sure to adjust this based on your data structure
            const tourResponse = await fetch(`${BASE_URL}/tours/${tourId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              credentials: 'include',
            });
  
            if (tourResponse.ok) {
              const tourData = await tourResponse.json();
              console.log('Tour Data:', tourData.data);
            //   setTour(tourData.data);
              const tourPrice = tourData.data.price; // Adjust based on the actual structure
              setTour({ ...tourData.data, price: tourPrice });

            } else {
              console.error('Failed to fetch tour details:', tourResponse.statusText);
          } 
        }
          else {
            console.error('Failed to fetch booking details:', response.statusText);
            // Handle error appropriately
          }
        } catch (error) {
          console.error('Error fetching booking details:', error);
          // Handle error appropriately
        }
      };
  
      fetchBookingDetails();
    }, [id, user]); // Include 'id' and 'user' as dependencies to re-fetch data when they change
  
    const handleChange = (e) => {
      setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const serviceFee = 300;
    const totalAmount = Number(tour.price) * Number(booking.guestSize) + Number(serviceFee);
  
    const handleClick = async (e) => {
      e.preventDefault();
      console.log('Request Payload:', JSON.stringify(booking));
  
      try {
        if (!user || user === undefined || user === null) {
          return alert('Please sign in');
        }
        const token = localStorage.getItem('userToken'); 
        const res = await fetch(`${BASE_URL}/booking/${id}`, {
          method: 'PUT', // Assuming you have a PUT endpoint for updating bookings
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },    
          credentials: 'include',
          body: JSON.stringify(booking),
        });
  
        const result = await res.json();
        console.log('Response:', result);
  
        if (!res.ok) {
          return alert(result.message);
        }
  
        navigate('/thank-youe');
      } catch (error) {
        alert(error.message);
      }
    };

  // Fetch booking details based on the ID
  // You can use this ID to make a request to your server and get the booking data

  // ... fetch booking details logic ...

  return (
    <div className='bookingg'>
       <div className="booking__top d-flex align-items-center justify-content-between">
          <h3>Rs{tour.price} <span>/per person</span></h3>
          {/* <span className="tour__rating d-flex align-items-center">
             <i class='ri-star-fill' style={{ 'color': 'var(--secondary-color)' }}></i>
             {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span> */}
       </div>

       {/* =============== BOOKING FORM START ============== */}
       <div className="booking__form">
          <h5>Details</h5>
          <Form className='booking__info-form' onSubmit={handleClick}>
             <FormGroup>
                <input type="text" placeholder='Full Name' id='fullName' value={booking.fullName} required
                   onChange={handleChange} />
             </FormGroup>
             <FormGroup>
                <input type="tel" placeholder='Phone' id='phone' value={booking.phone} required
                   onChange={handleChange} />
             </FormGroup>
             <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id='bookAt' required
                   onChange={handleChange} />
                <input type="number" placeholder='Guest' id='guestSize' value={booking.guestSize} required
                   onChange={handleChange} />
             </FormGroup>
          </Form>
       </div>
       {/* =============== BOOKING FORM END ================ */}


       {/* =============== BOOKING BOTTOM ================ */}
       <div className="booking__bottom">
          <ListGroup>
             <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>Rs{tour.price} <i class='ri-close-line'></i> 1 person</h5>
                <span> Rs {tour.price}</span>
             </ListGroupItem>
             <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>Rs{serviceFee}</span>
             </ListGroupItem>
             <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>Rs{totalAmount}</span>
             </ListGroupItem>
          </ListGroup>

          <Button className='btn tertiary__btn w-100 mt-4' onClick={handleClick}>Update Now</Button>
       </div>
    </div>
 )
}

export default EditBooking;