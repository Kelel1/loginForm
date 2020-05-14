import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './components/LogIn';
import Container from '@material-ui/core/Container'

const App = () => {
   
    
  return (
    
    <Container>
      <LogIn></LogIn>
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));