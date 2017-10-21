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



const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route path="/HTML" component={HTML} />
      <Route path="/CSS" component={CSS} />
      <Route path="/Javascript" component={JavaScript} />
      <Route path="/ReactJs" component={ReactJs} />
      <Route path="/Node" component={Node} />
      <Route path="/SQL" component={SQL} />
      <Route path="/Mongo" component={Mongo} />
      <Route path="/ES" component={ES} />
    </div>
  </Switch>;

export default Topics;
