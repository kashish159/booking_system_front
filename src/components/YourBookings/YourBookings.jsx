import BookingListRow from "./BookingListRow";
import BookingListRow1 from "./BookingListRow1";
import BookingListRow2 from "./BookingListRow2";
import { BASE_URL } from '../../utils/config'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useEffect,useState, useContext } from 'react'


import React from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [bookings1, setBookings1] = useState([]);
  const [bookings2, setBookings2] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();

  const { user } = useContext(AuthContext)
  const [userId, setUserId] = useState(null);
    //   const [bookingToDelete, setBookingToDelete] = useState(null);
  useEffect(() => {
   // Check if the user is available
   if (user && user._id) {
     setUserId(user._id);
     console.log(user._id)
   }
  }, [user]); 

  const deleteBooking = async (bookingId) => {
    try {
    const token = localStorage.getItem('userToken');

    const response = await fetch(`${BASE_URL}/booking/${bookingId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
    });

    if (response.ok) {
        // Remove the deleted booking from the state
        setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== bookingId)
        );
    } else {
        console.error('Failed to delete booking:', response.statusText);
    }
    } catch (error) {
    console.error('Error deleting booking:', error);
    }
    try {
    const token = localStorage.getItem('userToken');

    const response1 = await fetch(`${BASE_URL}/booking1/${bookingId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
    });

    if (response1.ok) {
        // Remove the deleted booking from the state
        setBookings1((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== bookingId)
        );
    } else {
        console.error('Failed to delete booking:', response1.statusText);
    }
    } catch (error) {
    console.error('Error deleting booking:', error);
    }
    try {
    const token = localStorage.getItem('userToken');

    const response2 = await fetch(`${BASE_URL}/booking2/${bookingId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
    });

    if (response2.ok) {
        // Remove the deleted booking from the state
        setBookings2((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== bookingId)
        );
    } else {
        console.error('Failed to delete booking:', response2.statusText);
    }
    } catch (error) {
    console.error('Error deleting booking:', error);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('userToken');
        // console.log(token)
        
        // Assuming you store the user token in localStorage
        const response = await fetch (`${BASE_URL}/booking?userId=${userId}`, {
        // const response = await fetch (`${BASE_URL}/booking/` + {userId}, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                
                'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setBookings(data.data); // Assuming your data structure has a 'data' field
        } else {
          console.error('Failed to fetch bookings:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
      try {
        const token = localStorage.getItem('userToken');
        // console.log(token)
        
        // Assuming you store the user token in localStorage
        const response1 = await fetch (`${BASE_URL}/booking1?userId=${userId}`, {
        // const response = await fetch (`${BASE_URL}/booking/` + {userId}, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                
                'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (response1.ok) {
          const data = await response1.json();
          setBookings1(data.data); // Assuming your data structure has a 'data' field
        } else {
          console.error('Failed to fetch bookings:', response1.statusText);
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
      try {
        // const token = localStorage.getItem('userToken');
        // console.log(token)
        
        // Assuming you store the user token in localStorage
        const response2 = await fetch (`${BASE_URL}/booking2?userId=${userId}`, {
        // const response = await fetch (`${BASE_URL}/booking/` + {userId}, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                
                // 'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (response2.ok) {
          const data = await response2.json();
          setBookings2(data.data); // Assuming your data structure has a 'data' field
        } else {
          console.error('Failed to fetch bookings:', response2.statusText);
        }
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

/////////////////

    if (userId) {
        deleteBooking(userId);
    }

    if (userId){
        console.log('Fetching bookings for user ID:', userId);
        fetchBookings();
    }
  }, [userId]); // Empty dependency array means this effect runs once when the component mounts

    

    // if (userId){
    //     deleteBooking();
    // }

  if (loading) {
    return <center><p>Loading...</p></center>;
  }

  const DeleteListItems = (bookings,BookingListRow) => {
    return bookings.map((val,ind)=>{  //[{_id,name,email,rollno},{},{}]
        return <BookingListRow key={ind} obj={val}  navigate={navigate} onDelete={deleteBooking} />
    })
  } 
//   const ListItems = () => {
//     return bookings.map((val,ind)=>{  //[{_id,name,email,rollno},{},{}]
//         return <BookingListRow key={ind} obj={val} />
//     })
//   } 
  const DeleteListItems1 = (bookings1,BookingListRow1) => {
    return bookings1.map((val,ind)=>{  //[{_id,name,email,rollno},{},{}]
        return <BookingListRow1 key={ind} obj={val} navigate={navigate} onDelete={deleteBooking} />
    })
  } 
  const DeleteListItems2 = () => {
    return bookings2.map((val,ind)=>{  //[{_id,name,email,rollno},{},{}]
        return <BookingListRow2 key={ind} obj={val} navigate={navigate} onDelete={deleteBooking} />
    })
  } 

  return (
    
    // <div>
    //   <h2>Your Tour Bookings</h2>
    //   {bookings.length === 0 ? (
    //     <p>No bookings found.</p>
    //   ) : (
    //     <ul>
    //       {bookings.map((booking) => (
    //         <li key={booking._id}>
    //           {/* Display booking information here */}
    //           {booking.bookAt}
    //           {booking.tourName}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>

    <div>
        <h1 className="text-center my-4 font-weight-bold text-primary text-mark mx-auto  p-3 mb-3 bg-white rounded">Your Tours</h1>
    <table style={{maxWidth:"60%"}} class="mt-3 text-center mx-auto table table-primary table-striped table-bordered">
        <thead>
            <tr style={{}} className="px-5 mx-5">
                <th class="text-center">Tour Name</th>
                <th class="text-center">Name</th>
                <th class="text-center">Phone</th>
                <th class="text-center">Date</th>
                <th class="text-center">Guests</th>
                <th class="text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            {/* {ListItems()} */}
            {DeleteListItems(bookings,BookingListRow)}
        </tbody>
    </table>
    <h1 className="text-center my-4 font-weight-bold text-primary text-mark mx-auto  p-3 mb-3 bg-white rounded">Your Hotels</h1>
    <table style={{maxWidth:"60%"}} class="mt-3 text-center mx-auto table table-primary table-striped table-bordered">
        <thead>
            <tr style={{}} className="px-5 mx-5">
                <th class="text-center">Hotel</th>
                <th class="text-center">Name</th>
                <th class="text-center">Phone</th>
                <th class="text-center">Date</th>
                <th class="text-center">Guests</th>
                <th class="text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            {DeleteListItems1(bookings1,BookingListRow1)}
        </tbody>
    </table>
    <h1 className="text-center my-4 font-weight-bold text-primary text-mark mx-auto  p-3 mb-3 bg-white rounded">Your Flights</h1>

    <table style={{maxWidth:"60%"}} class="mt-3 text-center mx-auto table table-primary table-striped table-bordered">
        <thead>
            <tr style={{}} className="px-5 mx-5">
                <th class="text-center">Name</th>
                <th class="text-center">Flight Name</th>
                <th class="text-center">From</th>
                <th class="text-center">To</th>
                <th class="text-center">Departure</th>
                <th class="text-center">Phone</th>
                {/* <th class="text-center">Date</th> */}
                <th class="text-center">Guests</th>
                <th class="text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
        {DeleteListItems2(bookings2,BookingListRow2)}
        </tbody>
    </table>
    </div>
  );
};

export default BookingList;




