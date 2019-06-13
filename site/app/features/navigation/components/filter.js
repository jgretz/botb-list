import React, {Fragment} from 'react';
import {compose, withState} from '@truefit/bach';
import {withSelector, withActions} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';
import {renderIf, withHandlers} from '@truefit/bach-recompose';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';

import {setFilter} from '../../botb/actions';

import {isAboutRouteSelector} from '../selectors';
import {filterSelector} from '../../botb/selectors';

const Filter = ({
  open,
  openModal,
  closeModal,

  search,
  handleSearchChange,

  notTasted,
  handleNotTastedChange,

  clearFilter,
  applyFilter,

  classes,
}) => (
  <Fragment>
    <IconButton onClick={openModal}>
      <FilterListIcon />
    </IconButton>

    <Dialog
      open={open}
      onClose={closeModal}
      className={classes.modal}
      aria-labelledby="Beer Filter"
      aria-describedby="The filter criteria for the displayed beer"
    >
      <div className={classes.content}>
        <Typography variant="h4">Filter</Typography>
        <TextField
          id="outlined-name"
          label="Search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
        />
        <FormControlLabel
          control={
            <Switch
              checked={notTasted}
              onChange={handleNotTastedChange}
              value="notTasted"
            />
          }
          className={classes.checkbox}
          label="Only Not Tasted"
        />
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            color="primary"
            variant="outlined"
            onClick={clearFilter}
          >
            Clear
          </Button>

          <Button
            className={classes.button}
            color="secondary"
            variant="outlined"
            onClick={applyFilter}
          >
            Apply
          </Button>
        </div>
      </div>
    </Dialog>
  </Fragment>
);

const Nothing = () => null;

export default compose(
  withSelector('isAboutRoute', isAboutRouteSelector),
  withSelector('filter', filterSelector),

  withState('open', 'setOpen', false),
  withState('search', 'setSearch', ({filter}) => filter.search),
  withState('notTasted', 'setNotTasted', ({filter}) => filter.notTasted),

  withActions({setFilter}),

  withHandlers({
    openModal: ({setOpen, setSearch, setNotTasted, filter}) => () => {
      setSearch(filter.search);
      setNotTasted(filter.notTasted);

      setOpen(true);
    },

    closeModal: ({setOpen}) => () => {
      setOpen(false);
    },

    handleSearchChange: ({setSearch}) => e => {
      setSearch(e.target.value);
    },

    handleNotTastedChange: ({setNotTasted}) => e => {
      setNotTasted(e.target.checked);
    },

    clearFilter: ({setOpen, setFilter}) => () => {
      setOpen(false);
      setFilter('', false);
    },

    applyFilter: ({setOpen, setFilter, search, notTasted}) => () => {
      setOpen(false);
      setFilter(search, notTasted);
    },
  }),

  withStyles(theme => ({
    modal: {
      margin: 'auto',
    },
    content: {
      width: 260,
      padding: '12px 6px 0 6px',
      borderRadius: 12,

      display: 'flex',
      flexDirection: 'column',

      justifyContent: 'center',
      alignItems: 'center',
    },

    textField: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },

    checkbox: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },

    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',

      margin: 6,
      width: '100%',

      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      margin: theme.spacing(1),
      height: 60,
      width: 80,
    },
  })),
  renderIf(({isAboutRoute}) => isAboutRoute, Nothing),
)(Filter);
