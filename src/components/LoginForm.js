import React from "react";
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
    setValue(value) {

        this.setState({ value });
        if (isValidPhoneNumber(value)) {
            this.setState({ isDisabled: false });
        } else {
            this.setState({ isDisabled: true });
        }

    }
    render() {
        return (
            <div className="login-form">
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>
                
                <div className="phone-input">
                    <p className="overlay-text-phone-input">Enter Contact Number</p>
                    <PhoneInput
                        value={this.state.value}
                        onChange={value => this.setValue(value)}
                        defaultCountry="IN"
                    />
                </div>
                <p className="login-screen-footer"> We will send you a one time SMS message.</p>
                <p className="login-screen-footer">Charges may apply</p>
                <button disabled={this.state.isDisabled} onClick={() => this.props.update(this.state.value)}>
                    Sign In with OTP
                </button>
            </div>
        );
    }
}

export default LoginForm;