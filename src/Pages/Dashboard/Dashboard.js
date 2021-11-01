import React from 'react';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="h-100 w-75 mx-auto my-5 border border-1 border-secondary">
                <h2 className="p-3 text-center text-danger">Choose your Option</h2>
                <p className="p-3 text-center">
                    <button className="btn btn-success w-50 mx-auto">My Bookings</button>
                </p>
                <p className="p-3 text-center">
                    <button className="btn btn-success w-50 mx-auto">Manage All Bookings</button>
                </p>
                <p className="p-3 text-center">
                    <button className="btn btn-success w-50 mx-auto">Add a Package</button>
                </p>

            </div>
        </div>
    );
};

export default Dashboard;