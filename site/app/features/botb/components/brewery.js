import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Typography from '@material-ui/core/Typography';
import Beer from './beer';

import {beersForBrewerySelector} from '../selectors';

const Brewery = ({brewery, beers, classes}) => (
  <div className={classes.container}>
    <Typography variant="h4" className={classes.title}>
      {brewery}
    </Typography>
    {beers.map(beer => (
      <Beer key={beer.id} beer={beer} />
    ))}
  </div>
);

export default compose(
  withSelector('beers', beersForBrewerySelector),
  withStyles(theme => ({
    container: {
      marginTop: 20,
    },
    title: {
      marginBottom: 20,
      color: theme.palette.secondary.main,
    },
  })),
)(Brewery);
