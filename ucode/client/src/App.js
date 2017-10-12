import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Node from './components/Node';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to UCode</h1>
        </header>
        <p className="App-intro">
          Testing the UCode application - make updates <code>src/App.js</code> and save to reload.
        </p>
        <Node />
      </div>
    );
  }
}

export default App;
