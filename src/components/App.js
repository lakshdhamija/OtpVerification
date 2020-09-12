import React from 'react';
import '../css/App.css';
import LoginForm from './LoginForm';
import OtpScreen from './OtpScreen';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      verifiedOtp: false,
    }
    this.generateOtp = this.generateOtp.bind(this);
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
    console.log(userEnteredOtp);
    try {
      let res = await fetch('http://localhost:8000/api/v1/otp/verifyOtp', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEnteredOtp: userEnteredOtp
        })
      }); // api call to backend
      let result = await res.json();
      if (result && result.message === "success") {
        this.setState({
          verifiedOtp: true
        });
      } else {
        alert('OTP did not match. Please try again!');
        this.refs.child.clearInput();
      }
    } catch (e) {
      console.log('Error in referencing api to generate OTP', e);
    }
  }
  render() {
    if (this.state.value.length === 0) {
      return (
        <div className="App">
          <LoginForm update={this.generateOtp} />
        </div>
      );
    } else if (this.state.value.length !== 0 && !this.state.verifiedOtp) {
      return (
        <div className="App">
          <OtpScreen phone={this.state.value} match={this.otpMatch} />
        </div>
      );
    } else if (this.state.verifiedOtp) {
      return (
        <div className="App">
          Success!
        </div>
      );
    }
  }
}


export default App;
