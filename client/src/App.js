
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HTML from './components/HTML';
import CSS from './components/CSS';
import JavaScript from './components/Javascript';
import ReactJs from './components/ReactJs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to YouCode React</h2>
        </div>
        <HTML />
        <CSS />
        <JavaScript />
        <ReactJs />
      </div>
    );
  }
}

export default App;