
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BostonCode from './components/BostonCode/BostonCode';
import LearnCode from './components/LearnCodeAcademy/LearnCodeAcademy';
import Programming from './components/ProgrammingKnowledge/ProgrammingKnowledge';
import Traversy from './components/Traversy/Traversy';
import DerekBanas from './components/DerekBanas/DerekBanas';
import MyCodeSchool from './components/MyCodeSchool/MyCodeSchool';
import BradHussey from './components/BradHussey/BradHussey';

import Home from './components/Home';


const App = () =>

<Router>
	<Switch>
	  <Route exact path="/" component = {Home} />
      <Route exact path="/BostonCode" component= {BostonCode} />
      <Route exact path="/LearnCode" component= {LearnCode} />
      <Route exact path="/Programming" component={Programming} />
      <Route exact path="/Traversy" component={Traversy} />
      <Route exact path="/DerekBanas" component={DerekBanas} />
      <Route exact path="/MyCodeSchool" component={MyCodeSchool} />
      <Route exact path="/BradHussey" component={BradHussey} />
    </Switch>
</Router>;


export default App;
