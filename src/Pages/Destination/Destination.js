import React from 'react';

const Destination = (props) => {
    // destructuring 
    const { img, name } = props.destination;

    return (
        // single destination
        <div className="col mb-3">
            <div style={{ height: "350px", backgroundImage: `url(${img})` }} className="card border-0">
                <div className="card-img-overlay">
                    <h3 className="text-white position-absolute fixed-bottom ps-3">{name}</h3>
                </div>

            </div>
        </div>
    );
};

export default Destination;