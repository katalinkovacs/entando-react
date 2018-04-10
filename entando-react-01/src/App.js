import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/*CUSTOMER INFO*/
const customerInfo = {
    firstName: 'Kevin',
    lastName: 'Smith',
    orgFullName: 'Interstellar Inc.',
    internalAppId: '001235689',
    entityType: 'Corporate',
    pointOfContact: '21 Forest View, London',
    phone: '055 125638',
    email: 'kevinsmith@interstellar.com',
    accountBalance: '$ 210,660',
};


/*HEADER*/
class Header extends Component {

    render() {
        return (
            <div className="header">
                <h3 className="text-muted">Hi {customerInfo.firstName}! <small>Your last access was on: some date</small></h3>
            </div>

        );
    }
}



/*BODY*/
class Body extends Component {

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-sm-8"><h3>Information</h3><br/>
                        <div className="row">
                            <div className="col-sm-6">
                                <h6>Customer Information</h6>
                                <br/><br/>
                                Organization full name<br/>
                                <b>{customerInfo.orgFullName}</b><br/>
                                Internal application ID<br/>
                                <b>{customerInfo.internalAppId}</b><br/>
                                Entity Type<br/>
                                <b>{customerInfo.entityType}</b><br/>
                            </div>
                            <div className="col-sm-6">
                                <h6>Primary Contact Information</h6>
                                <br/><br/>
                                Point of contact<br/>
                                <b>{customerInfo.pointOfContact}</b><br/>
                                Phone<br/>
                                <b>{customerInfo.phone}</b><br/>
                                Email<br/>
                                <b>{customerInfo.email}</b><br/>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-4 bg-info text-white"><h3>Account Balance</h3>
                        <b>{customerInfo.accountBalance}</b><br/>
                    </div>
                </div>


            </div>

        );
    }
}




class App extends Component {
  render() {
    return (

        <div className="container">
            <Header/>
            <Body/>
        </div>


    );
  }
}


export default App;
