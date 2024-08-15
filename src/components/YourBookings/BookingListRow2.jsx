// import Axios from "axios";
// import { Link } from "react-router-dom";
function BookingListRow2(props) {
    const { _id, flightName, from, to, departure, fullName, phone, guestSize} = props.obj;
    const handleEdit = () => {
        // Navigate to the edit page with the booking ID
        props.navigate(`/edit-flight-booking/${_id}`);
      };
    const handleClick = () => {
        props.onDelete(_id); // Call the onDelete function passed as a prop
      };

    return (
        <tr>
            <td>{fullName}</td>
            <td>{flightName}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{departure}</td>
            <td>{phone}</td>
            <td>{guestSize}</td>
            {/* Render other tour properties as needed */}
            <td>
                <button className="btn btn-success mx-4" onClick={handleEdit}>Edit</button>
                <button onClick={handleClick} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default BookingListRow2;