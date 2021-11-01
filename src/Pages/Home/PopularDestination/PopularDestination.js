import React from 'react';

const PopularDestination = (props) => {
    // destructuring 
    const { img, name } = props.destination;

    return (
        <div className="col mb-3">
            <div style={{ height: "350px", backgroundImage: `url(${img})` }} className="card border-0">
                {/* <img src={img} className="imgStyle" alt="country_photo" /> */}

                <div className="card-img-overlay">
                    <h3 className="text-white">{name}</h3>
                </div>

            </div>
        </div>
    );
};

export default PopularDestination;