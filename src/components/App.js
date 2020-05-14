import React from 'react';
import {Container, Grid} from '@material-ui/core';
import LogIn from './LogIn';


const App = () => {
       
    return (
      
      <Container>
        <Grid container justify="center">
        <LogIn></LogIn>
        </Grid>
      </Container>
    )
}

export default App;