import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Category from './category';

import {categoriesSelector} from '../selectors';

const Landing = ({categories}) => (
  <div>
    {categories.map(category => (
      <Category key={category} category={category} />
    ))}
  </div>
);

export default compose(
  withSelector('categories', categoriesSelector),

  withStyles(),
)(Landing);
