import  React                from 'react';
import { useState, useEffect }          from 'react'
import {Container, Grid}     from '@material-ui/core';
import LogIn                 from './LogIn';
import Blogs                 from './Blogs';
import loginService          from '../services/login';
import blogService           from '../services/blog'; 
import axios from 'axios';


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [user,     setUser]     = useState(null);
  // const [blogs, setBlogs]       = useState([]);


  // Testing useEffect
  // useEffect(() => {
  //   console.log('effect');
  //   axios
  //     .get('http://localhost:4000/api/blogs')
  //     .then(response => {
  //       console.log('promise fullfilled');
  //       setBlogs(response.data);
  //     })
  // }, []);
  // console.log('render', blogs[3], 'blogs');

  const handleLogin =  async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username, password,
      });
      console.log('success!');
      blogService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');
    

    } catch (exception) {
      console.log('Wrong credentials');
      setTimeout(() => {
        console.log(null);
      }, 5000);
    }
  }
       
    return (
      
      <Container>
        <Grid container justify="center">
          {user===null? <LogIn handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword}
                              username={username} password={password} user={user}/>: <Blogs/>}
        </Grid>
      </Container>
    )
}

export default App;