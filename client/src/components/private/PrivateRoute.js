import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {isAuthenticated} from "../services/AuthService";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route exact {...rest}
           render={(props) => (

               isAuthenticated() ?
                   <Component {...props} />
                   :
                   <Redirect to={
                       {
                           pathname: '/login',
                           state: {target: props.location}
                       }
                   }/>
           )}
    />
);

export default PrivateRoute;