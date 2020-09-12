import React from 'react';
import '../css/App.css';
import LoginForm from  './LoginForm';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
  }
}


export default App;
