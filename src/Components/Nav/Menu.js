import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu.css'

function Menu(props) {
  return (
    <div className='menu-container'>
        <h2 onClick={() => props.history.push('/home')}>Home</h2>
        <h2 onClick={() => props.history.push('/account')}>Account</h2>
        <h2 onClick={() => props.history.push('/calendar')}>Calendar</h2>
        <h2 onClick={() => props.history.push('/contact')}>Contact</h2>
    </div>
  );
}

export default withRouter(Menu);
