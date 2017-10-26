
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
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
                            <Route exact path="/HTML_Boston" component= {BostonCode} />
                            <Route exact path="/JavascriptFundamentals" component= {LearnCode} />
                            <Route exact path="/HTML_Programming" component={Programming} />
                            <Route exact path="/HTML_Traversy" component={Traversy} />
                            <Route exact path="/HTML_Derek" component={DerekBanas} />
                            <Route exact path="/DataStructures" component={MyCodeSchool} />
                            <Route exact path="/Bootstrap" component={BradHussey} />
                        </Switch>

                </div>
            </Router>


        )

    }
}



export default App;
