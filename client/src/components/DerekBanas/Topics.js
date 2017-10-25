import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navpills from './Nav';
import HTML from './HTML';
import CSS from './CSS';
import JQuery from './JQuery';
import JavaScript from './Javascript';
import Ajax from './Ajax';
import Node from './Node';
import Mongo from './Mongo';
import Object from './Object';
import SQL from './SQL';
import Git from './Git';

const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route exact path="/HTML_Derek" component={HTML} />
      <Route exact path="/CSS" component={CSS} />
      <Route exact path="/JQuery" component={JQuery} />
      <Route exact path="/Javascript" component={JavaScript} />
      <Route exact path="/Ajax" component={Ajax} />
      <Route exact path="/Node" component={Node} />
      <Route exact path="/Mongo" component={Mongo} />
      <Route exact path="/Object" component={Object} />
      <Route exact path="/SQL" component={SQL} />
      <Route exact path="/Git" component={Git} />

    </div>
  </Switch>;

export default Topics;