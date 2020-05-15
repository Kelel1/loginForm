import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App';
import axios    from 'axios';


axios.get('http://localhost:4000/api/login').then(response => {
  const login = response.data;
  console.log(login);
});

ReactDOM.render(<App />, document.getElementById('root'));