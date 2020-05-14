import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const history                 = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(username, password);
        // history.push('/');        
    }

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