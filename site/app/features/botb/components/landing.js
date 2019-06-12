import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Container from '@material-ui/core/Container';
import Category from './category';

import {categoriesSelector} from '../selectors';

const Landing = ({categories}) => (
  <Container>
    {categories.map(category => (
      <Category key={category} category={category} />
    ))}
  </Container>
);

export default compose(
  withSelector('categories', categoriesSelector),

  withStyles(),
)(Landing);
