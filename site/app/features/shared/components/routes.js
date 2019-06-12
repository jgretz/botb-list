import React from 'react';
import {Switch, Route} from 'react-router';

import {Landing} from '../../botb/components';
import NotFound from './notFound';

export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />

    <Route component={NotFound} />
  </Switch>
);
