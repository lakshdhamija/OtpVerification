import React from "react";
import logo from "../images/logo.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <div className="login-form">
                <img className="logo" src={logo} alt="Logo" />
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>
                <PhoneInput
                    country={'in'}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                />
                <p>We will send you a one time SMS message.</p>
                <p>Charges may apply</p>
            </div>
        );
    }
}

export default LoginForm;