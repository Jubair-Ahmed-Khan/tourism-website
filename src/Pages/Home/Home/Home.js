import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import PopularDestinations from '../PopularDestinations/PopularDestinations';
import Specialities from '../Specialities/Specialities';
// import PopularDestination from '../PopularDestination/PopularDestination';

// container of home components 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <PopularDestinations></PopularDestinations>
            <Specialities></Specialities>
        </div>
    );
};

export default Home;