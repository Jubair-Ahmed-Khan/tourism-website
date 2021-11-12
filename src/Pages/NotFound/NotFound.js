import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {

    //404 background image source
    const imgSrc = 'https://i.ibb.co/YWywzJY/error.png';

    // react history hook 
    const history = useHistory();

    // redirect to home on button click 
    const redirectHome = () => {
        history.push('/home');
    }

    return (
        // 404 container 
        <div className="container-fluid error-bg">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <img className="img-fluid" src={imgSrc} alt="404_error" />
                <br /> <br />
                <button onClick={redirectHome} className="btn btn-danger my-5">Go back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;