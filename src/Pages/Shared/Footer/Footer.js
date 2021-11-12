import React from 'react';

const Footer = () => {

    // footer icon style 
    const iconStyle = {
        fontSize: "30px"
    }

    return (
        <div className="bg-dark">
            <div className="container bg-dark text-white">
                <div className="row m-0 py-3 px-3">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">About</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>About us</li>
                                    <li>Contact</li>
                                    <li>Work With Us</li>
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Travel Tips</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Start Here</li>
                                    <li>Blog</li>
                                    <li>Destinations</li>
                                    <li>Italy Travel</li>
                                    <li>Travel Insurance</li>
                                </ul>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Resources</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Categories</li>
                                    <li>City Guide</li>
                                    <li>Travel Resources</li>

                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Offfers</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Weekly</li>
                                    <li>Monthly</li>
                                    <li>Yearly</li>

                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Our Branches</h5>
                                <ul className="list-unstyled text-uppercase mt-3" style={{ fontSize: "14px" }}>
                                    <li>Dhaka</li>
                                    <li>Sylhet</li>
                                    <li>Chottogram</li>

                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Follow Us On</h5>
                                <div className="mt-3">
                                    <i style={iconStyle} className="fab fa-facebook-square me-3"></i>
                                    <i style={iconStyle} className="fab fa-twitter-square me-3"></i>
                                    <i style={iconStyle} className="fab fa-youtube-square me-3"></i>
                                    <i style={iconStyle} className="fab fa-instagram-square me-3"></i>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* copyright  */}
                    <p className="mt-5 text-center text-white m-0 fs-5">
                        &copy; 2021, All Rights Reserved by - <span className="text-info">TravelGURU</span>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Footer;