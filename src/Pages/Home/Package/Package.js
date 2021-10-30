import React from 'react';

const Package = (props) => {

    const { name, email } = props.pkg;
    const cardStyle = {
        height: "550px"
    }
    return (
        <div>
            <div className="col">
                <div style={cardStyle} className="card shadow-lg mb-3">
                    <div className="card-body">
                        <h2 className="text-primary">{name}</h2>
                        <p className="mt-3">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;