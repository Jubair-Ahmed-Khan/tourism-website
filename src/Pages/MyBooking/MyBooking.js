import React, { useEffect, useState } from 'react';

const MyBooking = (props) => {
    // const [packages, setPackages] = useState([]);
    const { _id, packageName, name, email, address, transaction, status } = props.booking;
    // console.log(_id);
    // useEffect(() => {
    //     fetch('https://stark-sierra-09024.herokuapp.com/packages')
    //         .then(res => res.json())
    //         .then(data => setPackages(data))
    // }, [])

    const deleteBooking = () => {

    }
    return (
        <div className="border border-1 border-success mb-3 p-3">
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
            <h5 className="my-3">
                <button className="btn btn-danger mt-3" onClick={deleteBooking}>Delete</button>
            </h5>
        </div>

        // <div className="col border border-1 border-success mb-3">
        //     <h4 className="fw-bold my-3">Booking Id: #{_id}</h4>
        //     <h5><span className="fw-bold">Package Name: </span>{packageName}</h5>
        //     <h5><span className="fw-bold">Name: </span>{name}</h5>
        //     <h5><span className="fw-bold">Email: </span>{email}</h5>
        //     <h5><span className="fw-bold">Address: </span>{address}</h5>
        //     <h5><span className="fw-bold">Transaction ID: </span>{transaction}</h5>
        //     <h5 className="my-5">
        //         Status:
        //         <span className={status === 'Pending' ? 'text-danger' : 'text-success'}> {status}</span>
        //         <button className="btn btn-danger ms-3" onClick={deleteBooking}>Delete</button>
        //     </h5>
        // </div>

    );
};

export default MyBooking;