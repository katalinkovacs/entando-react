import React, { Component } from 'react';
import './App.css';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById('root'));

class App extends Component {

    constructor(){
        super();
        this.state = {
            projects: [
                {
                title: 'Business website',
                category: 'Web design',
                },
                {
                    title: 'Social App',
                    category: 'Mobile development',
                },
                {
                    title: 'Ecommerce shopping cart',
                    category: 'Web development',
                }
            ]
        }
    }




    render() {
        return (
            <div className="App">
                <h1>My react app.</h1>
            </div>
        );
    }
}

export default App;
