import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, IndexRoute, BrowserRouter as Router, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import reducers from './reducers';
import RequireAuth from './components/auth/require_auth';


import BostonCode from './components/BostonCode/BostonCode';
import CSS from './components/BostonCode/CSS';
import ES from './components/BostonCode/ES';
import HTML from './components/BostonCode/HTML';
import Javascript from './components/BostonCode/Javascript';
import Mongo from './components/BostonCode/Mongo';
import Nav from './components/BostonCode/Nav';
import Node from './components/BostonCode/Node';
import ReactJs from './components/BostonCode/ReactJs';
import SQL from './components/BostonCode/SQL';
import Topics from './components/BostonCode/Topics';

import ChannelsM from './components/ChannelsM';
import Header from './components/Header';

import { AUTH_USER } from './actions/types';

// reduxThunk library
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');


if(token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}



ReactDOM.render(
  <div>
  <Provider store={store}>
    <Router>
    <Switch>
      <Route exact path="/" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="feature" component={RequireAuth(BostonCode)} />
        {/* Dashboard Route */}
        <Route path="HTML" component={RequireAuth(HTML)} />
        <Route path="CSS" component={RequireAuth(CSS)} />
        <Route path="Javascript" component={RequireAuth(Javascript)} />
        <Route path="Node" component={RequireAuth(Node)} />
        <Route path="React" component={RequireAuth(React)} />
        <Route path="ES" component={RequireAuth(ES)} />
        <Route path="SQL" component={RequireAuth(SQL)} />
        <Route path="Mongo" component={RequireAuth(Mongo)} />
      </Route>
      </Switch>
    </Router>


  </Provider>
  </div>
  , document.getElementById('root'));
