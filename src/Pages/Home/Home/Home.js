import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import PopularDestinations from '../PopularDestinations/PopularDestinations';
// import PopularDestination from '../PopularDestination/PopularDestination';

// container of home components 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <PopularDestinations></PopularDestinations>
        </div>
    );
};

export default Home;