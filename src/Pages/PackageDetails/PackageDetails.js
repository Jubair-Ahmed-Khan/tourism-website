import React, { useEffect, useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const PackageDetails = () => {
    window.scrollTo(0, 0);
    const { packageId } = useParams();
    const history = useHistory();
    const [packages, setPackages] = useState([]);
    const [isLoadingPackage, setIsLoadingPackage] = useState(true);
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setIsLoadingPackage(false);
            })
    }, [])

    const [currentPackage, setCurrentPackage] = useState({});

    useEffect(() => {
        setCurrentPackage(packages.find(pkg => pkg.key === parseInt(packageId)));
    }, [packages]);
    function handleOrder() {
        history.push('/placeorder')
    }
    return (
        isLoadingPackage === false
            ?
            <div className='mt-3 pt-4'>
                <div className='row m-0 justify-content-around g-4'>
                    <div className='col-md-7 border-end '>
                        <h2 className='border-bottom text-center fw-bold py-3'>{currentPackage?.name}</h2>
                        <div className='mx-3 mt-3 border rounded' style={{ minHeight: '100px' }}>
                            <img src={currentPackage?.img} alt={" image of " + currentPackage?.name} width='100%' />
                        </div>
                        <div className='py-2 px-3'>
                            <p style={{ textAlign: 'justify' }}>
                                {currentPackage?.description}
                            </p>
                        </div>
                        <div className='py-2 px-3 border-bottom'>
                            <h5 className='text-danger fw-bold'>
                                <span className="text-black">Price: </span> {currentPackage?.price}
                            </h5>
                        </div>
                    </div>
                    <div className='col-md-4 mt-4' >
                        <div className='pt-3 mt-5'>
                            <h6 className='fw-bold'>CHECK-IN & CHECK-OUT POLICY</h6>
                            <ul>
                                <li> Check-in Time in the Airport is at 11.00pm. Passengers are allowed to enter into the aairport until 10.30 PM</li>
                                <li>Early Check-in is applicable but late checkout is strictlly prohibited</li>
                                <li>10% of ticket charge can be reduced if you pay first</li>
                                <li>All passengers must bring their Organizational Photo ID, NID card or Passport to be presented upon check-in.</li>
                            </ul>
                        </div>
                        <div className='pt-3'>
                            <h6 className='fw-bold'>RESERVATION & CANCELLATION POLICY</h6>
                            <ul>
                                <li>Prior reservation required to avail these rates.</li>
                                <li>Cancellation of individual booking would be intimated minimum 48 hours ahead of arrival.</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-4 text-center '>
                    <Button variant='danger' onClick={() => { history.push('/home') }} className='ms-2' >
                        Go to Home
                    </Button>
                    <Button variant='success' onClick={handleOrder} className='ms-4' >
                        Book This Service
                    </Button>
                </div>
            </div>
            :
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
    );
};

export default PackageDetails;