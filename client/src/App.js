
import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';





class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
       <p className="App-intro">
         Testing the UCode application - make updates <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
