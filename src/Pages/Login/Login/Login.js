import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';
// import { signInWithEmailAndPassword } from '@firebase/auth';

const Login = () => {
    window.scrollTo(0, 0);

    // destructuring from auth 
    const { signInUsingGoogle, handleEmail, handlePassword, error, processLogIn, setUser, setIsLoading } = useAuth();

    // login section image 
    const imgSrc = './images/login/signin.png';

    // react hooks 
    const location = useLocation();
    const history = useHistory();

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
        <div>
            <div className="container py-5">
                <div className="row">

                    {/* login header image  */}
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="me-5">
                            <img className="img-fluid" src={imgSrc} alt="welcome_image" />
                        </div>
                    </div>

                    {/* login form section  */}
                    <div className="col-sm-12 col-md-8 col-lg-6 py-5">

                        {/* login form  */}
                        <form onSubmit={processLogIn} className="bg-white p-5 shadow-lg">

                            <h1 className="mb-4">Login</h1>

                            {/* email field  */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            {/* password field  */}
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                                <small><a className="text-decoration-none" href="https://www.facebook.com">Forgot password?</a></small>
                            </div>

                            {/* login button  */}
                            <button onClick={processLogIn} type="submit" className="btn btn-dark w-100">Login</button>

                            {/* display error  */}
                            <p className="text-danger my-3">{error}</p>

                            {/* go to register  */}
                            <p className="text-danger text-decoration-none text-center my-3">
                                <Link className="text-danger text-decoration-none" to="/register">Not a member yet? Please register</Link>
                            </p>

                        </form>

                        <p className="text-center my-3">---- or ----</p>

                        {/* google login button  */}
                        <button onClick={handleSignInUsingGoogle} className=" btn btn-info w-100">
                            Log in using Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;