import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




const user = {
    firstName: 'Kevin',
    lastName: 'Smith',
};

function getUserName(user) {
    return user.firstName + ' ' + user.lastName;
}

const element = <h1>Hello, {getUserName(user)}!</h1>;




/*HEADER*/
class Header extends Component {

    render() {
        return (
            <div className="header">

                <h3 className="text-muted">Hello {getUserName(user)}! <small>Your last access: DATE</small></h3>

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
                    <div className="col-sm-8">Information</div>

                    <div className="col-sm-4">Account Balance
                        <a className="thumbnail" href="#">
                            <img className="img-responsive" src="entandologo.jpg" alt="EntandoLogo" width="460" height="345"/>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">Customer Information</div>
                    <div className="col-sm-6">Primary Contact Information</div>
                </div>

                <div className="row">
                    <div className="col-sm-6">Organization full name</div>
                    <div className="col-sm-6">Point of contact</div>
                </div>

                <div className="row">
                    <div className="col-sm-6">Internal application ID</div>
                    <div className="col-sm-6">Phone</div>
                </div>

                <div className="row">
                    <div className="col-sm-6">Entity Type</div>
                    <div className="col-sm-6">Email</div>
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
