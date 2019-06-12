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

const Nav = ({classes}) => (
  <AppBar position="static">
    <Toolbar>
      <Container className={classes.bar}>
        <Typography variant="h6" className={classes.title}>
          BOTB
        </Typography>
        <div>
          <IconButton>
            <FilterListIcon />
          </IconButton>
          <IconButton>
            <InfoIcon />
          </IconButton>
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
    },
  })),
)(Nav);
