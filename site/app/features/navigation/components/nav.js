import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import FilterListIcon from '@material-ui/icons/FilterList';

import {Link} from 'react-router-dom';

const Nav = ({classes}) => (
  <AppBar position="static">
    <Toolbar>
      <Container className={classes.bar}>
        <Link to="/" className={classes.title}>
          <Typography variant="h6" className={classes.title}>
            Beers of the Burgh
          </Typography>
        </Link>
        <div>
          <IconButton>
            <FilterListIcon />
          </IconButton>
          <Link to="/about">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Link>
        </div>
      </Container>
    </Toolbar>
  </AppBar>
);

export default compose(
  withStyles(() => ({
    bar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 0,
    },
    title: {
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#fff',
    },
  })),
)(Nav);
