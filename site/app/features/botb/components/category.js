import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import Brewery from './brewery';

import {breweriesForCategorySelector} from '../selectors';

const Category = ({breweries}) => (
  <div>
    {breweries.map(brewery => (
      <Brewery key={brewery} brewery={brewery} />
    ))}
  </div>
);

export default compose(withSelector('breweries', breweriesForCategorySelector))(
  Category,
);
