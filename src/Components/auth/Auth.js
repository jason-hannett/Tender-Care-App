import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUserInfo} from '../../redux/reducer'
import axios from 'axios'
import './auth.css'
import teddy from './teddy-bear-flat-vector-800x566.jpg'

function Auth(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('clicked')
    axios.post('/api/login', {email, password})
    .then(response => {
        console.log(response.data)
        const {user_id, email} = response.data
        props.setUserInfo(user_id, email)
        props.history.push('/home');
    })
    .catch(err => alert('email or password incorrect'))
}

  console.log(email, password)
  return (
    <div className='auth-container'>
      <h1>Tender Care</h1>
        <div className='login-container'>
            <img src={teddy} height='100px'/>
            <div className='login-action-container'>
              <input 
                id='login-input' 
                placeholder='username'
                onChange={event => setEmail(event.target.value)}/>
              <input 
                id='login-input' 
                type='password' 
                placeholder='password'
                onChange={event => setPassword(event.target.value)}/>
              <button id='login-button' onClick={login}>LOGIN</button>
            <p onClick={() => props.history.push('/register')}>create account?</p>
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

export default connect(mapStateToProps, {setUserInfo})(withRouter(Auth))
