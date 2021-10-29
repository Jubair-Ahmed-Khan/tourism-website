import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    window.scrollTo(0, 0);

    // destructuring from auth 
    const { signInUsingGoogle, handleRegister, handleEmail, handlePassword, error, handleName } = useAuth();

    // register section image 
    const imgSrc = './images/login/signin.png';

    return (
        <div>
            <div className="container py-5">
                <div className="row">

                    {/* register section image  */}
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="me-5">
                            <img className="img-fluid" src={imgSrc} alt="welcome_image" />
                        </div>
                    </div>

                    {/* register form section  */}
                    <div className="col-sm-12 col-md-8 col-lg-6 py-5">

                        {/* register form  */}
                        <form onSubmit={handleRegister} className="bg-white p-5 shadow-lg">
                            <h1 className="mb-4">Register</h1>

                            {/* name field  */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword2" className="form-label">Name</label>
                                <input type="text" onBlur={handleName} className="form-control" id="exampleInputPassword2" placeholder="Enter your name" />
                            </div>

                            {/* email field  */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                    onBlur={handleEmail}
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            {/* password field  */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"
                                    onBlur={handlePassword}
                                    className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>

                            {/* display error  */}
                            <p className="text-danger">{error}</p>

                            <button type="submit" className="btn btn-dark w-100">Register</button>

                            {/* go to login  */}
                            <p className="text-danger text-decoration-none text-center my-3">
                                <Link className="text-danger text-decoration-none" to="/login">Already a member? Please login</Link>
                            </p>

                        </form>

                        <p className="text-center my-3">---- or ----</p>

                        {/* google login button  */}
                        <button className=" btn btn-info w-100" onClick={signInUsingGoogle}>
                            Log in using Google
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;