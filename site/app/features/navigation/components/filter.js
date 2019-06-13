import React from 'react';
import {compose, withState} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

const Filter = () => (
  <>
    <IconButton>
      <FilterListIcon />
    </IconButton>
  </>
);

export default compose(
  withState('open', 'setOpen', false),
  withStyles(),
)(Filter);
