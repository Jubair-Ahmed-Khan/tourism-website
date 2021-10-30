import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    // destructuring from auth 
    const { user, logOut } = useAuth();

    return (
        <div>

            {/* navbar container */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white" >
                <div className="container-fluid">

                    {/* website logo  */}
                    <NavLink className="navbar-brand" to="/home">
                        <span className="fs-1">Travel<span className="text-info">GURU</span></span>
                    </NavLink>

                    {/* toggler button  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* collapsible navlinks */}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mt-1 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/packages">Packages</NavLink>
                            </li>

                            {
                                user?.email ?
                                    <li className="nav-item d-inline-lg ">
                                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                                    </li>
                                    :
                                    <li></li>
                            }
                            {/* {
                                user?.email ?
                                    <li className="nav-item d-inline-lg ">
                                        <NavLink className="nav-link" to="/myorders">My Orders</NavLink>
                                    </li>
                                    :
                                    <li></li>
                            }
                            {
                                user?.email ?
                                    <li className="nav-item d-inline-lg">
                                        <NavLink className="nav-link" to="/manageorders">Manage Orders</NavLink>
                                    </li>
                                    :
                                    <li></li>

                            }
                            {
                                user?.email ?
                                    <li className="nav-item d-inline-lg">
                                        <NavLink className="nav-link" to="/addpackage">Add a package</NavLink>
                                    </li>
                                    :
                                    <li></li>

                            } */}
                        </ul>


                        {/* conditional rendering  */}

                        {
                            user?.email ?
                                <span className="navbar-text mt-3" style={{ fontSize: "20px" }}>
                                    <span style={{ fontSize: "20px" }} className="text-danger me-3 my-3">{user.displayName}
                                    </span>

                                    <NavLink to="/home" onClick={logOut} className="d-block-sm me-3 my-3 text-decoration-none"> <span><i className="fas fa-sign-out-alt ms-2 text-info"></i></span> Logout</NavLink>

                                </span>
                                :
                                <span style={{ fontSize: "20px" }}>

                                    <NavLink to="/login" className="text-decoration-none text-white"><span><i className="fas fa-sign-in-alt text-info"></i></span> Login</NavLink>


                                    <NavLink to="/register" className="text-decoration-none text-white"><span><i className="fas fa-sign-in-alt ms-2 text-info"></i></span> Register</NavLink>

                                </span>

                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;