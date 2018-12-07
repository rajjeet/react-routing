import React, {Component} from 'react';
import {signOut} from "../services/AuthService";
import {Redirect} from "react-router-dom";

const Logout = class Logout extends Component {

    componentWillMount() {
        signOut(() => {
        });
    }

    render() {
        return <Redirect to={'/login'}/>;
    }
};

export default Logout;