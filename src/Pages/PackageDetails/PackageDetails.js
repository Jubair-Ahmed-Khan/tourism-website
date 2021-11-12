import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const PackageDetails = () => {
    window.scrollTo(0, 0);

    // package id 
    const { packageId } = useParams();

    //load user from auth
    const { user } = useAuth();

    //useHistory hook
    const history = useHistory();

    //object destructuring
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [packages, setPackages] = useState([]);
    const [isLoadingPackage, setIsLoadingPackage] = useState(true);

    // handle form submit 
    const onSubmit = data => {

        // find single package 
        const singlePackage = packages.find(pkg => pkg.key === parseInt(packageId));

        // add new properties 
        data.key = packageId;
        data.status = 'Pending';
        data.packageName = singlePackage.name;

        // send to bookings 
        axios.post('https://stark-sierra-09024.herokuapp.com/bookings', data)
            .then(res => {
                reset();
            })
        swal({
            title: "You booking is placed successfully!",
            icon: "success",
            button: "Ok",
        });

        history.push('/mybookings');

    };

    // load all packages 
    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setIsLoadingPackage(false);
            })
    }, [])

    const visibile = {
        visibility: 'visible'
    }
    const invisibile = {
        visibility: 'hidden'
    }

    const [currentPackage, setCurrentPackage] = useState({});

    // load clicked package 
    useEffect(() => {
        setCurrentPackage(packages.find(pkg => pkg.key === parseInt(packageId)));
    }, [packages]);

    return (
        isLoadingPackage === false
            ?
            <div className='mt-3 pt-4'>
                <div className='row m-0 justify-content-around g-4'>

                    {/* single package details info */}
                    <div className='col-md-7 border-end mb-5'>
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

                    {/* order place form  */}
                    <div className='col-md-4 mt-4' >
                        <h2 className="text-center">Place Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="my-4">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingName" placeholder="Enter your name"
                                    value={user.displayName} readOnly
                                    {...register("name", { required: true })} />
                                <label htmlFor="floatingName">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput"
                                    placeholder="name@example.com" value={user.email} readOnly
                                    {...register("email", { required: true })} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-2">
                                <input type="telephone" className="form-control" id="floatingPhone"
                                    placeholder="Enter Phone Number"
                                    {...register("phone", { required: true })} />
                                <label htmlFor="floatingPhone">Phone</label>
                                <span style={errors.phone ? visibile : invisibile} className='text-danger ps-2' >* Enter a valid Contact number</span>
                            </div>
                            <div className="form-floating mb-2">
                                <input className="form-control" list="datalistOptions" id="detailsAddress"
                                    placeholder="Enter Your Address" type="text"
                                    {...register("address", { required: true })} />
                                <label htmlFor="detailsAddress">Area, Union, District</label>
                                <span style={errors.address ? visibile : invisibile} className='text-danger ps-2' >* Enter your address</span>
                            </div>
                            <div className="form-floating mb-2">
                                <input className="form-control" list="datalistOptions" id="division"
                                    placeholder="Enter Your Division" type="text"
                                    {...register("division", { required: true })} />
                                <label htmlFor="locationInput">Division</label>
                                <datalist id="division">
                                    <option value="Dhaka" />
                                    <option value="Chittagong" />
                                    <option value="Rajshahi" />
                                    <option value="Khulna" />
                                    <option value="Sylhet" />
                                    <option value="Barisal" />
                                    <option value="Rangpur" />
                                    <option value="Mymensingh" />
                                </datalist>
                                <span style={errors.division ? visibile : invisibile} className='text-danger ps-2' >* Enter your division</span>
                            </div>
                            <fieldset>
                                <legend>Select Payment</legend>
                                <p>
                                    <label htmlFor="bkash" className='px-2'>
                                        <input type="radio" name="payment" value="bkash"
                                            id="bkash"
                                            {...register("payment", { required: true })} />
                                        bKash
                                    </label>
                                    {/* <br /> */}
                                    <label htmlFor="rocket" className='px-2'>
                                        <input type="radio" name="payment" value="rocket"
                                            id="rocket"
                                            {...register("payment", { required: true })} />
                                        Rocket
                                    </label>
                                    {/* <br /> */}
                                    <label htmlFor="card" className='px-2'>
                                        <input type="radio" name="payment" value="card"
                                            id="card"
                                            {...register("payment", { required: true })} />
                                        Card
                                    </label>
                                    {/* <br /> */}
                                    <label htmlFor="other" className='px-2'>
                                        <input type="radio" name="payment" value="other"
                                            id="other"
                                            {...register("payment", { required: true })} />
                                        Others
                                    </label>
                                </p>
                                <span style={errors.payment ? visibile : invisibile} className='text-danger ps-2' >* Chose a payment method</span>
                            </fieldset>
                            <div className="form-floating mb-2">
                                <input className="form-control" list="datalistOptions" id="transaction"
                                    placeholder="Enter Your transaction id" type="text"
                                    {...register("transaction", { required: true })} />
                                <label htmlFor="transaction">Transaction ID</label>
                                <span style={errors.transaction ? visibile : invisibile} className='text-danger ps-2' >* Enter transaction id </span>
                            </div>
                            <div className="form-floating mb-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                        checked readOnly />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        I accept to the terms
                                    </label>
                                </div>
                            </div>
                            <div className='text-center my-5'>
                                <input className="btn btn-danger" type="submit" value='Confirm Order' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            :
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
    );
};

export default PackageDetails;