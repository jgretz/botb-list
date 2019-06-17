import React from 'react';
// import {compose, withEffect} from '@truefit/bach';
// import {withActions} from '@truefit/bach-redux';
import {compose} from '@truefit/bach';
import {renderIf} from '@truefit/bach-recompose';

import Container from '@material-ui/core/Container';

import Summary from './summary';
import Details from './details';
import NotOn from './notOn';

// import {connectToSocket} from '../actions';

const Stats = () => (
  <Container>
    <Summary />
    <Details />
  </Container>
);

export default compose(
  // withActions({connectToSocket}),
  // withEffect(({connectToSocket}) => {
  //   connectToSocket();
  // }, []),

  renderIf(() => true, NotOn),
)(Stats);
