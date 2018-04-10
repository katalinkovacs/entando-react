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
                <p>sorting icon: <span className="glyphicons glyphicons-sorting"></span></p>
            </div>
        );
    }
}


/*TransactionInfoTable*/
function TransactionInfoTable(props) {
    const dataLocal = props.dataArg;

    const rows = dataLocal.map((dataItem) =>
        <tr>
            <td><input type="checkbox" value={dataItem.checked} /></td>
            <td>{dataItem.recentActivity}</td>
            <td>{dataItem.type}</td>
            <td>{dataItem.description}</td>
            <td>{dataItem.amount}</td>
            <td>{dataItem.balance}</td>
        </tr>
    );

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
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );

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
                    <tbody>
                    {this.rows}
                    </tbody>
                </table>
            </div>
        );
    }

}

/*
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
}*/


class App extends Component {
    constructor() {
        super();
        this.state = {
           /* transactionSelectValue: "",
            searchText: "default",
            transactionList: ["Transaction1", "Transaction2", "Transaction3"],*/
            data:
                [
                    {
                        "checked": true,
                        "recentActivity": "18/03/2018",
                        "type": "Transfer",
                        "description": "some description ",
                        "amount": "-$24",
                        "balance": "$36.00"
                    },
                    {
                        "checked": false,
                        "recentActivity": "18/03/2018",
                        "type": "Charge",
                        "description": "Simple",
                        "amount": "+$24",
                        "balance": "+$36.66"
                    },
                    {
                        "checked": true,
                        "recentActivity": "18/03/2018",
                        "type": "Payment",
                        "description": "some description",
                        "amount": "+$25",
                        "balance": "$36.00"
                    },
                    {
                        "checked": true,
                        "recentActivity": "18/03/2018",
                        "type": "Transfer",
                        "description": "some description ",
                        "amount": "-$24",
                        "balance": "$36.00"
                    },
                    {
                        "checked": false,
                        "recentActivity": "18/03/2018",
                        "type": "Charge",
                        "description": "Simple",
                        "amount": "+$24",
                        "balance": "+$36.66"
                    },
                    {
                        "checked": true,
                        "recentActivity": "18/03/2018",
                        "type": "Payment",
                        "description": "some description",
                        "amount": "+$25",
                        "balance": "$36.00"
                    }
                ]
        };
    }

    render() {
        return (
            <div class="container">
                <Header/>
                <Searchbar/>
                {/*<SearchBar searchText={this.state.searchText} transactionList={this.state.transactionList} transactionSelectValue={this.state.transactionSelectValue} />*/}
                <TransactionInfoTable dataArg={this.state.data} />
            </div>
        );
    }
}






export default App;
