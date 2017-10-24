import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navpills from './Nav';
import HTML from './HTML';
import Bootstrap from './Bootstrap';
import JQuery from './JQuery';
import JavaScript from './Javascript';
import ReactJs from './ReactJs';
import Node from './Node';
import Crash from './CrashCourses';
import ES from './ES';
import Passport from './Passport';
import API from './API';
import Express from './Express';

const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route exact path="/HTML" component={HTML} />
      <Route exact path="/Bootstrap" component={Bootstrap} />
      <Route exact path="/JQuery" component={JQuery} />
      <Route exact path="/Javascript" component={JavaScript} />
      <Route exact path="/ReactJs" component={ReactJs} />
      <Route exact path="/Node" component={Node} />
      <Route exact path="/Crash" component={Crash} />
      <Route exact path="/ES" component={ES} />
      <Route exact path="/Passport" component={Passport} />
      <Route exact path="/API" component={API} />
      <Route exact path="/Express" component={Express} />

    </div>
  </Switch>;

export default Topics;