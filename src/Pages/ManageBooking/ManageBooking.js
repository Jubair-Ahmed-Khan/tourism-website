import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageBooking = (props) => {

    // object destructuring
    const { _id, packageName, name, email, address, transaction, status } = props.booking;

    const [bookings, setBookings] = useState([]);

    // load all bookings
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])


    // delete booking function 
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
                    const newArr = bookings.filter(booking => booking._id !== id);
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

    // update booking status function 
    const handleStatusUpdate = id => {

        swal({
            title: "Are you sure to Aprove?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((update) => {
                if (update) {
                    const newArr = bookings.map(booking => {
                        if (booking._id === id) {
                            booking.status = 'Approved';
                        }
                        return booking;
                    });

                    fetch(`https://stark-sierra-09024.herokuapp.com/bookings/${id}`, {
                        method: 'put',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ status: 'Approved' })
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.modifiedCount > 0) {
                                setBookings(newArr);
                                swal({
                                    title: "The Order is successfully Approved",
                                    icon: "success",
                                    button: "Ok",
                                });
                            }
                        });
                }
            });
    }
    return (

        //single booking
        <div className="border shadow-lg mb-3 p-3">
            <h4 className="fw-bold my-3">Booking Id: #{_id}</h4>
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
            <h5>
                <button className="btn btn-success" onClick={() => handleStatusUpdate(_id)}>Approve</button>
                <button className="btn btn-danger ms-3" onClick={() => handleDeleteBooking(_id)}>Delete</button>
            </h5>
        </div>

    );
};

export default ManageBooking;