import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navpills from './Nav';
import Fundamentals from './JavascriptFundamentals';
import Javascript2 from './Javascript2';
import Modular from './ModularJavascript';
import ReactJs from './ReactJs';
import Node from './Node';
import ES from './ES';
import Redux from './Redux';
import JQuery from './JQuery';

const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route exact path="/JavascriptFundamentals" component={Fundamentals} />
      <Route exact path="/Javascript2" component={Javascript2} />
      <Route exact path="/Modular" component={Modular} />
      <Route exact path="/ReactJs" component={ReactJs} />
      <Route exact path="/Node" component={Node} />
      <Route exact path="/ES" component={ES} />
      <Route exact path="/Redux" component={Redux} />
      <Route exact path="/JQuery" component={JQuery} />
    </div>
  </Switch>;

export default Topics;