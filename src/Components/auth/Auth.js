import React from 'react';
import {withRouter} from 'react-router-dom'
import './auth.css'
import teddy from './teddy-bear-flat-vector-800x566.jpg'

function Auth(props) {
  return (
    <div className='auth-container'>
      <h1>Tender Care</h1>
        <div className='login-container'>
            <img src={teddy} height='100px'/>
            <div className='login-action-container'>
              <input id='login-input' placeholder='username'/>
              <input id='login-input' type='password' placeholder='password'/>
              <button id='login-button' onClick={() => props.history.push('/home')}>Login</button>
            <p>create account?</p>
            </div>
        </div>
    </div>
  );
}

export default withRouter(Auth);
