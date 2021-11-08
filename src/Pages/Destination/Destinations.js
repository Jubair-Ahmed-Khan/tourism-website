import React, { useEffect, useState } from 'react';
import Destination from './Destination';

const Destinations = () => {
    // set destination
    const [destinations, setDestinations] = useState([]);

    // load destination info 
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/destination')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    return (
        <div>
            {/* destination container  */}
            <div className="container">

                {/* destination heading  */}
                <h2 className="text-center pt-5">Our Destinations</h2>

                {/* display destination */}
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 row-cols-1 my-5">
                    {
                        destinations.map(destination => <Destination
                            key={destination.key}
                            destination={destination}
                        >
                        </Destination>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Destinations;