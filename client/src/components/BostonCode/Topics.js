import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navpills from './Nav';
import HTML from './HTML';
import CSS from './CSS';
import JavaScript from './Javascript';
import ReactJs from './ReactJs';
import Node from './Node';
import SQL from './SQL';
import Mongo from './Mongo';
import ES from './ES';
import Redux from './Redux';
import Git from './Git';
import Ajax from './Ajax';
const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route exact path="/HTML_Boston" component={HTML} />
      <Route exact path="/CSS" component={CSS} />
      <Route exact path="/Javascript" component={JavaScript} />
      <Route exact path="/ReactJs" component={ReactJs} />
      <Route exact path="/Node" component={Node} />
      <Route exact path="/SQL" component={SQL} />
      <Route exact path="/Mongo" component={Mongo} />
      <Route exact path="/ES" component={ES} />
      <Route exact path="/Redux" component={Redux} />
      <Route exact path="/Git" component={Git} />
      <Route exact path="/Ajax" component={Ajax} />

    </div>
  </Switch>;

export default Topics;