import React from 'react';
import {compose, withEffect} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

import Container from '@material-ui/core/Container';

import Summary from './summary';
import Details from './details';

import {connectToSocket} from '../actions';

const Stats = () => (
  <Container>
    <Summary />
    <Details />
  </Container>
);

export default compose(
  withActions({connectToSocket}),
  withEffect(({connectToSocket}) => {
    connectToSocket();
  }, []),
)(Stats);
