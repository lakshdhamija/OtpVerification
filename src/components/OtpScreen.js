import React, { useState } from 'react';

const OtpScreen = (props) => {
    const [otp, setOtp] = useState(new Array(4).fill("")); // defining empty otp array of of length 4
    const reload = () => {
        window.location.reload();
    }
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((data, i) => (i === index ? element.value : data))]);
        if (element.nextSibling) { // focus on sibling input
            element.nextSibling.focus();
        }
    };
    const isDisabled = (enteredOtp) => {
        if(enteredOtp.length === 4)
            return false;
        return true;
    }
    const clearInput = () => {
        setOtp([...otp.map(value => "")]);
    }
    const verifyInput = () => {
        props.match(otp.join(""));
        clearInput();
    }
    return (
        <div className="OtpScreen">
            <h2>Please verify Mobile Number</h2>
            <p>An OTP is sent to {props.phone}</p>
            <p style={{ cursor: "pointer" }} onClick={reload}>Change Phone Number</p>

            {otp.map((data, index) => {
                return (
                    <input
                        className="otp-value"
                        key={index} // mandatory for react
                        value={data} // assigning previous value by default
                        type="text"
                        name="otp"
                        maxLength="1"
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()} // selecting element when we focus on it
                    />
                );
            })}

            <p>OTP Entered - {otp.join("")}</p>
            <p>
                {/* Button to clear all otp input */}
                <button onClick={e => clearInput()}> 
                    Clear
                </button>
                <button disabled={isDisabled(otp.join(""))} onClick={e => verifyInput()}>
                    Verify OTP
                </button>
            </p>
        </div>
    );
}


export default OtpScreen;
