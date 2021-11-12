import React, { useEffect, useState } from 'react';
import ManageBooking from '../ManageBooking/ManageBooking';

const ManageBookings = () => {

    const [bookings, setBookings] = useState([]);

    // load all booking 
    useEffect(() => {
        fetch(' https://stark-sierra-09024.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    return (

        // all booking container 
        <div className="container my-5">
            <h2 className="text-danger text-center my-5">All Bookings</h2>
            <div className="mx-auto">
                {
                    bookings.map(booking => <ManageBooking
                        key={booking.key}
                        booking={booking}
                    >
                    </ManageBooking>
                    )
                }
            </div>

        </div>
    );
};

export default ManageBookings;
