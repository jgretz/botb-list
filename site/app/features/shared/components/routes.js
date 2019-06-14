import React from 'react';
import {Switch, Route} from 'react-router';

import {Landing} from '../../botb/components';
import {Stats} from '../../stats/components';

import {About, NotFound} from './index';

export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route exact path="/stats" component={Stats} />

    <Route component={NotFound} />
  </Switch>
);
