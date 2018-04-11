import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Table(){

    return (





            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="jumbotron">
                            <h1>Steps</h1>
                            <p>Smart UI component which allows you to easily create wizard-like interfaces.</p>
                            <p><a href="http://www.jquery-steps.com/GettingStarted" target="_blank"
                                  className="btn btn-primary btn-lg" role="button">Learn more about jQuery Steps</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Basic Wizzard</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user">
                                        <li><a href="#">Config option 1</a>
                                        </li>
                                        <li><a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <p>
                                    This is basic example of Step
                                </p>
                                <div id="wizard">
                                    <h1>First Step</h1>
                                    <div className="step-content">
                                        <div className="text-center m-t-md">
                                            <h2>Hello in Step 1</h2>
                                            <p>
                                                This is the first content.
                                            </p>
                                        </div>
                                    </div>

                                    <h1>Second Step</h1>
                                    <div className="step-content">
                                        <div className="text-center m-t-md">
                                            <h2>This is step 2</h2>
                                            <p>
                                                This content is diferent than the first one.
                                            </p>
                                        </div>
                                    </div>

                                    <h1>Third Step</h1>
                                    <div className="step-content">
                                        <div className="text-center m-t-md">
                                            <h2>This is step 3</h2>
                                            <p>
                                                This is last content.
                                            </p>
                                        </div>
                                    </div>
                                </div>

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

                <Table/>

            </div>
        );
    }
}

export default App;
