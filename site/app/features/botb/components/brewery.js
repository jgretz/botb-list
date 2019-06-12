import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';

import Typography from '@material-ui/core/Typography';
import Beer from './beer';

import {beersForBrewerySelector} from '../selectors';

const Brewery = ({brewery, beers}) => (
  <div>
    <Typography variant="h4">{brewery}</Typography>
    {beers.map(beer => (
      <Beer key={beer} beer={beer} />
    ))}
  </div>
);

export default compose(withSelector('beers', beersForBrewerySelector))(Brewery);
