import React, {Fragment} from 'react';
import {compose, withState} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';
import {renderIf, withHandlers} from '@truefit/bach-recompose';
import {scroller} from 'react-scroll';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';

import {isIndexRouteSelector} from '../selectors';
import {categoriesSelector} from '../../botb/selectors';

const Filter = ({
  open,
  openModal,
  closeModal,

  categories,
  handleCategoryClick,

  classes,
}) => (
  <Fragment>
    <IconButton onClick={openModal}>
      <GetAppIcon className={classes.icon} />
    </IconButton>

    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="Jump To Category Dialog"
      aria-describedby="The list of categories, select one and you will jump to it"
      PaperProps={{className: classes.modal}}
    >
      <div className={classes.content}>
        {categories.map(category => (
          <Button
            key={category}
            className={classes.categoryButton}
            onClick={handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </Dialog>
  </Fragment>
);

const Nothing = () => null;

export default compose(
  withSelector('isIndexRoute', isIndexRouteSelector),
  withSelector('categories', categoriesSelector),

  withState('open', 'setOpen', false),

  withHandlers({
    openModal: ({setOpen}) => () => {
      setOpen(true);
    },

    closeModal: ({setOpen}) => () => {
      setOpen(false);
    },

    handleCategoryClick: ({setOpen}) => category => () => {
      setOpen(false);

      scroller.scrollTo(category, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -12,
      });
    },
  }),

  withStyles(() => ({
    modal: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    content: {
      backgroundColor: 'transparent',

      overflowX: 'hidden',
    },

    categoryButton: {
      fontSize: 30,
      width: 80,
      height: 80,

      margin: '0 6px 6px 6px',
      borderRadius: '50%',

      backgroundColor: '#424242',

      '&:hover': {
        backgroundColor: '#424242',
        borderColor: '#000',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#424242',
        borderColor: '#000',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0, 0, 0, .5)',
      },
    },
  })),

  renderIf(({isIndexRoute}) => !isIndexRoute, Nothing),
)(Filter);
