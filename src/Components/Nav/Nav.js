import React from 'react';
import {withRouter} from 'react-router-dom'
import teddy from '../auth/teddy-bear-flat-vector-800x566.jpg'
import './nav.css'

function Nav(props) {
  return (
    <div className='nav-container'>
      <div className='nav-action-container'>
          <img src={teddy} height='40px' onClick={() => props.history.push('/home')}/>
          {props.location.pathname === '/menu'
          ?(<h2 onClick={() => props.history.goBack()}>X</h2>)
          :(<label for='toggle' onClick={() => props.history.push('/menu')}>&#9776;</label>)}  
       </div> 
    </div>
  );
}

export default withRouter(Nav);
