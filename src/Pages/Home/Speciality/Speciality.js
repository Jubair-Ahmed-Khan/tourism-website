import React from 'react';
import './Speciality.css';

const Speciality = (props) => {

    // object destructuring
    const { img, title, description } = props.speciality;

    return (

        // single speciality 
        <div className="col hover-effect">
            <div className="card h-100 border-0">
                <img src={img} className="card-img-top w-50 mx-auto" alt="speciality_photo" />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Speciality;