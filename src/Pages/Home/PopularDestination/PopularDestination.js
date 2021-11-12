import React from 'react';
import './PopularDestination.css';

const PopularDestination = (props) => {
    // destructuring 
    const { img, name } = props.destination;

    return (

        //single destination
        <div className="col mb-3 hover-effect">
            <div style={{ height: "350px", backgroundImage: `url(${img})` }} className="card border-0">
                <div className="card-img-overlay">
                    <h3 className="text-white position-absolute fixed-bottom ps-3">{name}</h3>
                </div>

            </div>
        </div>
    );
};

export default PopularDestination;