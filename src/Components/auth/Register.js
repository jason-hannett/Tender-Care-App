import React from 'react';
import {withRouter} from 'react-router-dom'
import './register.css'
import teddy from './teddy-bear-flat-vector-800x566.jpg'

function Register(props) {
  return (
    <div className='auth-container'>
      <h1>Register</h1>
        <div className='register-info-container'>
            <img src={teddy} height='100px'/>
            <div className='login-action-container'>
              <input id='login-input' placeholder='Enter username'/>
              <input id='login-input' type='password' placeholder='Enter password'/>
              <input id='login-input' type='password' placeholder='Verify password'/>
              <button id='login-button' onClick={() => props.history.push('/home')}>REGISTER</button>
            <p onClick={() => props.history.goBack()}>Back</p>
            </div>
        </div>
    </div>
  );
}

export default withRouter(Register);
