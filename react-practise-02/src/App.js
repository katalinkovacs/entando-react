import React, { Component } from 'react';
import './App.css';

function SearchBar(props) {

    const transactionList = props.transactionList;
    const selectItem = transactionList.map((transactionItem) =>
        <option key={transactionItem} value={transactionItem}>{transactionItem}</option>
    )
    return (

        <div class="row">
            <div class="col-sm-12">

                <form class="form-inline">

                    <div class="form-group mx-sm-3 mb-2">
                        <select class="form-control" >
                            {selectItem}
                        </select>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <input type="text" class="form-control" value={props.searchText} placeholder="Search" />
                    </div>
                    <input type="submit" class="btn btn-primary" value="Submit" />

                </form>

            </div>
        </div>
    );
}
function ProductTable(props) {
    const dataLocal = props.dataArg;


    const rows = dataLocal.map((dataItem) =>
        <tr>
            <td><input type="checkbox" value={dataItem.checked} /></td>
            <td>{dataItem.recentActivity}</td>
            <td>{dataItem.type}</td>
            <td>{dataItem.Description}</td>
            <td>{dataItem.Amount}</td>
            <td>{dataItem.Balance}</td>
        </tr>
    );

    return (
        <div class="row">
            <div class="col-sm-12">
                {/* <table class="grid table table-bordered table-hover">   */}
                {/* A JSX comment */}

                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    </thead>
                    <tr>
                        <th><input type="checkbox" class="checkbox" /></th>
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
        </div>
    );
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            transactionSelectValue: "",
            searchText: "default",
            transactionList: ["Transaction1", "Transaction2", "Transaction3"],
            data:
                [
                    {
                        "checked": true,
                        "recentActivity": "18/03/2018",
                        "type": "Payment",
                        "Description": "Simple",
                        "Amount": "+$24",
                        "Balance": "+36"
                    },
                    {
                        "checked": false,
                        "recentActivity": "18/03/2018",
                        "type": "Payment",
                        "Description": "Simple",
                        "Amount": "+$24",
                        "Balance": "+36"
                    },
                    {
                        "checked": true,
                        "recentActivity": "18/03/2018",
                        "type": "Payment",
                        "Description": "Simple",
                        "Amount": "+$25",
                        "Balance": "+36"
                    }
                ]
        };
    }

    render() {
        return (
            <div class="container">
                <SearchBar searchText={this.state.searchText} transactionList={this.state.transactionList} transactionSelectValue={this.state.transactionSelectValue} />
                <ProductTable dataArg={this.state.data} />
            </div>
        );
    }
}

export default App;    {/* available App component to render  */}
