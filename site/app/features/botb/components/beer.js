import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import BeerButton from './beerButton';

const formatBeerSubtitle = beer => {
  if (beer.type && beer.abv) {
    return `${beer.type} - ${beer.abv}`;
  }

  return beer.type || beer.abv || '';
};

const Beer = ({beer, classes}) => (
  <Card className={classes.card}>
    <div className={classes.controls}>
      <BeerButton beer={beer} />
    </div>
    <CardContent>
      <Typography component="h5" variant="h5">
        {beer.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {formatBeerSubtitle(beer)}
      </Typography>
    </CardContent>
  </Card>
);

export default compose(
  withStyles(() => ({
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',

      marginBottom: 20,
    },
    controls: {
      width: 80,
      minWidth: 80,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })),
)(Beer);
