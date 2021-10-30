import React from 'react';
import './Footer.css';

const Footer = () => {

    // footer image 
    const imgSrc = 'https://i.ibb.co/fk1J846/map.jpg';

    return (
        <div>
            <div>
                <div className="bg-dark text-white row m-0 py-3 px-3">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">About</h5>
                                <ul className="list-unstyled text-uppercase" style={{ fontSize: "12px" }}>
                                    <li>About us</li>
                                    <li>Contact</li>
                                    <li>Work With Us</li>
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Travel Tips</h5>
                                <ul className="list-unstyled text-uppercase" style={{ fontSize: "12px" }}>
                                    <li>Start Here</li>
                                    <li>Blog</li>
                                    <li>Destinations</li>
                                    <li>Italy Travel</li>
                                    <li>Travel Insurance</li>
                                </ul>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                                <h5 className="text-uppercase text-info">Resources</h5>
                                <ul className="list-unstyled text-uppercase" style={{ fontSize: "12px" }}>
                                    <li>Categories</li>
                                    <li>City Guide</li>
                                    <li>Travel Resources</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={imgSrc} className="img-fluid footer-img" />
                    </div>
                    <p className='my-5 text-center text-white m-0 fs-5'>
                        &copy; 2021, All Rights Reserved by - <span className="text-info">TravelGURU</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;