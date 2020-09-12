import React from 'react';

class Success extends React.Component{
    render(){
        return(
            <div className="Success">
                <h2>Welcome to AdmitKard</h2>
                <p>In order to provide you with a custom experience,</p>
                <p>We need to ask you a few questions</p>
                <button>Get Started</button>
                <p>This will only take 5 min.</p>
            </div>
        );
    }
}

export default Success;