import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from './../../../hooks/useAuth';

// private route function 
const PrivateRoute = ({ children, ...rest }) => {

    // destructuring from auth 
    const { user, isLoading } = useAuth();

    // loading spinner 
    if (isLoading) {
        return <Spinner animation="danger" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;