import React, {Component} from 'react';
import {isAuthenticated, signIn} from "../services/AuthService";
import {Redirect} from "react-router-dom";
import {Button, Form} from "semantic-ui-react";

const Login = class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: isAuthenticated()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        signIn(() => {
            this.setState({loggedIn: isAuthenticated()});
        });
    }

    render() {

        const {target} = this.props.location.state || {target: {pathname: '/private'}};

        if (this.state.loggedIn) {
            return <Redirect to={target}/>
        }

        return (
            <Form>
                <Form.Field>
                    <Form.Input label='Username' placeholder='Username'/>
                </Form.Field>
                <Form.Field>
                    <Form.Input label='Password' type='password' placeholder='Password'/>
                </Form.Field>
                <Button type='submit' onClick={this.handleSubmit}>Log In</Button>
            </Form>
        );
    }
};

export default Login;