import React from 'react';
import {withRouter} from 'react-router';
import {compose, withEffect} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';

import {theme} from './styles/themes';

import {Nav} from './features/navigation/components';
import {Routes} from './features/shared/components';

import {registerUser} from './features/stats/actions';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <Nav />
    <Routes />
  </MuiThemeProvider>
);

export default compose(
  withActions({registerUser}),
  withEffect(({registerUser}) => {
    registerUser();
  }, []),
)(withRouter(App));
