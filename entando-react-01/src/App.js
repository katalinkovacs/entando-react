import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/*CUSTOMER INFO*/
/*const customerInfo = {
    firstName: 'Kevin',
    lastName: 'Smith',
    orgFullName: 'Interstellar Inc.',
    internalAppId: '001235689',
    entityType: 'Corporate',
    pointOfContact: '21 Forest View, London',
    phone: '055 125638',
    email: 'kevinsmith@interstellar.com',
    accountBalance: '$ 210,660',
};*/


/*HEADER*/
/*class Header extends Component {

    render() {
        return (
            <div className="header">
                <h3 className="text-muted">Hi {customerInfo.firstName}! <small>Your last access was on: some date</small></h3>
            </div>

        );
    }
}*/

function Header(props) {

/*
    const dataLocal = props.dataArg;
*/

        return (
            <div className="header">
                <h3 className="text-muted">Hi {props.customerInfo.firstName}! <small>Your last access was on: some date</small></h3>
            </div>

        );

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
                                <b>{props.customerInfo.orgFullName}</b><br/>
                                Internal application ID<br/>
                                <b>{props.customerInfo.internalAppId}</b><br/>
                                Entity Type<br/>
                                <b>{props.customerInfo.entityType}</b><br/>
                            </div>
                            <div className="col-sm-6">
                                <h6>Primary Contact Information</h6>
                                <br/><br/>
                                Point of contact<br/>
                                <b>{props.customerInfo.pointOfContact}</b><br/>
                                Phone<br/>
                                <b>{props.customerInfo.phone}</b><br/>
                                Email<br/>
                                <b>{props.customerInfo.email}</b><br/>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-4 bg-info text-white"><h3>Account Balance</h3>
                        <b>{props.customerInfo.accountBalance}</b><br/>
                    </div>
                </div>


            </div>

        );
    }
}




class App extends Component {
    constructor() {
        super();
        this.state = {
            /* transactionSelectValue: "",
             searchText: "default",
             transactionList: ["Transaction1", "Transaction2", "Transaction3"],*/
            customerInfo:
                [
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
                ]
        };
    }

    render() {
        return (
            <div class="container">
                <Header dataArg={this.state.customerInfo}/>
                {/*<SearchBar searchText={this.state.searchText} transactionList={this.state.transactionList} transactionSelectValue={this.state.transactionSelectValue} />*/}
{/*
                <Body dataArg={this.state.data}/>
*/}
            </div>
        );
    }
}

export default App;
