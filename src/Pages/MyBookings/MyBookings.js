import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyBooking from '../MyBooking/MyBooking';

const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);

    //load user from auth
    const { user } = useAuth();

    // load all bookings 
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setMyBookings(data);
            })
    }, [myBookings])


    // filter my booking 
    const userBooking = myBookings.filter(booking => booking.email === user.email)

    return (

        // my booking container
        <div className="container my-5">
            <h2 className="text-success text-center my-5">My Bookings</h2>
            <div className="mx-auto">
                {
                    userBooking.map(booking => <MyBooking
                        key={booking.key}
                        booking={booking}
                    >
                    </MyBooking>
                    )
                }
            </div>

        </div>
    );
};

export default MyBookings;

//https://stark-sierra-09024.herokuapp.com