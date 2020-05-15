import React from 'react';
// import Blogs                 from './Blogs';
import { TextField, Button } from '@material-ui/core';


const LogIn = ({
  handleLogin,
  setUsername,
  setPassword
}) => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');    

    // const handleLogin =  async (event) => {
    //     event.preventDefault();
    //     try {
    //       const user = await loginService.login({
    //         username, password,
    //       });
    //       console.log('success!');
    //       // setUser(user);
    //       setUsername('');
    //       setPassword('');
        

    //     } catch (exception) {
    //       console.log('Wrong credentials');
    //       setTimeout(() => {
    //         console.log(null);
    //       }, 5000);
    //     }
    // }

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