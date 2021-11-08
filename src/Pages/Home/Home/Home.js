import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import PopularDestinations from '../PopularDestinations/PopularDestinations';
import Specialities from '../Specialities/Specialities';
// import PopularDestination from '../PopularDestination/PopularDestination';

// container of home components 
const Home = () => {
    let [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setIsLoading(false);
            });
    }, [])

    packages = [];

    return (
        isLoading ? <div className='mt-5 pt-5 text-center' style={{ height: '80vh' }}>
            <Spinner animation='grow'></Spinner></div>
            :
            <div>
                <Banner></Banner>
                <Packages></Packages>
                <PopularDestinations></PopularDestinations>
                <Specialities></Specialities>
            </div>
    );
};

export default Home;