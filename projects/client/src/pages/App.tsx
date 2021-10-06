import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import SignIn from './SignIn';
import PrivateRoute from '../components/PrivateRoute';
import Report from './BAK/Report';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route exact component={SignIn} path='/login' />
            <Route exact component={SignIn} path='/signup' />
            <PrivateRoute component={Report} path='/report' />
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
