import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {renderIf} from '@truefit/bach-recompose';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import {setBeerCheck} from '../actions';

import {isBeerCheckedSelector} from '../selectors';

const BeerButton = ({classes, toggleBeer}) => (
  <Button
    variant="outlined"
    className={classes.drinkButton}
    onClick={toggleBeer(true)}
  >
    {' '}
  </Button>
);

const BeerCheckedButton = ({classes, toggleBeer}) => (
  <IconButton onClick={toggleBeer(false)}>
    <CheckCircleOutlineIcon className={classes.checkedButton} />
  </IconButton>
);

export default compose(
  withActions({setBeerCheck}),
  withSelector('isBeerChecked', isBeerCheckedSelector),

  withCallback('toggleBeer', ({beer, setBeerCheck}) => check => () => {
    setBeerCheck(beer, check);
  }),

  withStyles(theme => ({
    drinkButton: {
      height: 50,
      width: 50,
      maxWidth: 50,
      minWidth: 50,

      borderRadius: '50%',

      borderColor: theme.palette.primary.main,
      borderWidth: 5,
    },

    checkedButtonContainer: {
      borderRadius: '50%',
    },

    checkedButton: {
      height: 60,
      width: 60,

      margin: 0,
      padding: 0,

      color: theme.palette.primary.main,
    },
  })),

  renderIf(({isBeerChecked}) => isBeerChecked, BeerCheckedButton),
)(BeerButton);
