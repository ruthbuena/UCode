import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navpills from './Nav';
import DataStructures from './DataStructures';
import BinarySearch from './BinarySearch';
import Math from './Math';
import ProgrammingQuestions from './ProgrammingQuestions';
import Recursion from './Recursion';
import Sorting from './Sorting';
import TimeComplexity from './TimeComplexity';

const Topics = () =>
  <Switch>
    <div>
      <Navpills />
      <Route exact path="/DataStructures" component={DataStructures} />
      <Route exact path="/BinarySearch" component={BinarySearch} />
      <Route exact path="/Math" component={Math} />
      <Route exact path="/ProgrammingQuestions" component={ProgrammingQuestions} />
      <Route exact path="/Recursion" component={Recursion} />
      <Route exact path="/Sorting" component={Sorting} />
      <Route exact path="/TimeComplexity" component={TimeComplexity} />
    </div>
  </Switch>;

export default Topics;