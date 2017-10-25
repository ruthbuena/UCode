import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navpills from './Nav';
import Bootstrap from './Bootstrap';
import CSS from './CSS';
import HTML from './HTML';
import Javascript from './Javascript';
import Node from './Node';
import SQL from './SQL';
import Mongo from './Mongo';

const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route exact path="/Bootstrap" component={Bootstrap} />
      <Route exact path="/CSS" component={CSS} />
      <Route exact path="/HTML_Programming" component={HTML} />
      <Route exact path="/Javascript" component={Javascript} />
      <Route exact path="/Node" component={Node} />
      <Route exact path="/SQL" component={SQL} />
      <Route exact path="/Mongo" component={Mongo} />
    </div>
  </Switch>;

export default Topics;