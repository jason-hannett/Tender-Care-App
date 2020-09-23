import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUserInfo} from '../../redux/reducer'
import axios from 'axios';
import './register.css'
import teddy from './teddy-bear-flat-vector-800x566.jpg'

function Register(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const register = async() => {
  
    return (password !== password1 
    ? alert('passwords do not match')
    : axios.post('/api/register', {email, password})
    .then(response => {
      console.log(response.data)
      const {user_id, email} = response.data
      props.setUserInfo(user_id, email)
      // ROUTE TO MORE CHILD INFO 
      props.history.push('/home')
  })
  .catch(err => alert('email already exists')))
  
}

  return (
    <div className='auth-container'>
      <h1>Register</h1>
        <div className='register-info-container'>
            <img src={teddy} height='100px'/>
            <div className='login-action-container'>
              <input 
                id='login-input' 
                placeholder='Enter email'
                onChange={event => setEmail(event.target.value)}/>
              <input 
                id='login-input' 
                type='password' 
                placeholder='Enter password'
                onChange={event => setPassword(event.target.value)}/>
              <input 
                id='login-input' 
                type='password' 
                placeholder='Verify password'
                onChange={event => setPassword1(event.target.value)}/>
              <button id='login-button' onClick={register}>REGISTER</button>
            <p onClick={() => props.history.goBack()}>Back</p>
            </div>
        </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
      user: reduxState.reducer
  }
}

export default connect(mapStateToProps, {setUserInfo})(withRouter(Register))
