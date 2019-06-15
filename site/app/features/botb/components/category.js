import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {ScrollElement} from 'react-scroll';

import Brewery from './brewery';
import {breweriesForCategorySelector} from '../selectors';

const Category = ({category, breweries}) => (
  <div name={category}>
    {breweries.map(brewery => (
      <Brewery key={brewery} brewery={brewery} />
    ))}
  </div>
);

export default compose(withSelector('breweries', breweriesForCategorySelector))(
  ScrollElement(Category),
);
