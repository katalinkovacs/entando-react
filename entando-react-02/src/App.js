import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



/*HEADER*/
class Header extends Component {

    render() {
        return (
            <div className="header">
                <h3 className="text-muted">Transaction History</h3>
            </div>

        );
    }
}

/*SEARCHBAR*/
class Searchbar extends Component {

    render() {
        return (

            <div>
                <p> will be a searchbar</p>
                <p>Print icon: <span className="glyphicon glyphicon-print"></span></p>
                <p>Arrow??? icon: <span className="glyphicon glyphicon-triangle-bottom"></span></p>
                <p>menu down icon: <span className="glyphicon glyphicon-menu-down"></span></p>
                <p>menu up icon: <span className="glyphicon glyphicon-menu-up"></span></p>


            </div>
        );
    }
}

/*BODY - DATA TABLE*/
class DataTable extends Component {

    constructor(props) {
        super(props)

        this.data =
            [
                {
                    "checked": true,
                    "recentActivity": "18/03/2018",
                    "type": "Payment",
                    "description": "Simple",
                    "amount": "+$24",
                    "balance": "+36"
                },
                {
                    "checked": false,
                    "recentActivity": "18/03/2018",
                    "type": "Payment",
                    "description": "Simple",
                    "amount": "+$24",
                    "balance": "+36"
                },
                {
                    "checked": true,
                    "recentActivity": "18/03/2018",
                    "type": "Payment",
                    "description": "Simple",
                    "amount": "+$24",
                    "balance": "+36"
                },
                {
                    "checked": false,
                    "recentActivity": "18/03/2018",
                    "type": "Payment",
                    "description": "Simple",
                    "amount": "+$24",
                    "balance": "+36"
                },
                {
                    "checked": true,
                    "recentActivity": "18/03/2018",
                    "type": "Payment",
                    "description": "Simple",
                    "amount": "+$24",
                    "balance": "+36"
                }
            ]

        this.rows = this.data.map((dataItem) =>
            <tr>
                <td><input type="checkbox" value={dataItem.checked} /></td>
                <td>{dataItem.recentActivity}</td>
                <td>{dataItem.type}</td>
                <td>{dataItem.description}</td>
                <td>{dataItem.amount}</td>
                <td>{dataItem.balance}</td>
            </tr>
        );

    }

    render() {
        return (
            <div class="row">
                <table class="table table-striped table-bordered table-hover">
                    <thead>
                    </thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Recent Activity</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                    <tbody>ROWS DATA
                    {this.rows}
                    </tbody>
                </table>
            </div>
        );
    }






}






class App extends Component {
  render() {
    return (
      <div className="container">
          <Header/>
          <Searchbar/>
          <DataTable/>
      </div>
    );
  }
}

export default App;
