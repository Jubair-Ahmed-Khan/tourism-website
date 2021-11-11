import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(' https://stark-sierra-09024.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [])

    const userBooking = myBookings.filter(booking => booking.email === user.email)
    return (
        <div>
            {
                userBooking.map(booking => console.log(booking))
            }
        </div>
    );
};

export default MyBookings;

//https://stark-sierra-09024.herokuapp.com