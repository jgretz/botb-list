import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';

import Typography from '@material-ui/core/Typography';
import Brewery from './brewery';

import {breweriesForCategorySelector} from '../selectors';

const Category = ({category, breweries}) => (
  <div>
    <Typography variant="h3">{category}</Typography>
    {breweries.map(brewery => (
      <Brewery key={brewery} brewery={brewery} />
    ))}
  </div>
);

export default compose(withSelector('breweries', breweriesForCategorySelector))(
  Category,
);
