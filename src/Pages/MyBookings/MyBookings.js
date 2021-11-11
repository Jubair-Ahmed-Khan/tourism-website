import React, { useEffect, useState } from 'react';

const MyBookings = () => {
    const [myorder, setMyorder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default MyBookings;