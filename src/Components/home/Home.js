import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import './home.css'

function Home(props) {

  const [post, setPost] = useState('');
  
  console.log(post)
  return (
    <div className='home-container'>
        <div className='home-post-container'>
          <input 
            placeholder="What's new?" 
            onChange={event => setPost(event.target.value)}/>
          <button>Post</button>
        </div>
        <div className='home-feed-container'>
        </div>
    </div>
  );
}

export default withRouter(Home);
