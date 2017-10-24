
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BostonCode from './components/BostonCode/BostonCode';
import LearnCode from './components/LearnCodeAcademy/LearnCodeAcademy';
import Programming from './components/ProgrammingKnowledge/ProgrammingKnowledge';
import Home from './components/Home';


const App = () =>

<Router>
	<Switch>
	  <Route exact path="/" component = {Home} />
      <Route exact path="/BostonCode" component= {BostonCode} />
      <Route exact path="/LearnCode" component= {LearnCode} />
      <Route exact path="/Programming" component={Programming} />
    </Switch>
</Router>;


export default App;
