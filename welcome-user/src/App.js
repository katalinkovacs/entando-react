import React, { Component } from 'react';
import './App.css';



function WelcomeUser(props) {

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-8 text-muted"><h3>Hi {props.custInfo.firstName}!</h3></div>
                <div className="col-sm-4 text-muted text-left">
                    <small>Your last access, Friday 20 October 2017 at 5:00pm</small>
                </div>
            </div>
        </div>
    );

}




/*TEST Bootstrap 2.3.2*/

/*
function WelcomeUser(props) {

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="span9 text-muted"><h3>Hi {props.custInfo.firstName}!</h3></div>
                <div className="span3 text-muted text-left">
                    <small>Your last access, Friday 20 October 2017 at 5:00pm</small>
                </div>
            </div>
        </div>
    );

}
*/


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
