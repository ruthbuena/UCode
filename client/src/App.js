
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BostonCode from './components/BostonCode/BostonCode';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/signup';
import Header from './components/Header';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/signup" component={Register}/>
                            <Route exact path="/BostonCode" component={BostonCode}/>
                        </Switch>
                </div>
            </Router>

        )

    }
}




export default App;
