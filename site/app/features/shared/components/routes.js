import React from 'react';
import {Switch, Route} from 'react-router';

import {Landing} from '../../botb/components';

import {About, NotFound} from './index';

export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />

    <Route component={NotFound} />
  </Switch>
);
