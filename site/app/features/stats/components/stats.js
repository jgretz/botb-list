import React from 'react';
import {compose, withEffect} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';

import Container from '@material-ui/core/Container';

import {connectToSocket} from '../actions';
import {
  beersDrankSelector,
  drinkersSelector,
  uniqueBeersSelector,
} from '../selectors';

const Stats = ({beersDrank, drinkers, uniqueBeers}) => (
  <Container>
    <h1>Total Drinks: {beersDrank}</h1>
    <h1>Total Drinkers: {drinkers}</h1>
    <h1>Total Unique Beers: {uniqueBeers}</h1>
  </Container>
);

export default compose(
  withActions({connectToSocket}),
  withEffect(({connectToSocket}) => {
    connectToSocket();
  }, []),

  withSelector('beersDrank', beersDrankSelector),
  withSelector('drinkers', drinkersSelector),
  withSelector('uniqueBeers', uniqueBeersSelector),
)(Stats);
