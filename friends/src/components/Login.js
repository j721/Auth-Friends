import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login =props=> {

    const [credentials,setCredentials] = useState({
        username: '',
        password: ''
    })


  handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

 login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        this.props.history.push('/protected');
      })
      .catch(err => console.log({ err }));
  };


    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="password"
          />
          <button>Log in</button>
        </form>
      </div>
    );

}

export default Login;
