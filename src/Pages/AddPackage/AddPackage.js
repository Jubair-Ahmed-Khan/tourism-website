import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import swal from 'sweetalert';

const AddPackage = () => {
    const { register, reset, handleSubmit } = useForm();
    const [packages, setPackages] = useState([]);
    const key = packages.length + 1;

    const history = useHistory();

    // load packages 

    useEffect(() => {
        fetch('https://stark-sierra-09024.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    // handle form submit 

    const onSubmit = data => {
        console.log(data);
        axios.post('https://stark-sierra-09024.herokuapp.com/packages', data)
            .then(res => {
                // console.log(res);
                swal({
                    title: "Your Package is added successfully.",
                    icon: "success",
                    button: "Ok",
                });
                reset();
            })
            .then(
                history.push('/home')
            )

    };
    return (

        //add package form

        <div className="container my-5">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center border border-1 shadow-lg">
                <h2 className="text-primary my-5">Add a Package</h2>
                <h5>Key: {key}</h5>
                <input {...register("key")} className="mb-3 w-50" placeholder="Enter the above key here" />
                <input {...register("name")} className="mb-3 w-50" placeholder="Enter Package Name" />
                <input {...register("img")} className="mb-3 w-50" placeholder="Enter Package Image URL" />
                <textarea {...register("description")} className="mb-3 w-50" placeholder="Enter Package Description" />
                <input type="text" {...register("price")} className="mb-3 w-50" placeholder="Enter Package Price" />
                <input type="submit" className="btn btn-danger mb-5" />
            </form>
        </div>
    );
};

export default AddPackage;