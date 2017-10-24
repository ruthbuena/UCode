import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

// remove tap delay, essential for MaterialUI to work properly with plugin
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));



// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
// import BostonCode from './components/BostonCode/BostonCode';
// import Home from './components/Home';
//
//
// const App = () =>
//
// <Router>
// 	<Switch>
// 	  <Route exact path="/" component = {Home} />
//       <Route exact path="/BostonCode" component= {BostonCode} />
//     </Switch>
// </Router>;
//
//
// export default App;
