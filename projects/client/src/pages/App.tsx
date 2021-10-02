import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Report from './Report';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Layout from '../components/Layout';
import CreatePatient from './CreatePatient';
import ImageMapGenerator from './ImageMapGenerator';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Report />
            </Route>
            <Route path='/create'>
              <CreatePatient />
            </Route>
            <Route path='/image-map'>
              <ImageMapGenerator />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
