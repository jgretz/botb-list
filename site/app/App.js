import React from 'react';
import {withRouter} from 'react-router';

import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';

import {theme} from './styles/themes';

import {Nav, Footer} from './features/navigation/components';
import {Routes} from './features/shared/components';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />

    <Nav />
    <Routes />
    <Footer />
  </MuiThemeProvider>
);

export default withRouter(App);
