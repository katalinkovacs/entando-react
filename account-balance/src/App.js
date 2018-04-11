import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function AccountBalance(props){

    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-12 bg-info text-white"><h3>Account Balance</h3>
                    <b>{props.custInfo.accountBalance}</b><br/>
                </div>
            </div>

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

                <AccountBalance custInfo={this.state.customerInfo}/>

            </div>
        );
    }
}

export default App;
