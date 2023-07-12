import React, { useState } from "react";
import style from './Login.module.css'
import {User} from '../../data_models/User.model'

const Login: React.FC<{onLogin:(usernamePass:string, passwordPass:string|number)=> void}> = (props) => {
  const [enteredUsername, setUsername] = useState<User['username']>('');
  const [enteredPassword, setPassword] = useState<User['password']>('');

  const usernameHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const passwordHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

 
  const submitHandler = (e:React.FormEvent) => {
    e.preventDefault();
    props.onLogin(enteredUsername, enteredPassword)

    setUsername('')
    setPassword('')

  }

  return (
    <form className={style.login} onSubmit={submitHandler}>
      <div className={style.control}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" onChange={usernameHandler} value={enteredUsername}/>
      </div>
      <div className={style.control}>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={passwordHandler} value={enteredPassword}/>
      </div>
      <div className={style.actions}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
