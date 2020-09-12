import React from 'react';
import '../css/App.css';
import LoginForm from './LoginForm';
import OtpScreen from './OtpScreen';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      verifiedOtp: false
    }
    this.handler = this.handler.bind(this);
  }
  async generateOtp() {
    if (this.state.value.length === 0) return;
    try {
      let res = await fetch(''); // api call to backend
      let result = await res.json();
      // Since we cannot send message to phone, we show an alert containing otp sent from backend
      if (result && result.status) {
        alert(`OTP from backend: ${result.otp}`); // in production, generated otp will not be sent here
        // this.setState({
        //   otp: result.otp
        // });
      }
      else alert('Some error occurred. Please try again.');
    } catch (e) {
      console.log('Error in referencing api to generate OTP', e);
    }
  }
  handler(value) {
    this.setState({ value });
    this.generateOtp();
  }
  async otpMatch(userEnteredOtp){
    try{
      let res = await fetch(''); // api call to backend
      let result = await res.json();
      if (result && result.status) {
        this.setState({
          verifiedOtp: true
        });
      }
    } catch (e){
      console.log('Error in referencing api to generate OTP', e);
    }
  }
  render() {
    if (this.state.value.length === 0) {
      return (
        <div className="App">
          <LoginForm update={this.handler} />
        </div>
      );
    } else if(this.state.value.length !== 0 && !this.state.verifiedOtp) {
      return (
        <div className="App">
          <OtpScreen phone={this.state.value} match={this.otpMatch} />
        </div>
      );
    } else if(this.state.verifiedOtp){
      return(
        <div className="App">
          Success!
        </div>
      );
    }
  }
}


export default App;
