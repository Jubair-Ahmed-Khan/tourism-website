import React, { useEffect, useState } from 'react';
import PopularDestination from '../PopularDestination/PopularDestination';

const PopularDestinations = () => {
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
                <h2 className="text-center pt-5">Popular Destinations</h2>
                <p className="text-center text-muted">World's best tourist destinations</p>

                {/* display destination */}
                <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1 my-5">
                    {
                        destinations.slice(0, 4).map(destination => <PopularDestination
                            key={destination.key}
                            destination={destination}
                        >
                        </PopularDestination>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;