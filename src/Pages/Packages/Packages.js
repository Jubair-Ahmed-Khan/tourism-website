import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Package from '../Package/Package';
// import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [isLoadingPackage, setIsLoadingPackage] = useState(true);


    // load packages 
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setIsLoadingPackage(false)
            });
    }, [])
    return (

        isLoadingPackage ? <div className='mt-5 pt-5 text-center' style={{ height: '80vh' }}>
            <Spinner animation='grow'></Spinner></div>
            :
            <div className="container">

                {/* service section header  */}
                <h2 className="text-center pt-5"><i class="bi bi-check-lg"></i>Our packages</h2>

                {/* display services  */}
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 py-5">
                    {
                        packages.map(pkg => <Package
                            key={pkg._id}
                            pkg={pkg}
                        ></Package>)
                    }
                </div>
            </div>

    );
};

export default Packages;