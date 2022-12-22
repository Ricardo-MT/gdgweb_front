import axios from 'axios';
import React, { FormEvent, useState } from 'react';

const login = ({email, password}:{email: string, password: string}) => axios.post(process.env.REACT_APP_API_URL + "/authentication", {email, password})

const App = () => {
  const [state, setState] = useState<string | null>(null);

  const handleLogin = (event : FormEvent<HTMLFormElement>) => {
    event.stopPropagation()
    event.preventDefault()
    const email = event.currentTarget.email.value
    const password = event.currentTarget.password.value
    login({
      email,
      password,
    }).then(res=>{
      setState(res.data.user.name)
    }).catch(err=>{
      console.log(err)
      setState("ERROR")
    })
  }

  return (
    <div className="App">
      {state? <p>User logged: {state}</p> : <p>No user logged</p>}
      <form onSubmit={handleLogin}>
        <p>
          <input name='email' type="email" />
        </p>
        <p>
          <input name='password' type="password" />
        </p>
          <input type="submit" />
      </form>
    </div>
  );
}

export default App;
