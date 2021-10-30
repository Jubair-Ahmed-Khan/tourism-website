import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    // load packages 
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div>
            <div className="container">

                {/* service section header  */}
                <h2 className="text-info text-center pt-5">Our packages</h2>

                {/* display services  */}
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 py-5">
                    {
                        packages.map(pkg => <Package
                            key={pkg._id}
                            pkg={pkg}
                        ></Package>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;