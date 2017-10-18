
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Channels from './components/Channels';
import BostonCode from './components/BostonCode/BostonCode';

const App = () =>
  <Router>
    <div>
      <Channels />
      <Route exact path="/BostonCode" component={BostonCode} />
    </div>
  </Router>;

export default App;
