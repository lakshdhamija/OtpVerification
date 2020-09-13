import React from 'react';

class Success extends React.Component{
    render(){
        return(
            <div className="Success">
                <h2>Welcome to Company</h2>
                <p className="questions">In order to provide you with a custom experience,</p>
                <p className="questions" >We need to ask you a few questions</p>
                <button className="get-started-btn">Get Started</button>
                <p>This will only take 5 min.</p>
            </div>
        );
    }
}

export default Success;