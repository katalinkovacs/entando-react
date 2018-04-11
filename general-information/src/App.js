import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function GeneralInformation(props){

    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-12"><h3>Information</h3><br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <h6>Customer Information</h6>
                            <br/><br/>
                            Organization full name<br/>
                            <b>{props.custInfo.orgFullName}</b><br/>
                            Internal application ID<br/>
                            <b>{props.custInfo.internalAppId}</b><br/>
                            Entity Type<br/>
                            <b>{props.custInfo.entityType}</b><br/>
                        </div>
                        <div className="col-sm-6">
                            <h6>Primary Contact Information</h6>
                            <br/><br/>
                            Point of contact<br/>
                            <b>{props.custInfo.pointOfContact}</b><br/>
                            Phone<br/>
                            <b>{props.custInfo.phone}</b><br/>
                            Email<br/>
                            <b>{props.custInfo.email}</b><br/>
                        </div>
                    </div>

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

                <GeneralInformation custInfo={this.state.customerInfo}/>

            </div>
        );
    }
}

export default App;
