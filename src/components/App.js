import React from 'react';
import '../css/App.css';
import LoginForm from './LoginForm';
import OtpScreen from './OtpScreen';
import logo from "../images/logo.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      verifiedOtp: false
    }
    this.generateOtp = this.generateOtp.bind(this);
    this.otpMatch = this.otpMatch.bind(this);
  }
  async generateOtp(phone) {
    try {
      let res = await fetch('http://localhost:8000/api/v1/otp/generateOtp', {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      }); // api call to backend
      let result = await res.json();
      // Since we cannot send message to phone, we show an alert containing otp sent from backend
      if (result && result.message === "success") {
        alert(`Generated OTP from backend: ${result.otp}. Please note it down.`); // in production, generated otp will not be sent here
      }
      else {
        alert('Some error occurred. Please try again.');
        return;
      }
      this.setState({ value: phone });
    } catch (e) {
      console.log('Error in referencing api to generate OTP', e);
    }
  }
  async otpMatch(userEnteredOtp) {
    try {
      let res = await fetch('http://localhost:8000/api/v1/otp/verifyOtp', {
        method: "POST",
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `userEnteredOtp=${userEnteredOtp}`
      }); // api call to backend
      let result = await res.json();
      if (result && result.message === "success") {
        this.setState({
          verifiedOtp: true
        });
      } else {
        alert(`OTP did not match. Please try again! ${result.message}`);
        this.setState({});
      }
    } catch (e) {
      console.log('Error in referencing api to generate OTP', e);
    }
  }
  render() {
    if (this.state.value.length === 0) {
      return (
        <div className="App">
          <img className="logo" src={logo} alt="Logo" />
          <LoginForm update={this.generateOtp} />
        </div>
      );
    } else if (this.state.value.length !== 0 && !this.state.verifiedOtp) {
      return (
        <div className="App">
          <img className="logo" src={logo} alt="Logo" />
          <OtpScreen phone={this.state.value} match={this.otpMatch} />
        </div>
      );
    } else if (this.state.verifiedOtp) {
      return (
        <div className="App">
          <img className="logo" src={logo} alt="Logo" />
          Success!
        </div>
      );
    }
  }
}


export default App;
