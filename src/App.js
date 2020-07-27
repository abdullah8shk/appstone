import React, { Component } from 'react';
import ListTable from '../src/Components/List'
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Grid >
        <ListTable/>
      </Grid>
    );
  }
}

export default App;