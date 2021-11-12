import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const MyBooking = (props) => {
    const [bookings, setBookings] = useState([]);

    // object destructring 
    const { _id, packageName, name, email, address, transaction, status } = props.booking;

    //load user from auth
    const { user } = useAuth();


    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                const userBooking = data.filter(booking => booking.email === user.email);
                setBookings(userBooking)
            })
    }, [])

    const handleDeleteBooking = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const newArr = bookings.filter(x => x._id !== id);
                    fetch(`https://stark-sierra-09024.herokuapp.com/bookings/${id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingBookings = bookings.filter(x => x._id !== id);
                                setBookings(remainingBookings);
                                swal({
                                    title: "Your Order is Deleted.",
                                    icon: "success",
                                    button: "Ok",
                                });
                            }
                            setBookings(newArr);
                        })
                }
            });
    }

    return (

        <div className="border shadow-lg mb-3 p-3">
            <p>
                <span className="fw-bold">Booking Id: </span><br />
                {_id}
            </p>
            <p>
                <span className="fw-bold">Package Name: </span><br />
                {packageName}
            </p>
            <p>
                <span className="fw-bold">Name: </span><br />
                {name}
            </p>
            <p>
                <span className="fw-bold">Email: </span><br />
                {email}
            </p>
            <p>
                <span className="fw-bold">Address: </span><br />
                {address}
            </p>
            <p>
                <span className="fw-bold">Transaction ID: </span><br />
                {transaction}
            </p>
            <h5 className="my-3">
                Status:
                <span className={status === 'Pending' ? 'text-danger' : 'text-success'}> {status}</span>
            </h5>
            <h5 className="my-3">
                <button className="btn btn-danger mt-3" onClick={() => handleDeleteBooking(_id)}>Delete</button>
            </h5>
        </div>

    );
};

export default MyBooking;