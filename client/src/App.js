
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
import Login from './components/login';
import Register from './components/signup';
import Header from './components/Header';

class App extends React.Component {
    render(){
        return (
<Router>
	<Switch>
	  <Route exact path="/" component = {Home} />
       <Route exact path="/login" component={Login}/>
       <Route exact path="/signup" component={Register}/>
      <Route exact path="/HTML_Boston" component= {BostonCode} />
      <Route exact path="/JavascriptFundamentals" component= {LearnCode} />
      <Route exact path="/HTML_Programming" component={Programming} />
      <Route exact path="/HTML_Traversy" component={Traversy} />
      <Route exact path="/HTML_Derek" component={DerekBanas} />
      <Route exact path="/DataStructures" component={MyCodeSchool} />
      <Route exact path="/Bootstrap" component={BradHussey} />
    </Switch>
</Router>;
        )

    }
}



export default App;
