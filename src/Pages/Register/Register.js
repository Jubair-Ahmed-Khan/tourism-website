import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';

const Register = () => {
    window.scrollTo(0, 0);

    // destructuring from auth 
    const { user, signInUsingGoogle, handleRegister, handleEmail, handlePassword, handleName, setUser, setIsLoading } = useAuth();

    // register section image 
    const imgSrc = 'https://i.ibb.co/bJ3xGCs/register.jpg';
    const location = useLocation();
    const history = useHistory();

    // redirect home 
    if (user.email) {
        history.push('/home');
    }

    // redirect url 
    const redirect_uri = location.state?.from || '/home';

    // google sign in handle 
    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
                swal({
                    title: "You are Successfully Logged In!",
                    icon: "success",
                    button: "Ok",
                });
            })

            .catch((error) => {
                swal({
                    title: error.message,
                    icon: "error",
                    buttons: true,
                    dangerMode: true,
                })
            })
            .finally(() => setIsLoading(false));

    }

    return (
        <div className="container">
            <div className="row">

                {/* register section image  */}
                <div className="col-sm-12 col-md-8 col-lg-6 py-3">
                    <div style={{ width: "100%" }}>
                        <img className="img-fluid" src={imgSrc} alt="welcome_image" />
                    </div>
                </div>

                {/* register form section  */}
                <div className="col-sm-12 col-md-8 col-lg-6 pt-3">

                    {/* register form  */}
                    <form onSubmit={handleRegister} className="bg-white px-5">
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


                        <button type="submit" className="btn btn-success w-100">Register</button>

                        {/* go to login  */}
                        <p className="text-danger text-decoration-none text-center my-3">
                            <Link className="text-danger text-decoration-none" to="/login">Already a member? Please login</Link>
                        </p>

                    </form>

                    <p className="text-center my-3">---- or ----</p>

                    <div className="px-5 mb-2">
                        <button onClick={handleSignInUsingGoogle} className=" btn btn-danger w-100 text-center">
                            Log in using Google
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Register;