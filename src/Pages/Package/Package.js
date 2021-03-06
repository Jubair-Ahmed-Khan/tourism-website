import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = (props) => {

    // object destructuring 
    const { key, name, img, price, description } = props.pkg;

    // package card style 
    const cardStyle = {
        height: "550px",
        borderRadius: "15px"
    }

    return (
        <div>

            {/* single package  */}
            <div className="col hover-effect">
                <div style={cardStyle} className="card mb-3">
                    <img src={img} className="card-img-top img-radius" style={{ height: "250px" }} alt="package_photo" />
                    <div className="card-body ps-2">
                        <h2 className="text-primary">{name}</h2>
                        <p className="mt-3">{description.slice(0, 200)} ...</p>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                        <p style={{ fontSize: "30px" }} className="text-danger fw-bolder">{price}</p>
                        <Link to={`/packages/${key}`} className="text-decoration-none">
                            <button className="btn btn-primary w-100">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;