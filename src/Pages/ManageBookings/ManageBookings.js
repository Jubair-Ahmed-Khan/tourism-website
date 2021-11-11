import React, { useEffect, useState } from 'react';
import ManageBooking from '../ManageBooking/ManageBooking';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    // const { user } = useAuth();
    useEffect(() => {
        fetch(' https://stark-sierra-09024.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    // const userBooking = myBookings.filter(booking => booking.email === user.email)
    return (
        <div className="container my-5">
            <h2 className="text-danger text-center my-5">Manage Bookings</h2>
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

//className="d-flex flex-column justify-content-center align-items-center"