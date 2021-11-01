import React from 'react';

const Speciality = (props) => {
    const { img, title, description } = props.speciality;
    return (
        <div className="col">
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