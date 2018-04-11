import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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

    );
  }
}

export default App;
