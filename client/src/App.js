
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BostonCode from './components/BostonCode/BostonCode';
import Home from './components/Home';


const App = () =>

<Router>
	<Switch>
	  <Route exact path="/" component = {Home} />
      <Route exact path="/BostonCode" component= {BostonCode} />
    </Switch>
</Router>;


export default App;
