import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Packages = () => {

    const [packages, setPackages] = useState([]);

    // load packages 
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div>

            {/* packages container  */}
            <div className="container">

                {/* package section header  */}
                <h2 className="text-center pt-5">Special packages</h2>

                {/* display packages  */}
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 py-5">
                    {
                        packages?.slice(0, 6).map(pkg => <Package
                            key={pkg._id}
                            pkg={pkg}
                        ></Package>)
                    }
                    {
                        packages?.slice(12, packages.length).map(pkg => <Package
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