
import React from 'react';
import Cards from './components/ChannelsM';
import { BrowserRouter as Router, Route } from "react-router-dom";

import BostonCode from './components/BostonCode/BostonCode';
import Header from './components/Header';

const App = () =>

<Router>
    <div>
      <Header />
      <Cards />
      <Route path="/BostonCode" component={BostonCode} />
    </div>
</Router>;


export default App;
