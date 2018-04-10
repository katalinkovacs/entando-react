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

                    <div className="col-sm-8">Information
                      {/*  <div className="row">
                            <div className="col-sm-6">Customer Information -info</div>*/}
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th >Customer Information</th>
                                        <th >Primary Contact Information</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>12345</td>
                                        <td>Feb 1, 2014</td>
                                    </tr>
                                    <tr>
                                        <td>67890</td>
                                        <td>Jan 30, 2014</td>
                                    </tr>
                                    </tbody>
                                </table>




                          {/*  <div className="col-sm-6">Primary Contact Information -info</div>
                        </div>*/}
                    </div>

                    <div className="col-sm-4">Account Balance
                        <a className="thumbnail" href="#">
                            <img className="img-responsive" src="entandologo.jpg" alt="EntandoLogo" width="460" height="345"/>
                        </a>
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
