import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navpills from './Nav';
import Bootstrap from './Bootstrap4';
import JQuery from './JQuery';
import Sass from './Sass';
import WebDesign from './WebDesign';
import WebHosting from './WebHosting';

const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route exact path="/Bootstrap" component={Bootstrap} />
      <Route exact path="/JQuery" component={JQuery} />
      <Route exact path="/Sass" component={Sass} />
      <Route exact path="/WebDesign" component={WebDesign} />
      <Route exact path="/WebHosting" component={WebHosting} />
    </div>
  </Switch>;

export default Topics;