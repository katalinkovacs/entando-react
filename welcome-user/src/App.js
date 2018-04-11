import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function WelcomeUser(props) {
    
    return (
        <div className="header">
            <h3 className="text-muted">Hi {props.custInfo.firstName}! <small>Your last access was on: some date</small></h3>
        </div>

    );

}

class App extends Component {
    constructor() {
        super();
        this.state = {

            customerInfo:
                {
                    "firstName": "Kevin",
                    "lastName": "Smith",
                    "orgFullName": "Interstellar Inc.",
                    "internalAppId": "001235689",
                    "entityType": "Corporate",
                    "pointOfContact": "21 Forest View, London",
                    "phone": "055 125638",
                    "email": "kevinsmith@interstellar.com",
                    "accountBalance": "$ 210,660"
                }
        };
    }

    render() {
        return (
            <div class="container">
                <WelcomeUser custInfo={this.state.customerInfo}/>
            </div>
        );
    }
}

export default App;
