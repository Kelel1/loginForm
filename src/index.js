import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword]  = useState('');

    const handleLogin = (event) => {
      event.preventDefault();
      console.log('Logging in with ', username, password);
    }
    
  return (
    <div>

     <h1>Login</h1>

  

      <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />      
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));