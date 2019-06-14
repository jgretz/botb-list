import React, {Fragment} from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import {
  beersDrankSelector,
  drinkersSelector,
  averageBeersPerDrinkerSelector,
  uniqueBeersSelector,
  mostBeersDrankSelector,
} from '../selectors';

const Summary = ({
  classes,
  beersDrank,
  drinkers,
  averageBeersPerDrinker,
  uniqueBeers,
  mostBeersDrank,
}) => {
  const stats = {
    'Total Drinks': beersDrank,
    'Total Drinkers': drinkers,
    'Average Beers / Drinker': averageBeersPerDrinker.toPrecision(3),
    'Total Unique Beers': uniqueBeers,
    'Most Beers By 1 Person': mostBeersDrank,
  };

  return (
    <Fragment>
      <Typography variant="h4" className={classes.title}>
        Summary
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(stats).map(stat => (
            <TableRow key={stat}>
              <TableCell>{stat}</TableCell>
              <TableCell align="right">{stats[stat]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default compose(
  withSelector('beersDrank', beersDrankSelector),
  withSelector('drinkers', drinkersSelector),
  withSelector('averageBeersPerDrinker', averageBeersPerDrinkerSelector),
  withSelector('uniqueBeers', uniqueBeersSelector),
  withSelector('mostBeersDrank', mostBeersDrankSelector),

  withStyles(() => ({
    title: {
      marginTop: 24,
    },
  })),
)(Summary);
