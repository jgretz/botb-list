import React from 'react';
import {compose, withState} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';
import {renderIf} from '@truefit/bach-recompose';

import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

import {isAboutRouteSelector} from '../selectors';

const Filter = () => (
  <>
    <IconButton>
      <FilterListIcon />
    </IconButton>
  </>
);

const Nothing = () => null;

export default compose(
  withState('open', 'setOpen', false),
  withStyles(),

  withSelector('isAboutRoute', isAboutRouteSelector),

  renderIf(({isAboutRoute}) => isAboutRoute, Nothing),
)(Filter);
