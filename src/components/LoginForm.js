import React from "react";
import logo from "../images/logo.png";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            isDisabled: true
        }
    }
    setValue(value){
        
        this.setState({ value });
        if(isValidPhoneNumber(value)){
            console.log('hello');
            this.setState({isDisabled: false}); 
        }else{
            this.setState({isDisabled: true});
        }

    }
    render() {
        return (
            <div className="login-form">
                <img className="logo" src={logo} alt="Logo" />
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>
                <PhoneInput
                    value={this.state.value}
                    onChange={value => this.setValue(value)}
                    defaultCountry="IN"
                />
                < p > We will send you a one time SMS message.</p>
                <p>Charges may apply</p>
                <button disabled={this.state.isDisabled} onClick={() => this.props.update(this.state.value)}>Sign In with OTP</button>
            </div>
        );
    }
}

export default LoginForm;