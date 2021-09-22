import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './Notes';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Layout from '../components/Layout';
import CreatePatient from './CreatePatient';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route path='/create'>
              <CreatePatient />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
