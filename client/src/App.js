
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import BostonCode from './components/BostonCode/BostonCode';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/signup';
import Header from './components/Header';
import Cards from './components/ChannelsM.js';

class App extends React.Component {
    state = {
        authenticated: false
    }

    render(){
        return (
            <Router>
                <div>
                    <Header authenticated={this.state.authenticated} />
                        <Switch>
                            <Route exact path="/" component={Home}/>

                            <Route exact path="/login" render={(props) => {
                               return <Login {...props} onSuccessfulLogin={() => {
                                    this.setState({
                                        authenticated: true
                                    })
                                }} />
                            }} />

                            <Route exact path="/signup" component={Register}/>
                            <Route exact path="/channels" component = {Cards} />
                            <Route exact path="/BostonCode" component={BostonCode}/>

                        </Switch>
                </div>
            </Router>

        )

    }
}




export default App;
