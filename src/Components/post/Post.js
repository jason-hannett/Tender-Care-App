import React from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import './post.css'

function Post(props) {

  
  return (
    <div className='post-container'>
      <div className='post-info-container'>
        <p id='post-date'>{props.post.time}</p>
        <p id='post-text'>{props.post.post}</p>
      </div> 
        {props.post.image === null 
        ? (<></>)
        : (<img 
            id='post-image'
            src={props.post.image}/>)}   
    </div>
  );
}

export default withRouter(Post);
