import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';
import trash from './296-2961763_trash-icon-png-rubbish-white-bin-transparent-png.png'
import './post.css'

function Post(props) {

  const deletePost = () => {
    const {post_id} = props.post
    axios.delete(`/api/delete-post/${post_id}`)
  }
  
  console.log()
  return (
    <div className='post-container'>
      <div className='post-info-container'>
        <p id='post-date'>{props.post.time}</p>
        {props.user.user_id === 4 
        ? (<img src={trash} id='post-delete' height='20px' onClick={deletePost}/>) 
        : (<></>)}
      </div> 
        <p id='post-text'>{props.post.post}</p>
        {props.post.image === null 
        ? (<></>)
        : (<img 
            id='post-image'
            src={props.post.image}/>)}   
    </div>
  );
}

const mapStateToProps = reduxState => {
    
  return {
      user: reduxState.reducer
  }};


  export default connect(mapStateToProps)(withRouter(Post))
