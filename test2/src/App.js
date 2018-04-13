import React, { Component } from 'react';
import './App.css';
import './css/style.css'

function AccountBalance(props){

    return (

        <div className="col-lg-3">
            <div className="widget lazur-bg no-padding">
                <div className="p-m">
                    <h1 className="m-xs">$ 210,660</h1>

                    <h3 className="font-bold no-margins">
                        Monthly income
                    </h3>
                    <small>Income form project Beta.</small>
                </div>
                <div className="flot-chart">
                    <div className="flot-chart-content" id="flot-chart2"></div>
                </div>
            </div>
        </div>


        /* <div className="container">

                 <div className="row">
                     <div className="col-sm-12 bg-info text-white"><h3>Account Balance</h3>
                         <b>{props.custInfo.accountBalance}</b><br/>
                     </div>
                 </div>

             </div>
     */





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
