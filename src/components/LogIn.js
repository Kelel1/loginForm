import React from 'react';
import { TextField, Button } from '@material-ui/core';


const LogIn = ({
  handleLogin,
  setUsername,
  setPassword
}) => {   

    return (
      <div>

     <h1>Login</h1>  

      <form onSubmit={handleLogin}>
        <div>
          <TextField label="username" onChange={({ target }) => setUsername(target.value)} />              
        </div>
        <div>
          <TextField label="password" type="password" onChange={({ target }) => setPassword(target.value)}/>
        </div>
        <br></br>
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>

    )

}

export default LogIn;